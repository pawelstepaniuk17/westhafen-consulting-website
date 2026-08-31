"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"

export default function DisclaimerPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".disclaimer-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".disclaimer-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      })
    },
    { scope: container },
  )

  return (
    <div ref={container} className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <header className="disclaimer-header mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Disclaimer</h1>
          <p className="text-neutral-400 text-sm">Last revised: October 2024</p>
        </header>

        {/* Content */}
        <div className="disclaimer-content space-y-12">
          <section>
            <h2 className="font-serif text-2xl mb-4">1. General Information Only</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              The information provided on this website (jhcconsulting.net) is for general informational purposes only. While we take care to present accurate information, nothing on this website constitutes professional advice, whether management, legal, financial, tax, or otherwise.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              The content on this website is not intended to create, and does not create, an advisory relationship between JHC Consulting and any reader or visitor. Viewing this website or contacting us through it does not establish a client relationship.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              If you require advice regarding a specific business situation, you should engage appropriate qualified advisors who can assess your particular circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">2. No Reliance</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              You should not rely on any information presented on this website to make business decisions without first seeking independent professional advice that takes into account your specific situation, objectives, and constraints. The information on this website may not reflect the most current developments, may be changed without notice, and may not be complete or accurate.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Any reliance you place on information from this website is strictly at your own risk. We assume no responsibility for any actions taken or not taken based on information presented here.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">3. No Warranty</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              This website and its contents are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any representation or warranty of any kind, whether express, implied, or statutory, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li>Warranties of merchantability, fitness for a particular purpose, non-infringement, or title</li>
              <li>Warranties that the website will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the accuracy, completeness, reliability, or timeliness of any content</li>
              <li>Warranties that the website or its servers are free of viruses or other harmful components</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">4. Limitation of Liability</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              To the fullest extent permitted by applicable law, JHC Consulting, its directors, officers, employees, agents, and affiliates shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>Any direct, indirect, incidental, special, consequential, punitive, or exemplary damages</li>
              <li>Any loss of profits, revenue, data, goodwill, or other intangible losses</li>
              <li>Any damages arising from your access to or use of (or inability to access or use) this website</li>
              <li>Any damages arising from any content, products, or services obtained through this website</li>
              <li>Any damages arising from unauthorized access to or alteration of your transmissions or data</li>
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              This limitation applies regardless of the theory of liability (contract, tort, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">5. External Links</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              This website may contain links to third-party websites, resources, or services. These links are provided for your convenience only and do not signify our endorsement of, or affiliation with, any third party.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We have no control over, and assume no responsibility for, the content, privacy policies, practices, availability, or performance of any third-party websites or resources. Your use of any third-party website is governed by that website&apos;s own terms and policies.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              We are not responsible for any damage or loss caused or alleged to be caused by or in connection with your use of or reliance on any content, products, or services available on or through any third-party website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">6. Forward-Looking Statements</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Certain content on this website may contain forward-looking statements, opinions, projections, or views about future events or performance. These statements are based on current expectations and assumptions and are subject to risks and uncertainties that could cause actual results to differ materially.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              We undertake no obligation to update any forward-looking statements to reflect events or circumstances that occur after the date on which such statements are made.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">7. No Professional Relationship</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              The information on this website does not create a professional-client relationship between you and JHC Consulting. The existence of a professional relationship requires:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>A written engagement agreement signed by authorized representatives of both parties</li>
              <li>Clear definition of scope, deliverables, and responsibilities</li>
              <li>Agreement on commercial terms and conditions</li>
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              Until such an agreement is executed, no professional duties or obligations exist between us, regardless of any communications or inquiries that may have occurred.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">8. Geographic Limitations</h2>
            <p className="text-neutral-400 leading-relaxed">
              This website may describe services that are not available in all jurisdictions. We make no representation that the information on this website is appropriate or available for use in all locations. Those who choose to access this website from outside the United States do so on their own initiative and are responsible for compliance with applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">9. Severability</h2>
            <p className="text-neutral-400 leading-relaxed">
              If any provision of this disclaimer is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the validity, legality, and enforceability of the remaining provisions shall not be affected or impaired. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its intent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">10. Governing Law</h2>
            <p className="text-neutral-400 leading-relaxed">
              This disclaimer and any disputes arising out of or relating to it or this website shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to conflict of law principles. The exclusive venue for any disputes shall be the state and federal courts located in New York County, New York.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">11. Changes to This Disclaimer</h2>
            <p className="text-neutral-400 leading-relaxed">
              We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the revised disclaimer. We encourage you to periodically review this page for the latest information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">12. Contact Information</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              For questions about this Disclaimer, please contact us:
            </p>
            <div className="text-neutral-400 space-y-1">
              <p><strong>JHC Consulting</strong></p>
              <p>347 Fifth Avenue</p>
              <p>New York, NY 10016</p>
              <p>United States</p>
              <p className="mt-4">Email: <a href="mailto:support@jhcconsulting.net" className="text-[#4a9eb3] hover:underline">support@jhcconsulting.net</a></p>
            </div>
          </section>

          {/* Related policies */}
          <section className="border-t border-white/[0.06] pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Related policies</p>
            <div className="flex flex-wrap gap-4">
              <TransitionLink href="/privacy-policy" className="text-[#4a9eb3] hover:underline text-sm">Privacy Policy</TransitionLink>
              <TransitionLink href="/terms-of-use" className="text-[#4a9eb3] hover:underline text-sm">Terms of Use</TransitionLink>
              <TransitionLink href="/cookie-policy" className="text-[#4a9eb3] hover:underline text-sm">Cookie Policy</TransitionLink>
              <TransitionLink href="/security-confidentiality" className="text-[#4a9eb3] hover:underline text-sm">Security &amp; Confidentiality</TransitionLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
