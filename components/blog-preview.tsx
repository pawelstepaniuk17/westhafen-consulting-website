"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "./transition-link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { SectionDivider } from "./grid-pattern"

const posts = [
  {
    title: "The Cost of Premature Alignment",
    excerpt: "The impulse to secure consensus before analysis is complete often produces decisions that satisfy the process while evading the question. When alignment becomes the objective, the objective disappears.",
    slug: "/notes/overhead-of-consensus",
    category: "Governance",
  },
  {
    title: "What Restructurings Actually Change",
    excerpt: "Reorganizations reliably produce new org charts. They less reliably produce new behaviors. The gap between structural change and behavioral change explains why most restructurings underperform their business case.",
    slug: "/notes/restructurings-disappoint",
    category: "Organization",
  },
  {
    title: "Deferred Decisions and Compounding Cost",
    excerpt: "Postponing a difficult choice rarely makes it easier. It usually makes it more expensive, both in direct financial terms and in the accumulated confusion that gathers around an unresolved question.",
    slug: "/notes/false-economy-postponement",
    category: "Strategy",
  },
]

export function BlogPreview() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".blog-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".blog-post", {
        scrollTrigger: {
          trigger: ".blog-grid",
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
    <section ref={container} className="py-24 md:py-40 bg-[#060606]">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionDivider className="mb-20" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2">
            <p className="blog-title text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Notes
            </p>
            <h2 className="blog-title font-serif text-3xl md:text-5xl max-w-2xl leading-tight">
              Short notes on decisions, governance, and the writing of both.
            </h2>
          </div>
          <div className="flex items-end">
            <TransitionLink
              href="/notes"
              className="blog-title group text-neutral-400 text-sm font-medium flex items-center gap-2 tracking-wide hover:text-white transition-colors"
            >
              View all notes <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
            </TransitionLink>
          </div>
        </div>
        <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {posts.map((post, index) => (
            <TransitionLink
              key={index}
              href={post.slug}
              className="blog-post bg-[#060606] p-8 md:p-10 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 border border-white/[0.06] px-3 py-1">
                  {post.category}
                </span>
                <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-4 group-hover:text-white transition-colors">{post.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  )
}
