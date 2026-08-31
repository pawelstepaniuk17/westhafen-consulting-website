"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowRight } from "lucide-react"
import { TransitionLink } from "./transition-link"
import Image from "next/image"
import { GridPattern } from "./grid-pattern"

const services = [
  {
    number: "01",
    title: "Commissioned memorandum",
    description:
      "A written analysis on a defined question, commissioned by a principal and produced under a single signature. The document is intended to be read carefully, marked up, and kept on file. Conclusions are stated, reasoned, and owned by the author whose name appears at the foot of the page.",
    detail: "Single author, fixed scope, board-ready",
  },
  {
    number: "02",
    title: "Review before commitment",
    description:
      "Independent scrutiny of a decision close to signature: a transaction, a capital programme, a change to the operating structure, a shift in strategic posture. The memorandum reads the internal case against itself, identifies the assumptions that carry the weight of the conclusion, and states the conditions under which the present view should be reconsidered.",
    detail: "Dissenting read before signature",
  },
  {
    number: "03",
    title: "Standing counsel",
    description:
      "A continuing relationship held by a chief executive, a chair, or a board committee navigating several related questions across a six- to twelve-month horizon. Short memoranda are written as the questions surface, each treated with the same discipline as a standalone engagement. Governance transitions, reconstitutions, and succession sequences are familiar contexts.",
    detail: "Rolling brief, capped hours, one named author",
  },
]

export function Services() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".services-heading", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".services-image", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        x: -40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      })

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} id="services" className="relative py-20 md:py-28 px-6 overflow-hidden">
      <GridPattern />
      <div className="relative container mx-auto max-w-6xl">
        {/* Header with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <p className="services-heading text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Counsel
            </p>
            <h2 className="services-heading font-serif text-3xl md:text-5xl lg:text-6xl max-w-xl leading-tight text-balance">
              Counsel takes three forms. Each is authored. Each is signed.
            </h2>
          </div>
          <div className="services-image relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/precision-detail.jpg"
              alt="Precision in analytical work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-[#0b1220]/20" />
            <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-white/15" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-white/15" />
          </div>
        </div>

        {/* Service cards */}
        <div className="services-grid grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-card bg-[#0b1220] p-8 md:p-10 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <span className="text-xs text-neutral-600 tracking-widest mb-6 font-mono">
                {service.number}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <p className="text-neutral-600 text-xs tracking-wide uppercase border-t border-white/[0.04] pt-4">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <TransitionLink href="/mandates">
            <button className="inline-flex items-center gap-3 border border-primary/40 text-foreground font-medium py-3 px-8 rounded-md text-sm tracking-wide transition-all duration-300 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]">
              The full mandate list <ArrowRight size={16} />
            </button>
          </TransitionLink>
        </div>
      </div>
    </section>
  )
}
