"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from(".contact-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      })
      gsap.from(".contact-headline", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      })
      gsap.from(".contact-body", {
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
        <section className="mb-16 md:mb-24">
          <p className="contact-label text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Contact
          </p>
          <h1 className="contact-headline font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mb-12 text-balance">
            Inquiries from executives and board members.
          </h1>
          <div className="contact-body max-w-2xl">
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Reserved for substantive advisory matters involving strategic, organizational, or governance questions at the executive or board level. A short factual note is more useful than a formal brief: the situation as you currently read it, the decision in front of you, and the timing you are working against. First exchanges are confidential and carry no commitment from either side.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="contact-body grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl mb-8">Direct contact</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-[#9a2f43] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:support@westhafenconsulting.net" className="text-neutral-400 hover:text-white transition-colors">
                    support@westhafenconsulting.net
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-[#9a2f43] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-3">Phone</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-neutral-500 text-xs mb-1">Berlin</p>
                      <a href="tel:+4917616021344" className="text-neutral-400 hover:text-white transition-colors">+49 176 160 21344</a>
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs mb-1">New York</p>
                      <a href="tel:+16267131308" className="text-neutral-400 hover:text-white transition-colors">+1 626 713 1308</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-[#9a2f43] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Response time</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Initial responses within two business days. Substantive matters are scheduled for a call at a mutually convenient time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#9a2f43] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-3">Offices</p>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">Berlin</p>
                      <p className="text-neutral-400">Kurfürstendamm 195</p>
                      <p className="text-neutral-400">10707 Berlin, Germany</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">New York</p>
                      <p className="text-neutral-400">347 Fifth Avenue</p>
                      <p className="text-neutral-400">New York, NY 10016, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note about inquiries */}
            <div className="mt-12 p-6 border border-white/[0.06] bg-white/[0.02]">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Before reaching out</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                The firm works on board-level questions where internal resources cannot be spared or outside scrutiny is essential. Vendor services, marketing partnerships, and recruitment inquiries are not considered. For media inquiries, please identify your publication and the nature of your request.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  )
}
