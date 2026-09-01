const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputPath = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/.user_uploaded/media_1788259167761.jpg";
const output2k = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos/westhafen-consulting-logo-2k.png";
const publicDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/westhafen-consulting-website/public";
const appDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/westhafen-consulting-website/app";

async function processWesthafenLogo() {
  console.log("Processing Westhafen 'W' Handshake Logo with flood-fill background removal...");

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const numPixels = w * h;

  // 1. Flood-fill from outer edges to identify true external background
  const isBg = new Uint8Array(numPixels);
  const queue = [];

  function isWhite(x, y) {
    const idx = (y * w + x) * 3;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const brightness = (r + g + b) / 3;
    const maxVal = Math.max(r, g, b);
    const minVal = Math.min(r, g, b);
    return brightness > 235 && (maxVal - minVal) < 15;
  }

  // Seed with all boundary pixels
  for (let x = 0; x < w; x++) {
    if (isWhite(x, 0)) { isBg[0 * w + x] = 1; queue.push(x, 0); }
    if (isWhite(x, h - 1)) { isBg[(h - 1) * w + x] = 1; queue.push(x, h - 1); }
  }
  for (let y = 0; y < h; y++) {
    if (isWhite(0, y)) { isBg[y * w + 0] = 1; queue.push(0, y); }
    if (isWhite(w - 1, y)) { isBg[y * w + (w - 1)] = 1; queue.push(w - 1, y); }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (!isBg[nidx] && isWhite(nx, ny)) {
          isBg[nidx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Create RGBA buffer: exterior background is transparent, inner hands stay solid white!
  const rgba = Buffer.alloc(numPixels * 4);
  for (let i = 0; i < numPixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;

    if (isBg[i]) {
      const brightness = (r + g + b) / 3;
      if (brightness > 248) {
        rgba[i * 4 + 3] = 0;
      } else {
        // Antialiased edge
        const alpha = Math.max(0, Math.min(255, Math.round((255 - brightness) * (255 / 25))));
        rgba[i * 4 + 3] = alpha;
      }
    } else {
      rgba[i * 4 + 3] = 255;
    }
  }

  const transparentBuf = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

  // 1. Export 2K Master PNG (2048x2048, transparent)
  const master2k = await sharp(transparentBuf)
    .resize(2048, 2048, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.mkdirSync("/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos", { recursive: true });
  fs.writeFileSync(output2k, master2k);
  fs.writeFileSync("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/westhafen-consulting-logo-2k.png", master2k);
  fs.writeFileSync(path.join(publicDir, "westhafen-consulting-logo-2k.png"), master2k);

  // 2. Generate Master SVG for header/website
  const b64 = (await sharp(transparentBuf).resize(1024, 1024).png().toBuffer()).toString("base64");
  const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" width="1024" height="1024">
  <image width="1024" height="1024" xlink:href="data:image/png;base64,${b64}" />
</svg>`;
  fs.writeFileSync(path.join(publicDir, "logo.svg"), logoSvg);
  fs.writeFileSync(path.join(publicDir, "images/logo.png"), await sharp(transparentBuf).resize(256, 256).png().toBuffer());
  fs.writeFileSync(path.join(publicDir, "images/westhafen-logo.png"), await sharp(transparentBuf).resize(256, 256).png().toBuffer());

  // 3. Circular & Square Favicon Suite for Westhafen
  // A circular disk with subtle boundary or clean transparent mark
  // Generate multi-size favicons
  await sharp(master2k).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(master2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(master2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-icon.png"));
  await sharp(master2k).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  await sharp(master2k).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  await sharp(master2k).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  await sharp(master2k).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));

  const icoBuf = await sharp(master2k).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  // App router icons
  if (fs.existsSync(appDir)) {
    await sharp(master2k).resize(512, 512).png().toFile(path.join(appDir, "icon.png"));
    await sharp(master2k).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));
    fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuf);
  }

  // Favicon SVGs
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), logoSvg);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), logoSvg);

  console.log("Westhafen 'W' Handshake Logo and favicons processed successfully!");
}

processWesthafenLogo().catch(console.error);
