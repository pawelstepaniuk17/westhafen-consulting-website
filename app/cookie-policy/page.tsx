"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"

export default function CookiePolicyPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".cookie-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".cookie-content", {
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
        <header className="cookie-header mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Cookie Policy</h1>
          <p className="text-neutral-400 text-sm">Effective date: January 15, 2024 | Last revised: October 2024</p>
        </header>

        {/* Content */}
        <div className="cookie-content space-y-12">
          <section>
            <h2 className="font-serif text-2xl mb-4">1. Introduction</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              This Cookie Policy explains how Westhafen Consulting (&quot;Westhafen,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website at westhafenconsulting.net (the &quot;Website&quot;). This policy should be read together with our Privacy Policy, which provides additional information about how we collect and process personal data.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              By continuing to use our Website, you consent to the use of cookies as described in this policy. You can manage your cookie preferences at any time using the methods described in Section 6 below.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">2. What Are Cookies</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently, to provide information to website owners, and to enable certain features.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your device for a set period of time or until you delete them. Session cookies are temporary and are deleted when you close your browser.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Cookies can be set by the website you are visiting (&quot;first-party cookies&quot;) or by third parties whose services are embedded in the website (&quot;third-party cookies&quot;).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">3. Types of Cookies We Use</h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              We use the following categories of cookies on our Website:
            </p>
            
            <h3 className="font-serif text-lg mb-3">3.1 Strictly Necessary Cookies</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              These cookies are essential for the Website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies because the Website would not function without them.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-neutral-400 border border-white/[0.06]">
                <thead className="bg-white/[0.02]">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Cookie Name</th>
                    <th className="px-4 py-3 text-left font-medium">Purpose</th>
                    <th className="px-4 py-3 text-left font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="px-4 py-3">session_id</td>
                    <td className="px-4 py-3">Maintains session state across page requests</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">csrf_token</td>
                    <td className="px-4 py-3">Security token to prevent cross-site request forgery</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">cookie_consent</td>
                    <td className="px-4 py-3">Stores your cookie consent preferences</td>
                    <td className="px-4 py-3">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-serif text-lg mb-3">3.2 Functional Cookies</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you disable these cookies, some or all of these services may not function properly.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-neutral-400 border border-white/[0.06]">
                <thead className="bg-white/[0.02]">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Cookie Name</th>
                    <th className="px-4 py-3 text-left font-medium">Purpose</th>
                    <th className="px-4 py-3 text-left font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="px-4 py-3">theme_preference</td>
                    <td className="px-4 py-3">Remembers your display preferences</td>
                    <td className="px-4 py-3">12 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">language</td>
                    <td className="px-4 py-3">Stores your language preference</td>
                    <td className="px-4 py-3">12 months</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">form_data</td>
                    <td className="px-4 py-3">Temporarily stores form data to prevent loss on navigation</td>
                    <td className="px-4 py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-serif text-lg mb-3">3.3 Analytics Cookies</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Website. They help us understand which pages are the most and least popular and how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-neutral-400 border border-white/[0.06]">
                <thead className="bg-white/[0.02]">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Cookie Name</th>
                    <th className="px-4 py-3 text-left font-medium">Purpose</th>
                    <th className="px-4 py-3 text-left font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="px-4 py-3">_ga</td>
                    <td className="px-4 py-3">Google Analytics: Distinguishes users</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">_ga_*</td>
                    <td className="px-4 py-3">Google Analytics: Maintains session state</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">_gid</td>
                    <td className="px-4 py-3">Google Analytics: Distinguishes users</td>
                    <td className="px-4 py-3">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">4. Similar Technologies</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              In addition to cookies, we may use other similar technologies on our Website:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Local Storage:</strong> We use browser local storage to store preferences and improve site performance. Local storage data persists until cleared by you or our site.</li>
              <li><strong>Pixel Tags:</strong> We may use pixel tags (also known as web beacons or clear GIFs) in conjunction with cookies to track visitor actions and measure the success of our content.</li>
              <li><strong>Device Fingerprinting:</strong> We do not use device fingerprinting techniques to identify individual users across sessions.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">5. Third-Party Cookies</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Some cookies on our Website are set by third parties. These third parties may include:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use our Website. Google may use the collected data to contextualize and personalize ads across its advertising network. You can learn more about Google&apos;s privacy practices at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#d9556e] hover:underline">policies.google.com/privacy</a>.</li>
              <li><strong>Content Delivery Networks:</strong> We may use CDN services that set cookies to improve Website performance and security.</li>
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              We do not control the cookies set by third parties and encourage you to review their respective privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">6. Managing Your Cookie Preferences</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              You have several options for managing cookies:
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">6.1 Browser Settings</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings preferences. You can typically find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. The following links provide information on how to modify cookie settings for common browsers:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#d9556e] hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#d9556e] hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#d9556e] hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#d9556e] hover:underline">Microsoft Edge</a></li>
            </ul>
            <h3 className="font-serif text-lg mb-3 mt-6">6.2 Opt-Out Tools</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#d9556e] hover:underline">Google Analytics Opt-out Browser Add-on</a>.
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">6.3 Do Not Track</h3>
            <p className="text-neutral-400 leading-relaxed">
              Some browsers include a &quot;Do Not Track&quot; feature that signals to websites you visit that you do not want to have your online activity tracked. Our Website currently does not respond to &quot;Do Not Track&quot; signals, as there is no common industry standard for how websites should respond to them.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">7. Consequences of Disabling Cookies</h2>
            <p className="text-neutral-400 leading-relaxed">
              If you disable or decline cookies, some features of our Website may not function properly. You may not be able to access certain parts of our Website, and your experience may be degraded. Strictly necessary cookies cannot be disabled without impacting the core functionality of the Website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">8. Changes to This Cookie Policy</h2>
            <p className="text-neutral-400 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with a new effective date. We encourage you to periodically review this page for the latest information about our cookie practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">9. Contact Information</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              For questions about this Cookie Policy, please contact us:
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
              <TransitionLink href="/disclaimer" className="text-[#d9556e] hover:underline text-sm">Disclaimer</TransitionLink>
              <TransitionLink href="/security-confidentiality" className="text-[#d9556e] hover:underline text-sm">Security &amp; Confidentiality</TransitionLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
