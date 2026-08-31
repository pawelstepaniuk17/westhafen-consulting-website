import type { ReactNode } from "react"

type Post = {
  title: string
  excerpt: string
  slug: string
  content: ReactNode
}

export const allPosts: Post[] = [
  {
    title: "The Cost of Deferred Decisions",
    excerpt: "Every organization has decisions sitting in a drawer. The reasons for delay are always reasonable. The cost is usually larger than anyone wants to admit.",
    slug: "deferred-decisions",
    content: (
      <>
        <p>
          The most consequential decisions in an organization are often the ones that take longest to make. Not because the analysis is hard (though sometimes it is), but because the implications are uncomfortable. Restructuring a division, exiting a market, replacing a senior leader: these decisions carry real weight, and that weight produces delay.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">How deferral actually works</h3>
        <p>
          It rarely announces itself as a choice. It shows up as a request for more data, another round of consultation, a decision to revisit next quarter. Each step looks reasonable in isolation.           Together they represent months, sometimes years, of organizational drift.
        </p>
        <p className="mt-4">
          The cost compounds quietly. While the decision waits, the organization keeps operating on assumptions that may no longer hold. Resources flow to activities that a clearer assessment would redirect. People, reading the ambiguity correctly, start making their own plans.
        </p>
        <p className="mt-4">
          The irony is that the information used to justify delay (we need more data, we need more alignment) is usually available within weeks. What's actually being deferred is the discomfort of deciding, not the preparation for it.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">What actually helps</h3>
        <p>
          The role of an outside advisor in these situations isn't to make the decision. It's to create conditions where the decision can actually be made: framing the problem precisely, assembling the relevant evidence, naming what's known and what isn't, and laying out the options with their consequences stated plainly.
        </p>
        <p className="mt-4">
          That doesn't eliminate the difficulty. What it does eliminate is the ambiguity that lets delay masquerade as prudence. Once the options are clear and the trade-offs are explicit, the case for waiting another quarter becomes harder to make.
        </p>
      </>
    ),
  },
  {
    title: "Analytical Rigor in Uncertain Markets",
    excerpt: "When conditions are genuinely unpredictable, point forecasts aren't just imprecise — they're misleading. There's a better way to structure the analysis.",
    slug: "analytical-rigor",
    content: (
      <>
        <p>
          Uncertainty isn't the absence of information. It's the condition where available information doesn't point to a single answer. That distinction matters because it changes what analysis can reasonably attempt to do, and what it can't.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">The problem with point forecasts</h3>
        <p>
          In genuinely uncertain conditions, a point forecast isn't just imprecise. It's actively misleading. It creates a false sense of specificity that can lock decision-making into a single scenario and blind an organization to the range of outcomes it should actually be prepared for.
        </p>
        <p className="mt-4">
          The answer isn't to abandon analysis. It's to practice a different kind. Scenario planning, sensitivity analysis, and option-value thinking all offer ways to make decisions that hold up across a range of futures rather than depending on one projection being right.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">What discipline actually looks like</h3>
        <p>
          Rigorous analysis means being explicit about your assumptions, transparent about data limitations, and honest about the difference between what the evidence supports and what it merely suggests. It also means not dressing up a hunch in the language of analysis.
        </p>
        <p className="mt-4">
          Most importantly, it means being clear with clients about what the analysis can and can't tell them. Overstating confidence is one of the most common failure modes in consulting, and one of the most damaging, because it leads organizations to make high-stakes commitments based on a certainty that was never real.
        </p>
      </>
    ),
  },
  {
    title: "When Strategy Meets Organizational Reality",
    excerpt: "Most strategies don't fail in the thinking. They fail because the organization wasn't built to execute what leadership decided. That gap is preventable.",
    slug: "strategy-meets-reality",
    content: (
      <>
        <p>
          A strategy that can't be executed isn't a strategy. It's an ambition. The gap between the two is where most strategic initiatives go wrong, and it's almost always predictable in advance.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">Where things actually break down</h3>
        <p>
          The execution gap shows up in familiar patterns: initiatives launched without adequate resourcing, timelines that assume capabilities the organization hasn't built, accountability structures that spread responsibility wide enough that no one really owns anything.
        </p>
        <p className="mt-4">
          These aren't failures of effort or execution. They're failures of planning, visible only once execution begins but entirely traceable to decisions made before it did. Better project management won't fix them. Better integration of organizational reality into the strategic process will.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">Why structure, talent, and culture aren't afterthoughts</h3>
        <p>
          A new market entry requires different capabilities than the ones that made the business successful in its current markets. A shift from product-led to solution-led growth demands changes in how teams are structured, how performance is measured, and how decisions get made at the operating level.
        </p>
        <p className="mt-4">
          Treating those as follow-on workstreams (things to sort out after the strategy is set) is one of the most reliable ways to ensure the strategy won't succeed. They need to be part of the strategic analysis from the start, not questions that get handed to HR after the real work is done.
        </p>
      </>
    ),
  },
  {
    title: "The Architecture of Good Advice",
    excerpt: "What separates advice that changes outcomes from advice that fills a presentation deck.",
    slug: "architecture-of-advice",
    content: (
      <>
        <p>
          The consulting industry produces a remarkable volume of analysis, frameworks, and recommendations. Much of it is competent work. Considerably less of it actually changes anything. The gap between technically sound analysis and advice that improves real decisions is worth understanding.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">The most common failure isn't incompetence</h3>
        <p>
          It's irrelevance. Thorough analysis of questions that aren't quite the right ones. Recommendations that are correct in the abstract but disconnected from the client's actual constraints. Work that could have been produced for any organization in a similar industry, dressed up to look bespoke.
        </p>
        <p className="mt-4">
          Good advice starts with problem definition, and problem definition is harder than it looks. The presenting issue is rarely the actual issue. The presenting question is often a proxy for a deeper decision that hasn't been named yet. Getting there requires enough context about the organization to see past the symptoms.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">Independence isn't optional</h3>
        <p>
          The value of outside advice depends entirely on its independence. Not just as a matter of integrity (though that matters), but as a structural requirement. An advisor whose conclusions are shaped by the desire to extend the engagement, avoid a difficult conversation, or protect a relationship can't provide the kind of unvarnished assessment that justifies bringing them in.
        </p>
        <p className="mt-4">
          This is why we don't do retainers. We don't want ongoing financial relationships that create incentives to find new work. An engagement should end when the question is answered.
        </p>
      </>
    ),
  },
  {
    title: "Confidentiality and the Conditions of Trust",
    excerpt: "Why confidentiality isn't a policy. It's the infrastructure that makes honest advisory work possible.",
    slug: "confidentiality-trust",
    content: (
      <>
        <p>
          The conversations that matter most in any organization are the ones that don't appear in formal documentation.           They involve real vulnerabilities, genuine uncertainty, candid assessments of people and capabilities. Things that can only be said because they're private.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">Access requires trust</h3>
        <p>
          An outside advisor gets access to those conversations only when the organization is genuinely confident the information won't go further. That confidence isn't built by signing an NDA. It's built by conduct, over time, and it can be destroyed by one lapse.
        </p>
        <p className="mt-4">
          The practical consequence is that confidentiality can't be treated as a compliance matter. It's the infrastructure the entire advisory relationship sits on. Without it, the advisor only ever works with the sanitized version of reality and produces analysis that reflects that limitation.
        </p>
        <h3 className="font-serif text-2xl mt-10 mb-4">What it actually requires</h3>
        <p>
          Keeping information genuinely confidential requires more than intention. It requires clear protocols for how client information is handled, disciplined information security practices, and a culture where the obligation is taken seriously by everyone involved in the work, not just the partner on the engagement.
        </p>
        <p className="mt-4">
          We take this seriously because the work depends on it. Clients who trust that what they share with us stays with us give us better access to the real problem. Better access means better analysis. Better analysis is why they engaged us in the first place.
        </p>
      </>
    ),
  },
]

export const getPostBySlug = (slug: string) => {
  return allPosts.find((post) => post.slug === slug)
}
