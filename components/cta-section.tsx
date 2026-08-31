"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { motion } from "framer-motion"
import { TransitionLink } from "./transition-link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CtaSection() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      gsap.from(".cta-image", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} className="py-24 md:py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="cta-content">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              First exchange
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 text-balance">
              Put the question in a paragraph. We will reply in kind.
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              A short written description of the situation is more useful than a form submission. State the question, the timing, and any constraints bearing on the conclusion. A reply typically follows within a few working days, with a proposal for a call only where the question warrants one. First exchanges are held in confidence and commit neither side.
            </p>
            <TransitionLink href="/contact">
              <motion.button
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-medium py-3.5 px-8 rounded-md text-sm tracking-wide hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Open a correspondence <ArrowRight size={16} />
              </motion.button>
            </TransitionLink>
          </div>
          <div className="cta-image relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/strategy-meeting.jpg"
              alt="Executive boardroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-[#0b1220]/20" />
            {/* Geometric corner accent */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/20" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
