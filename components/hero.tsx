"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.fromTo(
        ".hero-title span",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 1.2, ease: "power3.out" },
      )
        .fromTo(
          ".hero-subtitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "power3.inOut" },
          "-=0.4",
        )
        .fromTo(
          ".hero-button",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
    },
    { scope: container },
  )

  const words = ["Written", "before", "the", "decision", "is", "taken."]
  const splitTitle = words.map((word, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="inline-block">{word}&nbsp;</span>
    </span>
  ))

  return (
    <div ref={container} className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,158,179,0.08)_0%,_transparent_70%)]" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="hero-title font-serif font-normal text-4xl md:text-6xl lg:text-8xl mb-8 max-w-5xl leading-tight text-balance">
          {splitTitle}
        </h1>
        <div className="hero-line w-16 h-px bg-white/30 mb-8 origin-center" />
        <p className="hero-subtitle text-base md:text-lg lg:text-xl max-w-2xl mb-10 text-neutral-400 leading-relaxed">
          A private advisory practice. Counsel for chairs, chief executives, and board committees on questions that will be consequential past the meeting in which they are decided. Written, signed, and kept on file. Offices in Berlin and New York.
        </p>
        <TransitionLink href="/#services">
          <button className="hero-button flex items-center gap-3 border border-white/20 text-white font-medium py-3 px-8 rounded-full text-sm tracking-wide transition-colors duration-300 hover:bg-white/5">
            The forms of counsel <ArrowDown size={16} />
          </button>
        </TransitionLink>
      </div>
    </div>
  )
}
