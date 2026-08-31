"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const stages = [
  {
    number: "01",
    title: "Intake letter",
    body: "Every engagement begins with an exchange in writing. A principal describes the question in a paragraph: what is to be decided, what is already believed about it, and what evidence would disturb that belief. A reply follows, usually within a week, in the form of a counter-memorandum. It states where we believe the real question sits, what would have to be read before a view can be formed, and whether the engagement is one the firm should accept. Nothing is commercial at this stage. Two short pieces of writing against each other are the first test of whether there is a serious problem underneath.",
    detail: "Written exchange, no commercial commitment",
  },
  {
    number: "02",
    title: "Reading room",
    body: "Once an engagement is accepted, a period of concentrated reading follows. Board papers, management accounts, prior analyses, committee minutes, organigrams, the material contracts. The client opens a protected folder. We return to it with annotations. Working sessions do not run during this phase. Status updates are not issued. The product of reading is further reading: the questions the record leaves open, and the small number of conversations that will resolve them.",
    detail: "Document review with written annotations",
  },
  {
    number: "03",
    title: "Interviews on the record",
    body: "A limited number of structured conversations with those closest to the question. Each is preceded by a written brief stating the matters to be raised, and followed by a short note summarising what was said, circulated to the interviewee for correction. Nothing is recorded that the interviewee has not seen. Nothing is later quoted that the interviewee has not approved. The record is auditable because it has been agreed by the parties who created it.",
    detail: "Agreed notes on both sides of the exchange",
  },
  {
    number: "04",
    title: "Draft and redraft",
    body: "The engagement turns on a document that passes through several private versions before the client sees it. First drafts are wrong in emphasis as often as they are wrong in conclusion. Each draft is read against the evidence the files hold, the interviews the notes capture, and the objections a dissenting reader would raise. Only a draft the author is prepared to defend leaves the desk.",
    detail: "Private iteration before any external reading",
  },
  {
    number: "05",
    title: "Settlement",
    body: "The final memorandum is handed over to be read, not to be presented. A single working session follows, typically with the principal who commissioned the work and, where appropriate, one or two others. The purpose of the session is to test the argument against what the client knows of the house, and to record where we agree, where we disagree, and where further work is wanted. Points the client wishes to place on record are added as a signed addendum. The engagement closes when the document is settled, not when a timeline expires.",
    detail: "One reading, one session, signed addendum",
  },
]

const formats = [
  { 
    title: "Focused read", 
    duration: "2-4 weeks",
    body: "Used when the question is narrowly defined and the window in which a view is needed is short. Common contexts: a proposal before a board meeting, a decision moving toward signature, a position a principal wishes to test before committing to it in the open.",
    examples: "Investment proposition, transaction assessment, position test before signature"
  },
  { 
    title: "Structured programme", 
    duration: "6-12 weeks",
    body: "Used when the question spans more than one business, one balance sheet, or one horizon. A longer period of reading, a wider set of conversations, and a more developed memorandum that addresses several interlocking decisions and the sequence in which they should be resolved.",
    examples: "Strategic review, operating model redesign, organizational reconstitution"
  },
  { 
    title: "Standing arrangement", 
    duration: "3-6 months",
    body: "Used when a decision has been taken and a principal wishes to retain an outside reader across the period in which its consequences unfold. The firm does not sit on the executive team. It reads and writes alongside it, and it withdraws on a stated date or at an agreed review gate.",
    examples: "Post-transaction oversight, transformation review, leadership transition"
  },
]

const principles = [
  {
    title: "Write before concluding",
    body: "An argument in full sentences is a test. Conclusions that hold up in conversation often fail in prose. We write early, revise hard, and do not settle on a view until the argument has survived its own sentences."
  },
  {
    title: "Show the working",
    body: "Every significant claim is traceable to a source or to an assumption stated openly. A reader who disagrees ought to be able to name the input they reject, rather than infer where a number was found."
  },
  {
    title: "Name the uncomfortable",
    body: "Omission is the most common dishonesty in writing of this kind. If a factor bears on the conclusion and no one at the table wishes to raise it, the memorandum raises it first."
  },
  {
    title: "Budget the reader&apos;s attention",
    body: "A board has minutes, not hours, to absorb an argument. Length is a cost paid in attention. Structure is the courtesy extended to a reader with other matters to consider."
  },
  {
    title: "Prefer the sharp recommendation",
    body: "A long list of options protects the author and burdens the reader. Where the analysis supports a view, the firm states it and carries the risk of being wrong rather than return the question unanswered."
  },
  {
    title: "Written to hold for a year",
    body: "A memorandum that still makes sense twelve months later is one that was honest about horizons, dependencies, and the conditions under which its conclusions apply."
  },
]

export default function MethodPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".method-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".method-headline", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      })
      gsap.from(".method-body", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7,
      })
    },
    { scope: container },
  )

  return (
    <div ref={container} className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero */}
        <section className="mb-24 md:mb-32">
          <p className="method-label text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Method
          </p>
          <h1 className="method-headline font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mb-12 text-balance">
            The working sequence of every engagement.
          </h1>
          <div className="method-body max-w-2xl">
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              A memorandum is only as trustworthy as the procedure that produced it. What follows is the sequence every engagement observes, in the order it observes it. Questions vary. The discipline does not.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The firm is not built for volume. Each engagement is handled by the person whose name will sit beneath the conclusions, which sets a practical limit on the number of mandates accepted at any one time. What a client receives is a single author through the work and a record that can be reviewed by anyone entitled to see it.
            </p>
          </div>
        </section>

        {/* Five stages */}
        <section className="method-body mb-24 md:mb-32 border-t border-white/[0.06] pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-12">
            Sequence
          </p>
          <div className="space-y-0">
            {stages.map((stage, idx) => (
              <div key={idx} className="py-12 border-b border-white/[0.06] last:border-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-1">
                    <span className="text-4xl md:text-5xl font-serif text-white/10">{stage.number}</span>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-serif text-2xl mb-2">{stage.title}</h3>
                    <p className="text-neutral-500 text-xs uppercase tracking-widest">{stage.detail}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-neutral-400 leading-relaxed">{stage.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Working principles */}
        <section className="method-body mb-24 md:mb-32 border-t border-white/[0.06] pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            House style
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-12 max-w-2xl">
            Six rules the writing is held to.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {principles.map((principle, idx) => (
              <div key={idx} className="bg-[#0b1220] p-8 group hover:bg-white/[0.02] transition-colors duration-500">
                <span className="text-xs text-neutral-600 tracking-widest font-mono mb-4 block">0{idx + 1}</span>
                <h3 className="font-serif text-lg mb-3">{principle.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{principle.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Assignment formats */}
        <section className="method-body mb-24 md:mb-32 border-t border-white/[0.06] pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Form of engagement
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-12 max-w-2xl">
            Three forms, by duration.
          </h2>
          <div className="space-y-6">
            {formats.map((format, idx) => (
              <div key={idx} className="border border-white/[0.06] p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <h3 className="font-serif text-2xl">{format.title}</h3>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest bg-white/[0.03] px-3 py-1 rounded-full w-fit">{format.duration}</span>
                </div>
                <p className="text-neutral-400 leading-relaxed mb-4">{format.body}</p>
                <p className="text-neutral-500 text-sm">
                  <span className="text-neutral-600">Examples:</span> {format.examples}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Things the method refuses */}
        <section className="method-body mb-24 md:mb-32 border-t border-white/[0.06] pt-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-12">What the method will not do.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                title: "Undirected inquiry",
                body: "Open exploration that produces observations without conclusions. Every engagement has a defined question and an expected written output."
              },
              {
                title: "Method on display",
                body: "Elaborate procedure performed for its own sake. The firm uses the simplest approach capable of answering the question, and makes its workings visible."
              },
              {
                title: "Managed agreement",
                body: "Facilitation in which comfortable unanimity is treated as the destination. The role of the firm is to sharpen judgment, not to tune it for the room."
              },
              {
                title: "Documents for the shelf",
                body: "Work produced to be filed rather than used. Every engagement is structured around a decision the principal will need to defend."
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-[#d9556e] mt-1.5 flex-shrink-0">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                    <rect width="6" height="6" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border-t border-white/[0.06] pt-20">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Open a correspondence.
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            A first exchange typically consists of a short email thread and a single call, held in confidence and committing neither party. At its conclusion, one of us proposes a next step, or the exchange ends there.
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
