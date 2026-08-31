const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const previewDir = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb";

// ==========================================
// CONCEPT 1: The Transatlantic Harbor Cardinal
// Architectural 'W' monogram fused with a sovereign crimson cardinal compass needle
// ==========================================
const concept1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <!-- Deep Midnight City Navy Background -->
  <rect width="1024" height="1024" fill="#0B1220" />

  <g transform="translate(512, 512) scale(0.92) translate(-512, -500)">
    
    <!-- 1. SOVEREIGN CRIMSON NORTH CARDINAL NEEDLE (#D32F4F) -->
    <!-- Left needle facet (bright crimson) -->
    <polygon points="512,148 468,430 512,380" fill="#E63956" />
    <!-- Right needle facet (deep burgundy shadow) -->
    <polygon points="512,148 556,430 512,380" fill="#B91C38" />

    <!-- 2. SOUTH CARDINAL NEEDLE / CENTER V-KEEL -->
    <!-- Left south facet (platinum) -->
    <polygon points="512,680 468,430 512,380" fill="#F3EFEA" />
    <!-- Right south facet (slate shadow) -->
    <polygon points="512,680 556,430 512,380" fill="#64748B" />

    <!-- 3. LEFT 'W' WING & OUTER PILLAR -->
    <!-- Left outer apex to base -->
    <polygon points="208,270 286,270 398,730 320,730" fill="#F3EFEA" />
    <!-- Left inner diagonal rising to center needle -->
    <polygon points="320,730 398,730 468,430 410,430" fill="#CBD5E1" />
    <!-- Left outer shadow bevel -->
    <polygon points="208,270 248,270 360,730 320,730" fill="#94A3B8" />

    <!-- 4. RIGHT 'W' WING & OUTER PILLAR -->
    <!-- Right outer apex to base -->
    <polygon points="816,270 738,270 626,730 704,730" fill="#94A3B8" />
    <!-- Right inner diagonal rising to center needle -->
    <polygon points="704,730 626,730 556,430 614,430" fill="#64748B" />
    <!-- Right outer shadow facet -->
    <polygon points="816,270 776,270 664,730 704,730" fill="#475569" />

    <!-- 5. HORIZONTAL MERIDIAN & TRANSATLANTIC TICKS (Berlin - NY) -->
    <line x1="156" y1="430" x2="410" y2="430" stroke="#F3EFEA" stroke-width="6" stroke-linecap="round" />
    <line x1="614" y1="430" x2="868" y2="430" stroke="#F3EFEA" stroke-width="6" stroke-linecap="round" />

    <!-- Left/Right Cardinal Star Ticks -->
    <polygon points="156,430 200,412 186,430 200,448" fill="#E63956" />
    <polygon points="868,430 824,412 838,430 824,448" fill="#B91C38" />

    <!-- Center Optical Razor Line -->
    <line x1="512" y1="148" x2="512" y2="680" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />

    <!-- Bottom Port Baseline Bar -->
    <line x1="260" y1="770" x2="764" y2="770" stroke="#64748B" stroke-width="4" stroke-linecap="round" />
    <circle cx="512" cy="770" r="6" fill="#D32F4F" />
  </g>
</svg>`;

// ==========================================
// CONCEPT 3: The Sovereign Port Medallion
// Circular harbor seal with interlocking anchor flukes forming a majestic 'W'
// ==========================================
const concept3Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
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

async function renderWesthafenSVGs() {
  const p1 = path.join(previewDir, "westhafen-concept1-preview.png");
  const p3 = path.join(previewDir, "westhafen-concept3-preview.png");

  await sharp(Buffer.from(concept1Svg)).resize(2048, 2048).png().toFile(p1);
  await sharp(Buffer.from(concept3Svg)).resize(2048, 2048).png().toFile(p3);

  fs.writeFileSync(path.join("/Users/pawelstepaniuk/Projects/Code/Mayerfeld/westhafen-consulting-website/public", "concept1.svg"), concept1Svg);
  fs.writeFileSync(path.join("/Users/pawelstepaniuk/Projects/Code/Mayerfeld/westhafen-consulting-website/public", "concept3.svg"), concept3Svg);

  console.log("Rendered Concept 1 to:", p1);
  console.log("Rendered Concept 3 to:", p3);
}

renderWesthafenSVGs().catch(console.error);
