"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"

export default function SecurityConfidentialityPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".security-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".security-content", {
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
        <header className="security-header mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Commitments</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Security &amp; Confidentiality</h1>
          <p className="text-neutral-400 text-sm">Last revised: October 2024</p>
        </header>

        {/* Content */}
        <div className="security-content space-y-12">
          <section>
            <h2 className="font-serif text-2xl mb-4">Our Commitment</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              At Westhafen Consulting, the protection of client information is not a compliance exercise. It is the foundation on which all advisory work depends. Leadership teams share sensitive information with us because they trust it will remain protected. We treat that trust as the central condition of effective advisory work.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              This page describes the security measures, confidentiality practices, and data protection commitments that underpin our advisory relationships. These commitments apply to all client engagements and extend to prospective clients during the inquiry and evaluation process.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Information Security Measures</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We implement comprehensive technical, administrative, and physical security measures to protect information entrusted to us:
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">Technical Safeguards</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Encryption in transit:</strong> All data transmitted to and from our systems is protected using TLS 1.3 encryption. Email communications involving sensitive information are encrypted using end-to-end encryption where supported by the recipient.</li>
              <li><strong>Encryption at rest:</strong> Client documents and working files are stored using AES-256 encryption on systems with full-disk encryption enabled.</li>
              <li><strong>Access controls:</strong> Multi-factor authentication is required for all systems containing client information. Access is restricted on a need-to-know basis and reviewed regularly.</li>
              <li><strong>Network security:</strong> Our systems are protected by enterprise-grade firewalls, intrusion detection systems, and regular vulnerability scanning.</li>
              <li><strong>Endpoint protection:</strong> All devices used for client work are equipped with endpoint protection software, automatic security updates, and remote wipe capabilities.</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">Administrative Safeguards</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Information access policies:</strong> Clear policies govern who may access client information, under what circumstances, and for what purposes.</li>
              <li><strong>Personnel security:</strong> All personnel with access to client information undergo background verification and sign confidentiality agreements.</li>
              <li><strong>Security training:</strong> Regular training ensures that all team members understand their obligations regarding information security and data protection.</li>
              <li><strong>Incident response:</strong> Documented procedures govern the detection, reporting, and resolution of security incidents.</li>
              <li><strong>Vendor management:</strong> Third-party service providers are selected based on their security practices and are bound by contractual security requirements.</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">Physical Safeguards</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Secure facilities:</strong> Physical access to our offices is controlled through key card systems and visitor management procedures.</li>
              <li><strong>Clean desk policy:</strong> Sensitive documents are secured when not in active use and disposed of through secure shredding.</li>
              <li><strong>Secure disposal:</strong> Electronic media is securely wiped or physically destroyed before disposal in accordance with recognized standards.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Confidentiality Practices</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Confidentiality is central to our advisory work. The most important conversations happen because clients trust that what they share will remain protected.
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">Client Information Handling</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Strict compartmentalization:</strong> Client information is never shared between engagements or discussed with personnel not involved in the specific engagement.</li>
              <li><strong>Need-to-know access:</strong> Access to client information is limited to those directly working on the engagement and only for the period required.</li>
              <li><strong>No cross-referencing:</strong> We do not use information from one client engagement to inform work for another client, even where such information might be relevant.</li>
              <li><strong>Discrete handling:</strong> Client names and engagement details are not disclosed externally without explicit client permission.</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">Engagement Boundaries</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Conflict management:</strong> We evaluate potential conflicts of interest before accepting new engagements and decline work where appropriate information barriers cannot be maintained.</li>
              <li><strong>Scope boundaries:</strong> Information received for one purpose is not used for unrelated purposes without client authorization.</li>
              <li><strong>Departure procedures:</strong> When team members leave the firm or transition between engagements, clear procedures ensure that access to client information is appropriately terminated.</li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">External Communications</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>No unauthorized disclosure:</strong> Client identities, engagement details, and work product are not disclosed to media, industry bodies, or other third parties without explicit client permission.</li>
              <li><strong>Case studies and references:</strong> Where clients agree to serve as references or to be mentioned in case studies, we obtain written consent for each specific use.</li>
              <li><strong>Professional discussions:</strong> General discussions of methodologies or approaches never reveal client-specific information that could identify an organization or its situation.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Data Retention and Disposal</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We retain client information only for as long as necessary to fulfill the purposes for which it was collected, to comply with legal and professional obligations, and to protect our legitimate interests.
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Active engagement materials:</strong> Working files and documents are maintained during the engagement and for the period necessary to support any follow-up questions or related work.</li>
              <li><strong>Post-engagement retention:</strong> Following the conclusion of an engagement, most working materials are securely disposed of within 90 days unless the client requests otherwise or continued retention is required by law.</li>
              <li><strong>Engagement records:</strong> Basic engagement records (scope, dates, fees) are retained in accordance with applicable legal and regulatory requirements, typically 7-10 years.</li>
              <li><strong>Secure disposal:</strong> When information is no longer needed, it is securely deleted using methods that prevent recovery. Physical documents are cross-cut shredded.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Third-Party Services</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We carefully select and manage third-party service providers to ensure they meet our security and confidentiality standards:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Due diligence:</strong> We evaluate the security practices of potential service providers before engagement.</li>
              <li><strong>Contractual protections:</strong> Third-party service providers are bound by contractual confidentiality obligations and data protection requirements.</li>
              <li><strong>Limited data sharing:</strong> We share only the minimum information necessary with third parties and avoid sharing client-identifiable information where possible.</li>
              <li><strong>Ongoing monitoring:</strong> We regularly review the security practices of key service providers and require notification of security incidents.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Incident Response</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Despite our security measures, no system is entirely immune to security incidents. In the event of a security incident affecting client information:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Prompt detection:</strong> We maintain monitoring and logging to detect potential security incidents.</li>
              <li><strong>Immediate response:</strong> Our incident response procedures are activated immediately upon detection of a potential incident.</li>
              <li><strong>Client notification:</strong> Affected clients are notified promptly of any security incident that may have compromised their information, in accordance with applicable legal requirements.</li>
              <li><strong>Regulatory notification:</strong> Where required by law, we notify relevant regulatory authorities of security incidents within applicable timeframes.</li>
              <li><strong>Post-incident review:</strong> Following any significant incident, we conduct a thorough review and implement appropriate improvements to prevent recurrence.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Compliance and Standards</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Our security and confidentiality practices are designed to comply with applicable laws and regulations and align with recognized industry standards:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>GDPR compliance:</strong> We comply with the General Data Protection Regulation for processing personal data of individuals in the European Economic Area.</li>
              <li><strong>Industry standards:</strong> Our security practices are informed by recognized frameworks including ISO 27001 and NIST Cybersecurity Framework.</li>
              <li><strong>Professional obligations:</strong> We adhere to applicable professional standards regarding client confidentiality and information handling.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Client Responsibilities</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Effective information security requires cooperation between Westhafen and our clients. We ask clients to:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li>Identify any particularly sensitive information and any specific handling requirements before sharing it with us</li>
              <li>Use secure methods to transmit sensitive information (we can provide secure file transfer options)</li>
              <li>Promptly notify us of any changes in authorized contacts or access requirements</li>
              <li>Implement appropriate security measures on their own systems when receiving information from us</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Questions and Concerns</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              If you have questions about our security and confidentiality practices, or if you wish to report a security concern, please contact us:
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
              <TransitionLink href="/privacy-policy" className="text-[#d9556e] hover:underline text-sm">Privacy Policy</TransitionLink>
              <TransitionLink href="/terms-of-use" className="text-[#d9556e] hover:underline text-sm">Terms of Use</TransitionLink>
              <TransitionLink href="/cookie-policy" className="text-[#d9556e] hover:underline text-sm">Cookie Policy</TransitionLink>
              <TransitionLink href="/disclaimer" className="text-[#d9556e] hover:underline text-sm">Disclaimer</TransitionLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
