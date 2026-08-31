"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { TransitionLink } from "@/components/transition-link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.fromTo(
        ".hero-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      )
        .fromTo(
          ".hero-title span span",
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 1.1, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".hero-subtitle",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "power3.inOut" },
          "-=0.5",
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

  const words = ["Judgment", "for", "the", "decisions", "that", "endure."]
  const splitTitle = words.map((word, i) => (
    <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.18em] -mb-[0.18em]">
      <span className={`inline-block ${word === "Judgment" ? "font-serif italic text-primary pr-[0.06em]" : ""}`}>
        {word}&nbsp;
      </span>
    </span>
  ))

  return (
    <section
      ref={container}
      className="relative w-full min-h-[100svh] overflow-hidden bg-background"
    >
      {/* Cover photograph with navy scrim for readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-boardroom.jpg"
          alt="Senior advisers in discussion over documents in a boardroom at dusk"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pt-28 pb-20 sm:pt-36 md:pt-44">
        <p className="hero-eyebrow mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-primary">
          Private Advisory &middot; Berlin &amp; New York
        </p>
        <h1 className="hero-title max-w-4xl font-serif font-semibold text-[52px] leading-[1.0] tracking-[-0.025em] text-balance sm:text-7xl md:text-8xl lg:text-[6.5rem]">
          {splitTitle}
        </h1>
        <div className="hero-line mt-10 mb-8 h-px w-16 origin-left bg-primary/60" />
        <p className="hero-subtitle max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          A private advisory practice. Counsel for chairs, chief executives, and board committees on questions that will
          be consequential past the meeting in which they are decided. Written, signed, and kept on file. Offices in
          Berlin and New York.
        </p>
        <div className="hero-button mt-10">
          <TransitionLink href="/#services">
            <button className="inline-flex items-center gap-3 rounded-md border border-primary/40 px-8 py-3.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-300 hover:bg-primary/10">
              The forms of counsel <ArrowDown size={16} className="text-primary" />
            </button>
          </TransitionLink>
        </div>
      </div>
    </section>
  )
}
