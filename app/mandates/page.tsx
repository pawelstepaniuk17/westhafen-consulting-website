"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const mandates = [
  {
    title: "Second opinion before commitment",
    body: "A memorandum commissioned in advance of a step that will be difficult to reverse: a board vote, a capital commitment, a transaction signing, a restructuring announcement. The firm receives the internal case and is instructed to write against it. The output is a memorandum composed for the dissenting reader: what the internal argument passes over, which assumptions carry the weight of the conclusion, and what would cause us to counsel otherwise. Used most often by a principal who is already close to a decision and wants one more honest read before the door closes.",
    bullets: [
      "Evidence the internal case understates or omits",
      "Assumptions that change the conclusion if they shift",
      "Alternative framings the internal document does not consider",
      "Conditions under which we would counsel reversal",
      "A one-page note for the full board, where useful",
    ]
  },
  {
    title: "The narrative, read as an outside reader would",
    body: "The distance between what a company tells its owners and what a careful outside reader would write after a week in the files. Commissioned by chairs, lead independent directors, audit and risk committees, and at times by chief executives preparing for a difficult external session. The firm does not rewrite the narrative presented to the market. It catalogues where that narrative stretches beyond the evidence in the papers, and what a diligent reader with full access would notice.",
    bullets: [
      "Investor claims that outrun the underlying data",
      "Operating metrics reported through selective framing",
      "Risk disclosures that soften or disperse a real exposure",
      "Tone mismatches between board papers and external communication",
      "Questions a serious analyst would put to the CFO",
    ]
  },
  {
    title: "Succession, read before it moves",
    body: "A written assessment of whether a leadership transition, already decided or under consideration, is likely to hold up. The work is held in confidence. The memorandum is read by one, two, or three named individuals and is not circulated further. Internal candidates are examined on their record, external comparators on theirs, and the conditions of transition are read against those that have determined success and failure in comparable houses. The memorandum is a considered judgment, not a ranking, and it names specific persons only where the question requires it.",
    bullets: [
      "Internal candidate evaluation against evidence, not impression",
      "External comparators drawn from the public record",
      "Transition conditions most likely to determine the outcome",
      "The shape of the first twelve months, read from comparable transitions",
      "What the outgoing principal can and cannot credibly influence",
    ]
  },
  {
    title: "Governance in drift",
    body: "Used when the machinery of decision-making has quietly loosened. Papers are long and late. The board discusses what it has always discussed, rather than what has since come open. Escalation routes have gone informal, and the gap between stated responsibility and actual responsibility has widened. The firm reads a sample of recent papers and minutes, speaks with a small number of directors and executives, and writes a short document setting out what should be tightened and why. Implementation rests with the principal. The memorandum gives that reset a defensible basis.",
    bullets: [
      "Paper quality, length, and timing against the decisions asked for",
      "Standing agenda against the risks now actually in the house",
      "Escalation paths as written versus as used",
      "Committee structure against the work it now carries",
      "Director information diet and the succession of chairs",
    ]
  },
  {
    title: "Transaction perimeter",
    body: "Commissioned before or during a live transaction, when management is close to the rationale and the outside advisers are close to the fees. The firm sits between them and writes a short memorandum on the perimeter of the deal: strategic fit read against the combined balance sheet, valuation discipline and its sensitivities, integration burden truly costed in management attention, walk-away criteria, and the asymmetry between the upside case and the downside case. The firm does not replace bankers or lawyers. It provides the reader-of-last-resort view a board should have before signature.",
    bullets: [
      "Strategic rationale tested against the combined balance sheet",
      "Valuation range and sensitivity to the two or three load-bearing inputs",
      "Integration burden costed seriously, including management attention",
      "The downside case written in full, not footnoted",
      "The conditions under which we would counsel walking away",
    ]
  },
  {
    title: "Standing counsel",
    body: "A six- to twelve-month relationship with a chief executive or chair expecting to face several related questions in sequence: a transition, a restructuring, a capital programme, a regulatory shift. In place of one long engagement, we write short memoranda as each question surfaces, typically three to six pages each, on the subjects the principal nominates. Capped hours, quarterly review, and a single named author on every document.",
    bullets: [
      "A short written brief on each question the principal raises",
      "Quarterly review of the arrangement and grounds for ending it",
      "A fixed hour cap, with any overrun agreed in writing",
      "One author across the engagement, not a rotating team",
      "Right of termination at any point, without penalty",
    ]
  },
]

export default function MandatesPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".mandates-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".mandates-headline", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      })
      gsap.from(".mandates-body", {
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
          <p className="mandates-label text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Mandates
          </p>
          <h1 className="mandates-headline font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mb-12 text-balance">
            The questions most often placed before the firm, and the forms in which we respond.
          </h1>
          <div className="mandates-body max-w-2xl">
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Engagements do not begin with a service category. They begin with a question internal resources cannot resolve with sufficient independence, or a question whose analytical depth executives cannot carve out the time to provide. The groupings below describe the subjects most frequently brought to the firm. The framing of any particular engagement is settled in the scoping letter, not drawn from a shelf.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Duration varies. A narrowly defined assessment can close in three weeks. A governance redesign may run four months. Fees reflect the scope and intensity of the work.
            </p>
          </div>
        </section>

        {/* Mandate sections */}
        <div className="space-y-0">
          {mandates.map((mandate, idx) => (
            <section key={idx} className="mandates-body py-16 md:py-24 border-t border-white/[0.06]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div>
                  <span className="text-xs text-neutral-600 tracking-widest font-mono mb-4 block">0{idx + 1}</span>
                  <h2 className="font-serif text-3xl md:text-4xl">{mandate.title}</h2>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-neutral-300 leading-relaxed mb-8">{mandate.body}</p>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Typical scope areas</p>
                    {mandate.bullets.map((bullet, bidx) => (
                      <div key={bidx} className="flex gap-4 items-start">
                        <span className="text-[#9a2f43] mt-1.5">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <rect width="6" height="6" />
                          </svg>
                        </span>
                        <span className="text-neutral-400 text-sm">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Requests that receive a polite no */}
        <section className="mandates-body py-16 md:py-24 border-t border-white/[0.06]">
          <h2 className="font-serif text-3xl md:text-4xl mb-12">What the firm does not accept.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Procurement competitions",
                body: "Long proposals written in parallel with other firms against a scorecard drawn by a procurement office. The work is not sold that way, and the hours it would consume are hours the firm no longer has to give.",
              },
              {
                title: "Slides and communications",
                body: "Investor presentations, town-hall narratives, internal launch materials. The practice is built around the memorandum. Where the brief is in effect a design brief with text attached, a communications agency serves the client better.",
              },
              {
                title: "Conclusion on request",
                body: "A brief framed so that only one conclusion survives the scope. The firm is willing to be paid to disagree. It is not willing to be paid to agree on demand.",
              },
              {
                title: "Embedded analyst hours",
                body: "Analysts stationed inside a client team for a quarter, reporting into a project manager. The form of the work and the form of the practice do not meet.",
              },
              {
                title: "Technology selection",
                body: "Vendor scorecards, platform comparisons, tool evaluations. The market holds specialists better placed to do this work, and the firm holds no vendor relationships to bring to the conversation.",
              },
              {
                title: "Litigation-adjacent opinion",
                body: "Engagements in which a memorandum may later be cross-examined. The firm&apos;s memoranda are composed for a principal and a board, not for the court. The two registers are not interchangeable.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-white/[0.06] p-6">
                <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border-t border-white/[0.06] pt-20">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Begin with a paragraph on the situation.
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            A brief note on the question is more useful than a form submission. We will decide together, in an exchange of letters, whether the engagement is one the firm can take.
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
