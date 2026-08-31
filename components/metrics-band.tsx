"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { GridPattern } from "./grid-pattern"

const metrics = [
  { value: "15+", label: "Years of advisory experience" },
  { value: "120+", label: "Engagements completed" },
  { value: "40+", label: "Countries served" },
  { value: "100%", label: "Client confidentiality maintained" },
]

export function MetricsBand() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".metric-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} className="relative py-20 md:py-28 border-y border-white/[0.06] overflow-hidden">
      <GridPattern className="opacity-60" />
      <div className="relative container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="metric-item text-center md:text-left">
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2">
                {metric.value}
              </p>
              <p className="text-neutral-500 text-xs md:text-sm tracking-wide uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
