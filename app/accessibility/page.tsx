"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TransitionLink } from "@/components/transition-link"

export default function AccessibilityPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".accessibility-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".accessibility-content", {
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
        <header className="accessibility-header mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Commitments</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Accessibility Statement</h1>
          <p className="text-neutral-400 text-sm">Last revised: September 4, 2023</p>
        </header>

        {/* Content */}
        <div className="accessibility-content space-y-12">
          <section>
            <h2 className="font-serif text-2xl mb-4">Our Commitment to Accessibility</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Westhafen Consulting is committed to ensuring that our website is accessible to all individuals, including those with disabilities. We believe that everyone should have equal access to information and functionality on the web, and we are continuously working to improve the accessibility and usability of our website.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level, which defines requirements for designers and developers to improve accessibility for people with various disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Accessibility Features</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We have implemented the following accessibility features on our website:
            </p>
            <h3 className="font-serif text-lg mb-3 mt-6">Navigation and Structure</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Semantic HTML:</strong> We use proper HTML5 semantic elements (headings, landmarks, lists) to provide structure that assistive technologies can interpret.</li>
              <li><strong>Logical heading hierarchy:</strong> Content is organized using a logical heading structure (H1 through H6) to facilitate navigation.</li>
              <li><strong>Skip navigation links:</strong> Skip links allow keyboard users to bypass repetitive content and navigate directly to main content.</li>
              <li><strong>Consistent navigation:</strong> Navigation menus appear in consistent locations across all pages.</li>
              <li><strong>Descriptive page titles:</strong> Each page has a unique, descriptive title that identifies its content and purpose.</li>
            </ul>
            
            <h3 className="font-serif text-lg mb-3 mt-6">Visual Design</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Color contrast:</strong> Text and interactive elements meet WCAG 2.1 AA contrast ratio requirements (minimum 4.5:1 for normal text, 3:1 for large text).</li>
              <li><strong>No color-only information:</strong> Information is not conveyed by color alone; additional indicators are provided.</li>
              <li><strong>Readable typography:</strong> Body text uses a minimum font size of 16 pixels with appropriate line height for readability.</li>
              <li><strong>Responsive design:</strong> The website adapts to different screen sizes and orientations without loss of content or functionality.</li>
              <li><strong>Text resizing:</strong> Content remains readable and functional when text is resized up to 200%.</li>
            </ul>
            
            <h3 className="font-serif text-lg mb-3 mt-6">Keyboard Accessibility</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Full keyboard navigation:</strong> All interactive elements can be accessed and operated using a keyboard alone.</li>
              <li><strong>Visible focus indicators:</strong> Focus states are clearly visible on all interactive elements.</li>
              <li><strong>Logical tab order:</strong> The tab order follows the visual flow of the page.</li>
              <li><strong>No keyboard traps:</strong> Users can navigate away from any element using the keyboard.</li>
            </ul>
            
            <h3 className="font-serif text-lg mb-3 mt-6">Images and Media</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li><strong>Alternative text:</strong> All meaningful images have descriptive alternative text.</li>
              <li><strong>Decorative images:</strong> Purely decorative images are marked so screen readers skip them.</li>
              <li><strong>Scalable images:</strong> Images scale appropriately with zoom and do not cause horizontal scrolling.</li>
            </ul>
            
            <h3 className="font-serif text-lg mb-3 mt-6">Forms and Interactivity</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li><strong>Labeled form fields:</strong> All form fields have associated labels that are programmatically connected.</li>
              <li><strong>Error identification:</strong> Form errors are clearly identified with descriptive text, not just color changes.</li>
              <li><strong>Error prevention:</strong> Forms provide clear instructions and validation to help prevent errors.</li>
              <li><strong>Touch targets:</strong> Interactive elements have sufficient size and spacing for touch interaction.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Assistive Technology Compatibility</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li>Screen readers (including NVDA, JAWS, VoiceOver, and TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Switch devices</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Browser Compatibility</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Our website is designed to work with the current versions of major browsers:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Known Limitations</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              While we strive for comprehensive accessibility, we are aware of certain limitations:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>Some older PDF documents may not be fully accessible. Where possible, we are working to provide accessible alternatives.</li>
              <li>Third-party content embedded on our site may not meet all accessibility standards. We are working with third-party providers to address these issues.</li>
              <li>Some animations and transitions may affect users with vestibular disorders. We are implementing prefers-reduced-motion support where applicable.</li>
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              We are actively working to identify and remediate these and any other accessibility issues. Please contact us if you encounter any barriers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Ongoing Efforts</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Accessibility is an ongoing commitment, not a one-time task. We are continuously working to improve:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
              <li>Regular accessibility audits using both automated tools and manual testing</li>
              <li>Testing with users who have disabilities</li>
              <li>Monitoring feedback and addressing reported issues promptly</li>
              <li>Training our team on accessibility best practices</li>
              <li>Reviewing third-party components for accessibility compliance</li>
              <li>Keeping up with evolving accessibility standards and guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Feedback and Assistance</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="text-neutral-400 space-y-1 mb-6">
              <p><strong>Email:</strong> <a href="mailto:support@westhafenconsulting.net" className="text-[#9a2f43] hover:underline">support@westhafenconsulting.net</a></p>
              <p><strong>Phone:</strong> +49 176 160 21344</p>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-4">
              When contacting us about accessibility issues, please include:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-4 ml-4">
              <li>The URL of the page where you encountered the issue</li>
              <li>A description of the problem you experienced</li>
              <li>The assistive technology you were using, if applicable</li>
              <li>Your browser and operating system</li>
              <li>Your preferred method of contact</li>
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              We aim to respond to accessibility feedback within 5 business days and will work with you to provide the information or assistance you need.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Alternative Access</h2>
            <p className="text-neutral-400 leading-relaxed">
              If you are unable to access any content or functionality on our website due to a disability, please contact us and we will work with you to provide the information through an alternative method that is accessible to you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">Enforcement Procedures</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              For users in the European Union, if you are not satisfied with our response to your accessibility concern, you may contact the relevant national enforcement body in your country. For users in Germany, this is:
            </p>
            <div className="text-neutral-400 space-y-1">
              <p><strong>Schlichtungsstelle nach dem Behindertengleichstellungsgesetz</strong></p>
              <p>bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen</p>
              <p>Mauerstraße 53, 10117 Berlin</p>
              <p>Email: info@schlichtungsstelle-bgg.de</p>
            </div>
          </section>

          {/* Related pages */}
          <section className="border-t border-white/[0.06] pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">Related pages</p>
            <div className="flex flex-wrap gap-4">
              <TransitionLink href="/contact" className="text-[#9a2f43] hover:underline text-sm">Contact Us</TransitionLink>
              <TransitionLink href="/privacy-policy" className="text-[#9a2f43] hover:underline text-sm">Privacy Policy</TransitionLink>
              <TransitionLink href="/terms-of-use" className="text-[#9a2f43] hover:underline text-sm">Terms of Use</TransitionLink>
              <TransitionLink href="/cookie-policy" className="text-[#9a2f43] hover:underline text-sm">Cookie Policy</TransitionLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
