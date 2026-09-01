const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/westhafen-consulting-website/public";
const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";
const appDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/westhafen-consulting-website/app";
const transparentLogoPath = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos/westhafen-consulting-logo-2k.png";

async function applyWesthafenWhiteCircle() {
  console.log("Compositing Westhafen Ribbon 'W' Handshake into a crisp white circle...");

  const circleSize = 2048;
  const logoSize = 1450; // 70% scale inside the white circular medallion for optimal optical balance

  const logoBuf = await sharp(transparentLogoPath)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Create crisp white circular disc on a transparent background with subtle elegant hairline rim
  const circleSvg = Buffer.from(`<svg width="${circleSize}" height="${circleSize}" viewBox="0 0 ${circleSize} ${circleSize}" xmlns="http://www.w3.org/2000/svg">
    <!-- Clean pure white circular disc -->
    <circle cx="${circleSize / 2}" cy="${circleSize / 2}" r="${(circleSize / 2) - 30}" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="20" />
  </svg>`);

  const circularMaster2k = await sharp(circleSvg)
    .composite([
      {
        input: logoBuf,
        top: Math.round((circleSize - logoSize) / 2),
        left: Math.round((circleSize - logoSize) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();

  // 1. Export 2K Master PNG (2048x2048)
  fs.writeFileSync(path.join(exportedDir, "westhafen-consulting-logo-2k.png"), circularMaster2k);
  fs.writeFileSync("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/westhafen-consulting-logo-2k.png", circularMaster2k);
  fs.writeFileSync("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/westhafen-circle-preview.png", circularMaster2k);
  fs.writeFileSync(path.join(publicDir, "westhafen-consulting-logo-2k.png"), circularMaster2k);

  // 2. Generate Master SVG for header & web
  const b64 = (await sharp(circularMaster2k).resize(1024, 1024).png().toBuffer()).toString("base64");
  const circularSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" width="1024" height="1024">
  <image width="1024" height="1024" xlink:href="data:image/png;base64,${b64}" />
</svg>`;

  fs.writeFileSync(path.join(publicDir, "logo.svg"), circularSvgContent);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), circularSvgContent);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), circularSvgContent);

  // 3. Update public images
  fs.writeFileSync(path.join(publicDir, "images/logo.png"), await sharp(circularMaster2k).resize(256, 256).png().toBuffer());
  fs.writeFileSync(path.join(publicDir, "images/westhafen-logo.png"), await sharp(circularMaster2k).resize(256, 256).png().toBuffer());

  // 4. Generate Full Multi-Size Favicon Suite
  await sharp(circularMaster2k).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(circularMaster2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(circularMaster2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-icon.png"));
  await sharp(circularMaster2k).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  await sharp(circularMaster2k).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  await sharp(circularMaster2k).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  await sharp(circularMaster2k).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));

  const icoBuf = await sharp(circularMaster2k).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  // Next.js App Router Native Icons
  if (fs.existsSync(appDir)) {
    await sharp(circularMaster2k).resize(512, 512).png().toFile(path.join(appDir, "icon.png"));
    await sharp(circularMaster2k).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));
    fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuf);
  }

  console.log("Westhafen circular white badge logo and favicons generated successfully!");
}

applyWesthafenWhiteCircle().catch(console.error);
