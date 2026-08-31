"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Shield, Target, Lock, BarChart3 } from "lucide-react"

const values = [
  {
    number: "01",
    title: "The document is the record",
    description:
      "A memorandum is written to be read with attention, disagreed with in the margins, and kept on file. Meetings, telephone calls, and working sessions are in service of the document. They are not substitutes for it, and they do not exist to justify its length.",
    icon: Target,
  },
  {
    number: "02",
    title: "Short where short will serve",
    description:
      "Length is a cost paid by the reader. A seven-page memorandum that resolves the question earns its place where a forty-page presentation would only surround it. The firm resists the instinct to inflate scope into the appearance of thoroughness.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Confidence kept",
    description:
      "Material shared during an engagement is not repeated in pitch documents, public writing, or professional conversation. Discretion is not a clause to be negotiated into an engagement letter. It is the condition under which the firm operates.",
    icon: Lock,
  },
  {
    number: "04",
    title: "Signed by the author",
    description:
      "Every memorandum carries the name of the person who drafted it. There is no project team to stand behind. If a conclusion proves wrong in twelve months, the author is the one who answers for it. That exposure is what keeps the writing honest in the first place.",
    icon: Shield,
  },
]

export function ValuesPreview() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".values-heading", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".value-item", {
        scrollTrigger: {
          trigger: ".values-list",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      })
    },
    { scope: container },
  )

  return (
    <section ref={container} className="py-24 md:py-40 bg-[#060606]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-2">
            <p className="values-heading text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Standards
            </p>
            <h2 className="values-heading font-serif text-3xl md:text-5xl max-w-2xl leading-tight text-balance">
              Four standards the firm agrees to be measured by.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="values-heading text-neutral-500 text-sm leading-relaxed">
              These are the conditions under which the firm accepts an engagement and conducts it. Written here because a principal is entitled to refer to them after the memorandum has been delivered.
            </p>
          </div>
        </div>
        <div className="values-list grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.number}
                className="value-item bg-[#060606] p-8 md:p-12 group hover:bg-white/[0.015] transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs text-neutral-600 tracking-widest font-mono">
                    {value.number}
                  </span>
                  <Icon size={20} className="text-neutral-600 group-hover:text-neutral-400 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
