"use client"

/**
 * Subtle animated SVG grid pattern used as a background texture
 * to add visual sophistication to sections.
 */
export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.3" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

/**
 * Horizontal rule with a geometric accent mark
 */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-white/[0.06]" />
      <div className="w-2 h-2 rotate-45 border border-white/10" />
      <div className="h-px flex-1 bg-white/[0.06]" />
    </div>
  )
}
