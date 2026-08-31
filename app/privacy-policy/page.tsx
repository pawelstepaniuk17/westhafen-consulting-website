"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"

export default function PrivacyPolicyPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".policy-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".policy-content", {
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
        <header className="policy-header mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Privacy Policy</h1>
          <p className="text-neutral-400 text-sm">Effective date: January 15, 2024 | Last revised: October 2024</p>
        </header>

        {/* Content */}
        <div className="policy-content space-y-12">
          <section>
            <h2 className="font-serif text-2xl mb-4">1. Introduction and Scope</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Westhafen Consulting (referred to as &quot;Westhafen,&quot; &quot;the firm,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates this website and provides management advisory services from New York. This Privacy Policy describes how we collect, use, store, share, and protect personal information in connection with our website, our advisory services, and our business operations.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              This policy applies to information collected through our website (westhafenconsulting.net), through email and telephone communications, through in-person meetings, and through the delivery of our advisory services. It does not apply to third-party websites that may be linked from our site.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              By using our website or engaging our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use our website or provide us with your personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">2. Information We Collect</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We collect information that you provide directly to us, information that is collected automatically when you visit our website, and in some cases, information from third-party sources. The categories of personal information we collect include:
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>Contact information: name, email address, telephone number, postal address, company name, and professional title</li>
              <li>Inquiry information: details about your business situation, the nature of your advisory needs, timing requirements, and any other information you choose to include in your communications with us</li>
              <li>Client engagement information: materials and data provided during the course of an advisory engagement, including business documents, financial information, strategic plans, and organizational data</li>
              <li>Correspondence: records of email, telephone, and in-person communications</li>
              <li>Feedback and survey responses: information you provide in response to surveys, feedback requests, or evaluations</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">2.2 Information Collected Automatically</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>Device information: browser type, operating system, device type, and screen resolution</li>
              <li>Usage information: pages visited, time spent on pages, links clicked, and navigation patterns</li>
              <li>Network information: IP address, approximate geographic location (city or region level), and internet service provider</li>
              <li>Referral information: the website or source that referred you to our site</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">2.3 Information from Third Parties</h3>
            <p className="text-neutral-400 leading-relaxed">
              In limited circumstances, we may receive information about you from third parties, such as professional referral sources, public business registries, or professional networking platforms. We use such information only in accordance with this Privacy Policy and applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">3. How We Use Your Information</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">3.1 Providing Our Services</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>To respond to inquiries and evaluate potential engagements</li>
              <li>To perform advisory services under client engagements</li>
              <li>To communicate with clients and prospective clients about matters related to our services</li>
              <li>To prepare and deliver work product, including written analyses, presentations, and recommendations</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">3.2 Operating Our Business</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>To maintain business records and administer client relationships</li>
              <li>To process payments and manage accounts</li>
              <li>To comply with legal, regulatory, and professional obligations</li>
              <li>To protect our legal rights and the security of our operations</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">3.3 Improving Our Website and Services</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li>To analyze website usage and improve user experience</li>
              <li>To identify technical issues and maintain site security</li>
              <li>To understand how visitors find and use our website</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">4. Legal Basis for Processing (EEA/UK)</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              For individuals in the European Economic Area and the United Kingdom, we process personal data under one or more of the following legal bases:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Contract:</strong> Processing necessary to perform a contract with you or to take steps at your request prior to entering into a contract</li>
              <li><strong>Legitimate interests:</strong> Processing necessary for our legitimate business interests, such as operating our website, improving our services, and communicating with prospective clients, where those interests are not overridden by your rights</li>
              <li><strong>Legal obligation:</strong> Processing necessary to comply with legal or regulatory requirements</li>
              <li><strong>Consent:</strong> Where you have given specific consent to processing for particular purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We do not sell, rent, or trade personal information to third parties for their marketing purposes. We may share information in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Service providers:</strong> We engage third-party service providers to support our operations, including hosting providers, email services, and professional advisors. These providers are contractually obligated to protect your information and use it only for the services they provide to us.</li>
              <li><strong>Legal requirements:</strong> We may disclose information when required by law, subpoena, court order, or governmental request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, personal information may be transferred as part of the transaction. We would notify you of any such change and the choices you may have.</li>
              <li><strong>Professional obligations:</strong> In connection with advisory engagements, we may share client information with other professional advisors (such as legal counsel or accountants) engaged by the client, subject to appropriate confidentiality protections.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">6. International Data Transfers</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Westhafen Consulting is based in the United States and serves clients internationally. Your personal information may be transferred to and processed in countries other than your country of residence, including the United States. Where we receive personal data from the European Economic Area or the United Kingdom, we implement appropriate safeguards, including:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li>Standard contractual clauses approved by the European Commission</li>
              <li>Binding corporate rules where applicable</li>
              <li>Other legally recognized mechanisms that ensure adequate protection</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">7. Data Security</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We implement and maintain technical, administrative, and physical security measures designed to protect personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>Encryption of data in transit using industry-standard TLS/SSL protocols</li>
              <li>Access controls limiting information access to authorized personnel</li>
              <li>Regular security assessments and updates to our systems</li>
              <li>Secure disposal of information that is no longer needed</li>
              <li>Employee training on data protection and security practices</li>
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              While we strive to protect your information, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">8. Data Retention</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We retain personal information for as long as necessary to fulfill the purposes for which it was collected, to comply with legal and regulatory obligations, and to protect our legal interests. Retention periods vary based on the nature of the information and the purpose of collection:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Website usage data:</strong> Typically retained for up to 24 months</li>
              <li><strong>Inquiry information:</strong> Retained for the duration of the inquiry process and for a reasonable period thereafter, typically up to 3 years</li>
              <li><strong>Client engagement records:</strong> Retained in accordance with professional obligations and applicable law, typically for 7-10 years following the conclusion of an engagement</li>
              <li><strong>Financial records:</strong> Retained as required by applicable tax and accounting regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">9. Your Rights and Choices</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Access:</strong> You may request information about the personal data we hold about you and obtain a copy of that information</li>
              <li><strong>Correction:</strong> You may request that we correct inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to legal retention requirements</li>
              <li><strong>Restriction:</strong> You may request that we restrict processing of your information in certain circumstances</li>
              <li><strong>Portability:</strong> You may request a copy of your information in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> You may object to processing based on legitimate interests</li>
              <li><strong>Withdraw consent:</strong> Where processing is based on consent, you may withdraw that consent at any time</li>
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              To exercise these rights, please contact us using the information provided below. We may need to verify your identity before responding to your request. If you are not satisfied with our response, you have the right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">10. Cookies and Similar Technologies</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Our website uses cookies and similar technologies to collect information about your browsing activities. For detailed information about the cookies we use and how to manage your preferences, please see our <TransitionLink href="/cookie-policy" className="text-[#d9556e] hover:underline">Cookie Policy</TransitionLink>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">11. Children&apos;s Privacy</h2>
            <p className="text-neutral-400 leading-relaxed">
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take steps to delete that information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">12. Changes to This Policy</h2>
            <p className="text-neutral-400 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the revised policy on this page with an updated effective date. Material changes will be highlighted or communicated through appropriate means. Your continued use of our website or services after any changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">13. Contact Information</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise your rights, please contact us:
            </p>
            <div className="text-neutral-400 space-y-1">
              <p><strong>Westhafen Consulting</strong></p>
              <p>347 Fifth Avenue</p>
              <p>New York, NY 10016</p>
              <p>United States</p>
              <p className="mt-4">Email: <a href="mailto:support@westhafen-consulting.org" className="text-[#d9556e] hover:underline">support@westhafen-consulting.org</a></p>
            </div>
          </section>

          {/* Related policies */}
          <section className="border-t border-white/[0.06] pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Related policies</p>
            <div className="flex flex-wrap gap-4">
              <TransitionLink href="/terms-of-use" className="text-[#d9556e] hover:underline text-sm">Terms of Use</TransitionLink>
              <TransitionLink href="/cookie-policy" className="text-[#d9556e] hover:underline text-sm">Cookie Policy</TransitionLink>
              <TransitionLink href="/security-confidentiality" className="text-[#d9556e] hover:underline text-sm">Security &amp; Confidentiality</TransitionLink>
              <TransitionLink href="/disclaimer" className="text-[#d9556e] hover:underline text-sm">Disclaimer</TransitionLink>
              <TransitionLink href="/accessibility" className="text-[#d9556e] hover:underline text-sm">Accessibility</TransitionLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
