import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ValuesPreview } from "@/components/values-preview"
import { BlogPreview } from "@/components/blog-preview"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ValuesPreview />
      <BlogPreview />
      <CtaSection />
    </>
  )
}
