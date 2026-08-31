"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"

export default function TermsOfUsePage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".terms-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".terms-content", {
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
        <header className="terms-header mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Terms of Use</h1>
          <p className="text-neutral-400 text-sm">Effective date: January 15, 2024 | Last revised: October 2024</p>
        </header>

        {/* Content */}
        <div className="terms-content space-y-12">
          <section>
            <h2 className="font-serif text-2xl mb-4">1. Acceptance of Terms</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              These Terms of Use (&quot;Terms&quot;) govern your access to and use of the website operated by JHC Consulting (&quot;JHC,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) at jhcconsulting.net (the &quot;Website&quot;). By accessing or using the Website, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              If you do not agree to these Terms, you must not access or use the Website. We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Website. Your continued use of the Website after any modifications constitutes acceptance of the updated Terms.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              These Terms do not govern the provision of advisory services, which are subject to separate engagement agreements between JHC and its clients.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">2. Description of Website and Services</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              The Website provides information about JHC Consulting, our advisory services, our approach to management consulting, and related content. The Website also provides a means for prospective clients and other interested parties to contact us regarding potential engagements.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of the Website at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">3. Intellectual Property Rights</h2>
            <h3 className="font-serif text-lg mb-3 mt-6">3.1 Ownership</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              The Website and its contents, including but not limited to text, graphics, images, logos, icons, photographs, audio and video clips, data compilations, software, and the selection and arrangement thereof (collectively, &quot;Content&quot;), are owned by JHC Consulting or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">3.2 Limited License</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Website for your personal, non-commercial purposes. This license does not include the right to:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any Content</li>
              <li>Use any data mining, robots, or similar data gathering or extraction methods</li>
              <li>Frame or utilize framing techniques to enclose any portion of the Website</li>
              <li>Use the Content for any commercial purpose without our prior written consent</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">3.3 Trademarks</h3>
            <p className="text-neutral-400 leading-relaxed">
              &quot;JHC Consulting,&quot; the JHC logo, and other marks used on the Website are trademarks or service marks of JHC Consulting. You may not use these marks without our prior written permission. Other trademarks, service marks, and logos used on the Website are the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">4. User Conduct</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li>Use the Website in any way that violates any applicable local, national, or international law or regulation</li>
              <li>Use the Website to transmit or procure the sending of any advertising or promotional material without our prior written consent</li>
              <li>Impersonate or attempt to impersonate JHC, a JHC employee, another user, or any other person or entity</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Website</li>
              <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other malicious or technologically harmful material</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, servers, or networks connected to the Website</li>
              <li>Use any automated means to access the Website or collect information from it</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">5. User Communications</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              By submitting information through the Website, including through contact forms, you grant JHC a non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, and distribute such information solely for the purpose of responding to your inquiry and, if applicable, evaluating a potential business relationship.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              You represent and warrant that you have the right to submit any information you provide and that such information does not violate the rights of any third party. Confidential information should not be submitted through the Website without first establishing a formal confidentiality arrangement with JHC.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">6. Third-Party Links</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              The Website may contain links to third-party websites or resources. These links are provided for your convenience only. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              If you decide to access any of the third-party websites linked from the Website, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">7. Disclaimers</h2>
            <h3 className="font-serif text-lg mb-3 mt-6">7.1 No Professional Advice</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              The Content on the Website is provided for general informational purposes only and does not constitute professional advice. The Content should not be relied upon as a basis for making business, legal, financial, or other decisions. If you require professional advice, you should engage appropriate qualified advisors.
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">7.2 As-Is Basis</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              THE WEBSITE AND ITS CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, JHC DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE.
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">7.3 No Guarantee of Accuracy</h3>
            <p className="text-neutral-400 leading-relaxed">
              We do not warrant that the Content is accurate, complete, reliable, current, or error-free. We do not warrant that the Website will be uninterrupted, secure, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">8. Limitation of Liability</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL JHC, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE WEBSITE, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID TO US, IF ANY, FOR ACCESSING THE WEBSITE DURING THE TWELVE (12) MONTHS PRIOR TO THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">9. Indemnification</h2>
            <p className="text-neutral-400 leading-relaxed">
              You agree to indemnify, defend, and hold harmless JHC and its directors, officers, employees, agents, affiliates, and licensors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of the Website, your violation of these Terms, or your violation of any rights of another.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">10. Governing Law and Jurisdiction</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the state and federal courts located in New York County, New York, for the resolution of any disputes arising out of or relating to these Terms or your use of the Website.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Notwithstanding the foregoing, JHC may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of our intellectual property rights or other proprietary rights.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">11. Severability</h2>
            <p className="text-neutral-400 leading-relaxed">
              If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">12. Waiver</h2>
            <p className="text-neutral-400 leading-relaxed">
              No waiver by JHC of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition. Any failure by JHC to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">13. Entire Agreement</h2>
            <p className="text-neutral-400 leading-relaxed">
              These Terms and our Privacy Policy constitute the entire agreement between you and JHC regarding your use of the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">14. Contact Information</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              For questions about these Terms of Use, please contact us:
            </p>
            <div className="text-neutral-400 space-y-1">
              <p><strong>JHC Consulting</strong></p>
              <p>347 Fifth Avenue</p>
              <p>New York, NY 10016</p>
              <p>United States</p>
              <p className="mt-4">Email: <a href="mailto:support@jhcconsulting.net" className="text-[#c9a35e] hover:underline">support@jhcconsulting.net</a></p>
            </div>
          </section>

          {/* Related policies */}
          <section className="border-t border-white/[0.06] pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Related policies</p>
            <div className="flex flex-wrap gap-4">
              <TransitionLink href="/privacy-policy" className="text-[#c9a35e] hover:underline text-sm">Privacy Policy</TransitionLink>
              <TransitionLink href="/cookie-policy" className="text-[#c9a35e] hover:underline text-sm">Cookie Policy</TransitionLink>
              <TransitionLink href="/security-confidentiality" className="text-[#c9a35e] hover:underline text-sm">Security &amp; Confidentiality</TransitionLink>
              <TransitionLink href="/disclaimer" className="text-[#c9a35e] hover:underline text-sm">Disclaimer</TransitionLink>
              <TransitionLink href="/accessibility" className="text-[#c9a35e] hover:underline text-sm">Accessibility</TransitionLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
