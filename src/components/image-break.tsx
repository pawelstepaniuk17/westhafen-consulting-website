"use client"

import Image from "next/image"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function ImageBreak() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".image-break-img", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        scale: 1.08,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} className="py-8 md:py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="image-break-img relative aspect-[21/9] overflow-hidden">
          <Image
            src="/images/analysis-framework.jpg"
            alt="Analysis framework"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1400px"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/40" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
      </div>
    </section>
  )
}
