"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"
import { ArrowRight, Shield, Target, Lock, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { GridPattern } from "@/components/grid-pattern"

const values = [
  {
    number: "01",
    title: "The text is the work",
    description:
      "The deliverable is the document, not the sequence of meetings that produced it. A memorandum is written to be read with attention, disagreed with in the margins, and returned to when the facts change. Every conversation during an engagement is in service of the text, and not the other way around.",
    icon: Target,
  },
  {
    number: "02",
    title: "Short where short will serve",
    description:
      "Length is a cost paid by the reader. A five-page memorandum that resolves the question earns its place where a forty-page presentation would only surround it. The firm resists the instinct to inflate scope into the appearance of rigour.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Confidence kept",
    description:
      "Material shared during an engagement is not repeated in pitch documents, public writing, anonymised anecdote, or the private conversations of the firm. Discretion is not a clause to be negotiated into an engagement letter. It is the condition under which the practice functions.",
    icon: Lock,
  },
  {
    number: "04",
    title: "Signed, never ghostwritten",
    description:
      "Every memorandum carries the name of the person who drafted it. If a conclusion proves wrong in twelve months, there is no project team to stand behind. That exposure is what keeps the writing honest in the first place.",
    icon: Shield,
  },
]

const approach = [
  {
    number: "01",
    title: "Reading before writing",
    description:
      "Every engagement opens with a period of reading. Board papers, internal memoranda, management accounts, prior strategy documents, organigrams, committee minutes. The aim is to reconstruct the terms of the decision from the inside before any view takes shape. Most misdiagnoses in advisory work trace back to this step being shortened.",
    detail: "Document review, briefings, internal interviews",
  },
  {
    number: "02",
    title: "Writing as thinking",
    description:
      "We do not prepare findings and then write them up. We write as we think, which means first drafts wrong in emphasis, drafts written to be torn apart. The argument takes shape through revision, not through deliberation around a table. By the time a client sees a draft, it has already survived its harshest reader: the author.",
    detail: "Draft, internal critique, successive revision",
  },
  {
    number: "03",
    title: "Delivery without ceremony",
    description:
      "The final memorandum is handed over as a document, read in advance of the one session that follows, and discussed there rather than unveiled in a presentation. The session tests the conclusions against what the client knows of the house, and where useful produces a signed addendum recording points the client accepts, disputes, or wishes to reopen.",
    detail: "Written delivery, one session, signed addendum",
  },
]

export default function AboutPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".about-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })

      gsap.from(".about-headline", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      })

      gsap.from(".about-intro", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
      })

      gsap.from(".about-hero-image", {
        scrollTrigger: {
          trigger: ".about-hero-image",
          start: "top 90%",
        },
        scale: 1.05,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      })

      gsap.from(".approach-item", {
        scrollTrigger: {
          trigger: ".approach-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      })

      gsap.from(".values-heading-about", {
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      })

      gsap.from(".standard-section", {
        scrollTrigger: {
          trigger: ".standard-section",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    },
    { scope: container },
  )

  return (
    <div ref={container} className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero */}
        <section className="mb-24 md:mb-40">
          <p className="about-label text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            The firm
          </p>
          <h1 className="about-headline font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mb-12 text-balance">
            A small practice of private counsel, kept deliberately so.
          </h1>
          <div className="about-intro grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="max-w-xl">
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6">
                Westhafen Consulting is an independent advisory practice serving chairs, chief executives, and board committees on questions where the internal view requires serious external challenge and the record of that challenge must be written down. Written argument produces sharper thinking than conversation, and the person who signs a memorandum should be the person who read the file.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                The practice holds offices in Berlin and New York. The firm is kept small by design. The number of engagements accepted in any quarter is set by the author&apos;s capacity to read, to write, and to carry the work through to signature.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mt-6">
                Engagements have included boards and principals in financial services, infrastructure, industrials, healthcare, and technology sectors across Europe and North America.
              </p>
            </div>
            <div className="about-hero-image relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/strategic-foundation.jpg"
                alt="Strategic foundation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0b1220]/30" />
              <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-white/15" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-white/15" />
            </div>
          </div>
        </section>

        {/* Professional foundation */}
        <section className="standard-section mb-24 md:mb-40 border-t border-white/[0.06] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
                Professional foundation
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6">
                The practice draws on experience across investment banking, private equity due diligence, and board-level advisory work for European and North American institutions. Prior to establishing Westhafen, the principal held roles involving strategic analysis at the holding-company level, portfolio oversight, and transaction execution for organisations managing assets across multiple jurisdictions.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed mb-6">
                Engagements have run across industrial manufacturing, financial services, infrastructure, healthcare, and professional services. The common thread is work that requires translation between the working affairs of a house and the decisions a board must take on them, where the conclusions will be read by directors, shareholders, and regulators, and will have to hold up in each reading.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/[0.06]">
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Academic background</p>
                  <p className="text-neutral-300 text-sm">Advanced degrees in economics and public policy from European and American institutions.</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Professional standards</p>
                  <p className="text-neutral-300 text-sm">Appropriate professional indemnity coverage maintained. Operates under applicable US regulatory frameworks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Leadership */}
        <section className="standard-section mb-24 md:mb-40 border-t border-white/[0.06] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
                Leadership
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl mb-1">Paul Bauer</h3>
                    <p className="text-neutral-500 text-sm uppercase tracking-wider">Chief Executive Officer</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  Paul leads strategy and client engagement across the firm's advisory practice. He brings experience in institutional asset management, corporate strategy, and board-level advisory to questions of leadership, governance, and organizational change.
                </p>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  Prior to joining Westhafen, Paul held positions in corporate finance, equity research, and institutional asset management. He has advised on transactions and strategic decisions across financial services, industrials, and infrastructure sectors in North America and Europe. His background includes portfolio management, investment evaluation, and board governance work for institutional investors and family offices.
                </p>
              </div>
              <div className="mb-12 border-t border-white/[0.06] pt-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl mb-1">Liene Balabka</h3>
                    <p className="text-neutral-500 text-sm uppercase tracking-wider">Director</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  Liene founded Westhafen Consulting to establish a practice on the conviction that strategy deserves argument rather than consensus-building, and that what writing reveals, conversation tends to obscure. Her work centres on questions where the internal case is incomplete or the available information has produced a false sense of certainty.
                </p>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  Prior to founding the firm, Liene held positions in corporate strategy, investment banking, and private equity advisory. She has led engagements across infrastructure, financial services, industrials, and healthcare in Europe and North America. Her background includes portfolio analysis, transaction evaluation, and governance work for institutional investors and corporate holding companies.
                </p>
              </div>
              <div className="mb-12 border-t border-white/[0.06] pt-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl mb-1">Thomas Reinhardt</h3>
                    <p className="text-neutral-500 text-sm uppercase tracking-wider">Senior Adviser</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  Thomas advises on questions at the boundary of governance and capital structure, with particular attention to decisions where the ownership layer and the operating layer are pulling in different directions. His work is analytical before it is prescriptive.
                </p>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  His background spans restructuring advisory, sovereign wealth fund governance, and senior positions in European infrastructure investment. He has worked across Germany, Austria, and Switzerland, with additional engagements in the Benelux and Nordic markets. He writes in German and English.
                </p>
              </div>
              <div className="mb-12 border-t border-white/[0.06] pt-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl mb-1">Claire Ashworth</h3>
                    <p className="text-neutral-500 text-sm uppercase tracking-wider">Adviser</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  Claire focuses on governance design and succession questions for closely held businesses and family-controlled institutions. She is engaged where the principal needs a written record of the decision process as much as the decision itself.
                </p>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  Prior to joining Westhafen, Claire held positions in institutional law, private client advisory, and board secretariat work for listed companies in the United Kingdom and Canada. Her background includes board effectiveness reviews, conflict-of-interest frameworks, and the preparation of board-level papers for investment committees and audit functions.
                </p>
              </div>
              <div className="mb-12 border-t border-white/[0.06] pt-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl mb-1">Donna Wilson</h3>
                    <p className="text-neutral-500 text-sm uppercase tracking-wider">Director, Performance &amp; Transformation</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  Donna advises on operational questions where strategy and execution diverge: how to deliver transformation programmes at scale, how to align business units around a coherent performance framework, and how to structure accountability for complex organizational change.
                </p>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  Her background spans corporate strategy, management consulting, and performance improvement across multiple industries. She has led engagements on digital transformation, operational redesign, change management, and business model innovation in Europe and North America. She is fluent in Dutch and English.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Standard */}
        <section className="standard-section mb-24 md:mb-40 border-t border-white/[0.06] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
                Internal standards
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6">
                A short list of questions the firm returns to once an engagement has closed: was the memorandum sharper than the conversation that preceded it; did the client reread any section six months on; did the analysis hold when circumstances shifted; would the author sign the same document today.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed">
                These are not published. They are internal standards that govern how mandates are scoped and accepted. Work that cannot answer them is work the firm does not want.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="approach-section relative mb-24 md:mb-40 overflow-hidden">
          <GridPattern />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-12">
              Approach
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className="approach-item bg-[#0b1220] p-8 md:p-10 group hover:bg-white/[0.02] transition-colors duration-500"
                >
                  <span className="text-xs text-neutral-600 tracking-widest font-mono mb-4 block">{item.number}</span>
                  <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <p className="text-neutral-600 text-xs tracking-wide uppercase border-t border-white/[0.04] pt-4">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-width image */}
        <section className="mb-24 md:mb-40">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/images/strategy-meeting.jpg"
              alt="Executive boardroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0b1220]/40" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0b1220] to-transparent" />
          </div>
        </section>

        {/* Values */}
        <section className="values-section mb-24 md:mb-40">
          <div className="mb-16">
            <p className="values-heading-about text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
              House rules
            </p>
            <h2 className="values-heading-about font-serif text-3xl md:text-5xl max-w-2xl leading-tight text-balance">
              Four conditions the practice imposes on itself, in writing.
            </h2>
            <p className="text-neutral-400 text-base mt-6 max-w-2xl leading-relaxed">
              The refusals and insistences that determine which engagements are accepted and how they are conducted. Written here so that a principal can refer to them after the work is done.
            </p>
          </div>
          <div className="values-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.number}
                  className="value-card bg-[#0b1220] p-8 md:p-12 group hover:bg-white/[0.015] transition-colors duration-500"
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
        </section>

        {/* CTA */}
        <section className="text-center border-t border-white/[0.06] pt-20">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            If there is a question in hand.
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            First exchanges are held in confidence and commit neither party. Where the firm is not the right fit, it will say so in the same correspondence rather than leave the matter open.
          </p>
          <TransitionLink href="/contact">
            <motion.button
              className="inline-flex items-center gap-3 bg-[#9a2f43] text-white font-medium py-3 px-8 rounded-full text-sm tracking-wide hover:bg-[#7f2536] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Begin the correspondence <ArrowRight size={16} />
            </motion.button>
          </TransitionLink>
        </section>
      </div>
    </div>
  )
}
