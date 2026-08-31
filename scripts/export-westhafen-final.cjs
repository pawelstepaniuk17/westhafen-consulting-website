const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/westhafen-consulting-website/public";
const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";

// Concept 3: The Sovereign Port Medallion (Interlocking Anchor "W" Seal)
const westhafenSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <!-- Deep Midnight City Navy Background -->
  <rect width="1024" height="1024" fill="#0B1220" />

  <g transform="translate(512, 512) scale(0.92) translate(-512, -500)">
    
    <!-- 1. CIRCULAR HARBOR SEAL RIMS -->
    <circle cx="512" cy="500" r="390" stroke="#1E293B" stroke-width="6" />
    <circle cx="512" cy="500" r="374" stroke="#F3EFEA" stroke-opacity="0.3" stroke-width="3" />
    <circle cx="512" cy="500" r="356" stroke="#D32F4F" stroke-width="4" />

    <!-- 2. CENTRAL SOVEREIGN CRIMSON NAVIGATION STAR -->
    <!-- Top Ray -->
    <polygon points="512,210 528,300 512,284 496,300" fill="#E63956" />
    <!-- Bottom Ray -->
    <polygon points="512,390 528,300 512,316 496,300" fill="#B91C38" />
    <!-- Left Ray -->
    <polygon points="422,300 512,284 496,300 512,316" fill="#E63956" />
    <!-- Right Ray -->
    <polygon points="602,300 512,284 528,300 512,316" fill="#B91C38" />
    <!-- Center Core Pip -->
    <circle cx="512" cy="300" r="8" fill="#FFFFFF" />

    <!-- 3. INTERLOCKING ANCHOR CHEVRONS FORMING 'W' -->
    <!-- Outer Left Fluke (Platinum) -->
    <path d="M 230, 420 
             L 278, 380 
             L 348, 700 
             C 348, 740 380, 770 424, 770
             L 472, 770
             L 512, 580
             L 468, 580
             L 444, 712
             C 424, 712 408, 696 408, 676
             L 316, 420
             Z" fill="#F3EFEA" />

    <!-- Outer Right Fluke (Steel Slate Shadow) -->
    <path d="M 794, 420 
             L 746, 380 
             L 676, 700 
             C 676, 740 644, 770 600, 770
             L 552, 770
             L 512, 580
             L 556, 580
             L 580, 712
             C 600, 712 616, 696 616, 676
             L 708, 420
             Z" fill="#94A3B8" />

    <!-- Center Interlocking Crown V-Keel (Crimson & Platinum) -->
    <!-- Left Center Keel -->
    <polygon points="512,430 460,590 512,590" fill="#E63956" />
    <!-- Right Center Keel -->
    <polygon points="512,430 564,590 512,590" fill="#B91C38" />

    <!-- Anchor Crown Ring at Base -->
    <circle cx="512" cy="770" r="28" stroke="#F3EFEA" stroke-width="6" fill="#0B1220" />
    <circle cx="512" cy="770" r="10" fill="#D32F4F" />

    <!-- Transatlantic Meridian Hairline -->
    <line x1="200" y1="500" x2="260" y2="500" stroke="#D32F4F" stroke-width="4" />
    <line x1="764" y1="500" x2="824" y2="500" stroke="#D32F4F" stroke-width="4" />
  </g>
</svg>`;

async function deployWesthafenLogo() {
  fs.mkdirSync(exportedDir, { recursive: true });
  fs.mkdirSync(publicDir, { recursive: true });

  const buf = Buffer.from(westhafenSvg);

  // 1. Export 2K Master PNG (2048x2048)
  await sharp(buf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toFile(path.join(exportedDir, "westhafen-consulting-logo-2k.png"));

  await sharp(buf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, "westhafen-consulting-logo-2k.png"));

  await sharp(buf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toFile("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/westhafen-consulting-logo-2k.png");

  // 2. Export SVGs
  fs.writeFileSync(path.join(publicDir, "logo.svg"), westhafenSvg);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), westhafenSvg);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), westhafenSvg);

  // 3. Export Comprehensive Favicons
  fs.mkdirSync(path.join(publicDir, "images"), { recursive: true });
  await sharp(buf).resize(512, 512).png().toFile(path.join(publicDir, "images", "logo.png"));
  await sharp(buf).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(buf).resize(180, 180).png().toFile(path.join(publicDir, "apple-icon.png"));
  await sharp(buf).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(buf).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  await sharp(buf).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  await sharp(buf).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  await sharp(buf).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));
  await sharp(buf).resize(32, 32).png().toFile(path.join(publicDir, "icon-light-32x32.png"));
  await sharp(buf).resize(32, 32).png().toFile(path.join(publicDir, "icon-dark-32x32.png"));

  const icoBuf = await sharp(buf).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  console.log("Westhafen Consulting 2K logo & favicons exported successfully!");
}

deployWesthafenLogo().catch(console.error);
