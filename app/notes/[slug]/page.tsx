import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const articles: Record<string, {
  title: string
  date: string
  category: string
  excerpt: string
  content: string[]
}> = {
  "overhead-of-consensus": {
    title: "The Cost of Premature Alignment",
    date: "November 2024",
    category: "Governance",
    excerpt: "The impulse to secure consensus before analysis is complete often produces decisions that satisfy the process while evading the question.",
    content: [
      "The impulse to align before concluding is a common deformation of organizational decision-making. The symptoms are familiar: more meetings to discuss what was discussed in previous meetings, more stakeholders added to ensure no one feels excluded, more rounds of input before anything can move forward. The process grows while the question shrinks.",
      "The stated rationale is usually consensus. We want everyone on board. We need buy-in from all affected parties. These sound reasonable in isolation, but they accumulate into structures where the cost of making a decision exceeds the benefit of having made it.",
      "Consider a mid-sized company contemplating a pricing change. What might have been a week of analysis and a decision by the commercial lead becomes a multi-week process involving finance, product, legal, customer success, and communications. Each function has legitimate interests, but the aggregation of those interests creates a procedural weight that the decision itself cannot bear.",
      "The result is not better decisions. It is slower decisions, with the additional cost of organizational fatigue as people attend yet another meeting about an issue that feels perpetually unresolved. The energy that should go to execution is consumed by coordination.",
      "Part of the problem is risk aversion dressed as inclusivity. When everyone must agree, no one can be blamed if the decision proves wrong. Consensus becomes a shield against accountability. The organizational incentive shifts from making good decisions to making defensible ones.",
      "The corrective is not to exclude people who have relevant information. It is to distinguish between consultation and approval. A leader can seek input from many sources and still retain the authority to decide. The people consulted contribute their perspective; the person accountable makes the call.",
      "This requires accepting that some people will disagree, and that disagreement is not a signal that more process is needed. In fact, if every decision achieves unanimous support, that is often a sign that the decisions are too timid or that genuine dissent has been suppressed.",
      "The test is straightforward: how long does it take to make a decision of moderate significance? If the answer is weeks or months, the overhead of consensus has probably exceeded its value. Somewhere in the organization, someone has confused alignment with unanimity, and the cost is being paid in delay."
    ],
  },
  "restructurings-disappoint": {
    title: "What Restructurings Actually Change",
    date: "October 2024",
    category: "Organization",
    excerpt: "Reorganizations reliably produce new org charts. They less reliably produce new behaviors.",
    content: [
      "The pattern is recognizable. A company announces a restructuring with specific cost targets, headcount reductions, and efficiency gains. Twelve or eighteen months later, the savings have partially materialized, but performance has not improved as expected, and organizational energy has been consumed by the transition itself.",
      "The standard explanation is poor execution. The plan was sound; implementation was flawed. But this explanation is too convenient. It locates the problem in the doing rather than the thinking, when often the thinking itself was incomplete.",
      "Most restructuring plans are built on mechanical assumptions: remove layers, reduce headcount, consolidate functions, and costs will fall accordingly. These assumptions ignore how organizations actually function. Work does not disappear because the boxes on the org chart change. It migrates, often to informal structures that are harder to manage and less visible to leadership.",
      "A common failure mode is underestimating coordination costs. Centralized functions may have lower direct costs than distributed ones, but they introduce handoffs, queues, and communication overhead that do not appear in the financial model. The spreadsheet shows savings; the organization experiences friction.",
      "Another failure mode is assuming that people and capabilities are interchangeable. A restructuring that moves responsibilities between units assumes the receiving unit can absorb them effectively. When capabilities do not transfer cleanly, quality suffers, and the organization spends months rebuilding what was dismantled.",
      "Restructurings also tend to underestimate the organizational attention they consume. For the duration of the transition, leadership bandwidth is absorbed by managing the change itself rather than managing the business. Competitors do not pause while you reorganize.",
      "The underlying issue is that restructurings are often solutions in search of problems. The real issue may be strategy, or culture, or capability, but those are harder to address than drawing new org charts. Restructuring feels decisive even when it is not responsive to the actual diagnosis.",
      "This does not mean restructurings are never warranted. Sometimes the organization genuinely needs to be reshaped. But the discipline is to be honest about what a restructuring can and cannot accomplish, and to avoid treating structural change as a substitute for the harder work of improving how the organization thinks and operates."
    ],
  },
  "false-economy-postponement": {
    title: "Deferred Decisions and Compounding Cost",
    date: "September 2024",
    category: "Strategy",
    excerpt: "Postponing a difficult choice rarely makes it easier. It usually makes it more expensive.",
    content: [
      "There is a particular kind of organizational procrastination that presents itself as prudence. We need more information. The timing is not right. Let us revisit this next quarter. These phrases sound responsible, but they often mask a simpler reality: the decision is uncomfortable, and delay is easier than commitment.",
      "The cost of postponement is rarely calculated with the same rigor as the decision itself. A division that is underperforming continues to consume resources and management attention. A leader who is not working out continues to shape culture and make subordinate decisions. A market position that is eroding continues to erode.",
      "Delay has compounding effects. The longer an underperforming unit operates, the more its problems become embedded in the organization. The longer a misaligned leader remains, the more the people around them adapt to that misalignment. The longer a strategic gap persists, the harder it becomes to close.",
      "The justification for delay is usually the hope that circumstances will change. Perhaps the market will recover. Perhaps the person will improve. Perhaps the problem will resolve itself. These things occasionally happen, but betting on them is not strategy; it is wishful thinking.",
      "What makes postponement particularly insidious is that it feels like a non-decision. We are not saying no; we are just not saying yes yet. But in practical terms, the effect is the same as an active choice to maintain the status quo. The organization continues on its current trajectory, with all the costs that implies.",
      "The discipline is to recognize delay for what it is: a decision to accept ongoing costs in exchange for avoiding immediate discomfort. Sometimes that trade-off is warranted, but it should be made explicitly, with clear criteria for when the situation will be revisited.",
      "A useful forcing mechanism is to articulate what would have to be true for the decision to become obvious. If the underperforming division hits certain thresholds, we will act. If the leader does not demonstrate specific changes by a certain date, we will act. This converts vague postponement into conditional commitment.",
      "The organizations that execute well are not necessarily the ones that make perfect decisions. They are the ones that make decisions at all, learn from the results, and adjust. Perpetual delay produces neither learning nor progress, only the slow accumulation of unaddressed problems."
    ],
  },
  "metrics-obscure-reveal": {
    title: "Metrics That Obscure Rather Than Reveal",
    date: "August 2024",
    category: "Performance",
    excerpt: "Dashboards can create the illusion of management without its substance.",
    content: [
      "The proliferation of business intelligence tools has made it easy to measure almost anything. The harder question, which often goes unasked, is whether measurement is producing insight or merely producing numbers.",
      "A common failure mode is measurement without consequence. The dashboard displays dozens of metrics, updated in real time, but no one can articulate what action would follow from any of them. The numbers are observed, perhaps discussed, but they do not connect to decisions. Measurement has become ritual.",
      "Another failure mode is measurement of the measurable rather than the important. Revenue and cost are easy to track; the quality of customer relationships or the health of the product pipeline are harder. The result is overemphasis on what can be quantified and underemphasis on what actually matters.",
      "Metrics also tend to calcify once established. A measure that made sense in one context continues to be tracked long after the context has changed. The organization inherits a measurement infrastructure built for yesterday's problems, and no one has the authority or inclination to question whether it still applies.",
      "The most insidious failure is when metrics become targets and thereby cease to be good metrics. This is Goodhart's Law in practice: once people are evaluated on a number, they optimize for the number rather than for the underlying performance it was meant to reflect. The metric improves; actual performance may not.",
      "Effective measurement requires asking uncomfortable questions. What would we do differently if this number moved? Who is accountable for acting on this information? Is this metric still relevant, or are we tracking it out of habit? These questions are rarely popular, because they challenge established practices and expose gaps in organizational clarity.",
      "The purpose of measurement is to improve decisions, not to demonstrate that decisions are being made. A small number of well-chosen metrics that connect directly to actions is more valuable than a comprehensive dashboard that no one uses.",
      "The test is simple: take any metric currently tracked and ask what would change if it moved significantly. If the answer is unclear, the metric is probably not serving its intended purpose. It may be creating the appearance of management without its substance."
    ],
  },
  "outside-perspective-helps": {
    title: "When Outside Perspective Actually Helps",
    date: "July 2024",
    category: "Advisory",
    excerpt: "External advice has value under specific conditions.",
    content: [
      "The consulting industry sells the general proposition that outside perspective is valuable. This is true under certain conditions and false under others. Knowing the difference is the foundation of using external advice well.",
      "Outside perspective helps when the problem involves blind spots that insiders cannot easily see. These may be cultural assumptions, historical commitments, or political constraints that have become invisible to people who live with them daily. A fresh set of eyes can name what internal observers have learned to overlook.",
      "It also helps when the problem requires skills or experience that the organization lacks and cannot quickly develop. A company facing its first major acquisition benefits from advisors who have done dozens. The learning curve is too steep and the stakes too high to figure it out from scratch.",
      "External perspective is useful when internal dynamics make honest assessment difficult. When the CEO's strategy is the subject of analysis, internal staff face career risk in being candid. An outsider can say things that insiders know but cannot safely articulate.",
      "However, outside perspective does not help when the problem is primarily one of will rather than knowledge. If leadership knows what needs to be done but is unwilling to do it, consultants become an expensive way of postponing the inevitable. No amount of external analysis substitutes for internal resolve.",
      "It does not help when the organization lacks the capability to act on recommendations. A brilliant strategy that cannot be executed is not useful, and advisors who deliver recommendations without considering implementation constraints are contributing to organizational theater rather than organizational improvement.",
      "And it does not help when the engagement is primarily about optics. Hiring prestigious advisors to validate a predetermined conclusion, or to provide political cover for an unpopular decision, is not consulting; it is performance. The organization may feel better, but nothing has been learned.",
      "The honest use of outside advice begins with clarity about what the organization actually needs. If the need is genuine, external perspective can be tremendously valuable. If the need is manufactured, the engagement will consume resources without producing results."
    ],
  },
  "problem-best-practices": {
    title: "The Problem With Best Practices",
    date: "June 2024",
    category: "Strategy",
    excerpt: "Borrowing what worked elsewhere sounds sensible until you examine how rarely context transfers cleanly.",
    content: [
      "The appeal of best practices is obvious. Someone else has solved a version of your problem, and you can benefit from their experience without incurring their learning costs. This logic underlies much of consulting, benchmarking, and cross-industry learning.",
      "The flaw is equally obvious once you look for it: context matters enormously, and context rarely transfers. What made a practice work in one organization, at one time, facing one set of constraints, may not apply when any of those variables change.",
      "Consider a company that adopts agile development practices because they worked well at a successful tech firm. The practices may have been effective in an environment with certain talent, certain culture, certain product characteristics, and certain market conditions. Strip away those conditions, and the practices become rituals without power.",
      "The best practice label also tends to freeze learning. Once something is designated a best practice, questioning it becomes difficult. The organization imports not just the practice but the assumption that it should not be revisited. Adaptation, which is essential to making anything work in a new context, is discouraged.",
      "This does not mean that learning from others is useless. It means that the learning should focus on principles rather than procedures. Understanding why something worked, what conditions made it effective, and what adaptations might be necessary is more valuable than copying the what without the why.",
      "Effective borrowing requires honest assessment of how similar or different your context is from the source. It requires willingness to modify imported practices rather than implementing them wholesale. And it requires ongoing evaluation of whether the practice is actually producing the expected results in your specific environment.",
      "The phrase best practice itself deserves scrutiny. Best for whom? Best under what conditions? Best compared to what alternatives? A practice that was best somewhere is not automatically best everywhere. The transferability has to be demonstrated, not assumed.",
      "The discipline is to treat external examples as hypotheses rather than answers. They suggest possibilities worth exploring, not solutions ready for deployment. The work of adaptation, of making something fit your particular context, is where the real value is created."
    ],
  },
}

const articleSlugs = Object.keys(articles)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return {}
  return {
    title: `${article.title} | Notes | Westhafen Consulting`,
    description: article.excerpt,
  }
}

export default async function NotesArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]
  
  if (!article) notFound()

  const currentIndex = articleSlugs.indexOf(slug)
  const prevSlug = currentIndex > 0 ? articleSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < articleSlugs.length - 1 ? articleSlugs[currentIndex + 1] : null

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 bg-[#0b1220] text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-widest text-neutral-500">{article.date}</p>
            <span className="text-neutral-600">|</span>
            <p className="text-xs text-[#d9556e]">{article.category}</p>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            {article.title}
          </h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        <article className="space-y-6 border-t border-white/[0.06] pt-12">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="text-neutral-400 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </article>

        <nav className="mt-16 pt-12 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <Link 
              href="/notes" 
              className="inline-flex items-center gap-2 text-[#d9556e] hover:text-[#e8798e] transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              All notes
            </Link>
            <div className="flex gap-4">
              {prevSlug && (
                <Link 
                  href={`/notes/${prevSlug}`}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  Previous
                </Link>
              )}
              {nextSlug && (
                <Link 
                  href={`/notes/${nextSlug}`}
                  className="inline-flex items-center gap-2 text-[#d9556e] hover:text-[#e8798e] transition-colors text-sm"
                >
                  Next <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </nav>

        <section className="mt-16 pt-12 border-t border-white/[0.06] text-center">
          <h2 className="font-serif text-2xl mb-4">Have a question worth discussing?</h2>
          <p className="text-neutral-400 text-sm mb-6 max-w-md mx-auto">
            If something here connects to a situation you are working through, reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#9a2f43] text-white font-medium py-3 px-8 rounded-full text-sm tracking-wide hover:bg-[#7f2536] transition-colors"
          >
            Start a conversation
          </Link>
        </section>
      </div>
    </div>
  )
}
