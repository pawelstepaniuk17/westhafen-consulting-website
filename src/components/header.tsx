"use client"

import Image from "next/image"
import { TransitionLink } from "./transition-link"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const headerRef = useRef(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 2,
    })
  }, [])

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center bg-white/95 backdrop-blur-md px-5 py-1 border border-[#1a365d]/10 rounded-full shadow-sm">
        <TransitionLink href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/jhc-logo.png"
            alt="JHC Consulting"
            style={{ height: "40px", width: "auto", display: "block" }}
          />
        </TransitionLink>
        <nav className="hidden md:flex items-center gap-8 text-[#1a365d] text-sm tracking-wide uppercase">
          <TransitionLink href="/about" className="hover:text-[#4a9eb3] transition-colors">
            The Firm
          </TransitionLink>
          <TransitionLink href="/mandates" className="hover:text-[#4a9eb3] transition-colors">
            Services
          </TransitionLink>
          <TransitionLink href="/method" className="hover:text-[#4a9eb3] transition-colors">
            Method
          </TransitionLink>
          <TransitionLink href="/notes" className="hover:text-[#4a9eb3] transition-colors">
            Notes
          </TransitionLink>
          <TransitionLink href="/contact" className="hover:text-[#4a9eb3] transition-colors">
            Contact
          </TransitionLink>
        </nav>
        <TransitionLink href="/contact" className="hidden md:block">
          <motion.button
            className="bg-[#4a9eb3] text-white font-medium py-2 px-6 rounded-full text-sm tracking-wide hover:bg-[#3d8a9d] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin a Conversation
          </motion.button>
        </TransitionLink>
        <button
          className="md:hidden text-[#1a365d]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-white/95 backdrop-blur-md border border-[#1a365d]/10 rounded-2xl p-6 shadow-sm"
        >
          <nav className="flex flex-col gap-4 text-[#1a365d] text-sm tracking-wide uppercase">
            <TransitionLink href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[#4a9eb3] transition-colors py-2">
              The Firm
            </TransitionLink>
            <TransitionLink href="/mandates" onClick={() => setMobileOpen(false)} className="hover:text-[#4a9eb3] transition-colors py-2">
              Services
            </TransitionLink>
            <TransitionLink href="/method" onClick={() => setMobileOpen(false)} className="hover:text-[#4a9eb3] transition-colors py-2">
              Method
            </TransitionLink>
            <TransitionLink href="/notes" onClick={() => setMobileOpen(false)} className="hover:text-[#4a9eb3] transition-colors py-2">
              Notes
            </TransitionLink>
            <TransitionLink href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-[#4a9eb3] transition-colors py-2">
              Contact
            </TransitionLink>
            <TransitionLink href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="bg-[#4a9eb3] text-white font-medium py-2 px-6 rounded-full text-sm tracking-wide w-full mt-2 hover:bg-[#3d8a9d] transition-colors">
                Begin a Conversation
              </button>
            </TransitionLink>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
