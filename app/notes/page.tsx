"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"

const articles = [
  { 
    date: "November 2024", 
    title: "The Cost of Premature Alignment", 
    excerpt: "The impulse to secure consensus before analysis is complete often produces decisions that satisfy the process while evading the question. When alignment becomes the objective, the objective disappears.", 
    slug: "overhead-of-consensus",
    category: "Governance"
  },
  { 
    date: "October 2024", 
    title: "What Restructurings Actually Change", 
    excerpt: "Reorganizations reliably produce new org charts. They less reliably produce new behaviors. The gap between structural change and behavioral change explains why most restructurings underperform their business case.", 
    slug: "restructurings-disappoint",
    category: "Organization"
  },
  { 
    date: "September 2024", 
    title: "Deferred Decisions and Compounding Cost", 
    excerpt: "Postponing a difficult choice rarely makes it easier. It usually makes it more expensive, both in direct financial terms and in the accumulated confusion that gathers around an unresolved question.", 
    slug: "false-economy-postponement",
    category: "Strategy"
  },
  { 
    date: "August 2024", 
    title: "Metrics That Obscure Rather Than Reveal", 
    excerpt: "Dashboards can create the illusion of management without its substance. Numbers that no one acts on are not measurement; they are decoration.", 
    slug: "metrics-obscure-reveal",
    category: "Performance"
  },
  { 
    date: "July 2024", 
    title: "When Outside Perspective Actually Helps", 
    excerpt: "External advice has value under specific conditions. Knowing when those conditions apply, and when they do not, is the difference between useful engagement and expensive distraction.", 
    slug: "outside-perspective-helps",
    category: "Advisory"
  },
  { 
    date: "June 2024", 
    title: "The Problem With Best Practices", 
    excerpt: "Borrowing what worked elsewhere sounds sensible until you examine how rarely context transfers cleanly. What made a practice best in one setting may make it mediocre in another.", 
    slug: "problem-best-practices",
    category: "Strategy"
  },
]

export default function NotesPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".notes-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".notes-headline", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      })
      gsap.from(".notes-body", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7,
      })
      gsap.from(".notes-article", {
        scrollTrigger: {
          trigger: ".notes-articles",
          start: "top 80%",
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
    <div ref={container} className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero */}
        <section className="mb-16 md:mb-24">
          <p className="notes-label text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Notes
          </p>
          <h1 className="notes-headline font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mb-12 text-balance">
            Observations from advisory work.
          </h1>
          <div className="notes-body max-w-2xl">
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Brief pieces on recurring patterns we observe in leadership conversations. Not prescriptions, but considerations that may apply to your own situation.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="notes-articles">
          <div className="space-y-0">
            {articles.map((article, idx) => (
              <TransitionLink 
                key={idx} 
                href={`/notes/${article.slug}`} 
                className="notes-article group block"
              >
                <div className="py-12 border-t border-white/[0.06] first:border-t-0">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="md:w-40 flex-shrink-0">
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">{article.date}</p>
                      <p className="text-xs text-[#c9a35e]">{article.category}</p>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-[#c9a35e] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-neutral-400 leading-relaxed">{article.excerpt}</p>
                    </div>
                  </div>
                </div>
              </TransitionLink>
            ))}
          </div>
        </section>

        {/* About the notes */}
        <section className="mt-24 md:mt-32 border-t border-white/[0.06] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                About these notes
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-neutral-300 leading-relaxed mb-6">
                These pieces emerge from patterns we see repeated across engagements. They are written for people who already operate at a senior level and do not need basic concepts explained.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                The format is intentionally concise. Each note addresses one observation and explores its implications without padding. If the point can be made in a thousand words, we do not stretch it to three thousand.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Publication is irregular. We write when we have something to say, not according to a content calendar.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
