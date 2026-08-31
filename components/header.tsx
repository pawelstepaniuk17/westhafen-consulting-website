"use client"

import { TransitionLink } from "./transition-link"
import { motion, AnimatePresence } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/about", label: "The Firm" },
  { href: "/mandates", label: "Services" },
  { href: "/method", label: "Method" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
]

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
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <TransitionLink href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <span className="inline-flex items-center rounded-md bg-foreground px-2.5 py-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/jhc-logo.png" alt="JHC Consulting" className="h-6 w-auto" />
          </span>
        </TransitionLink>

        <nav className="hidden items-center gap-9 text-xs uppercase tracking-[0.15em] text-muted-foreground md:flex">
          {navItems.map((item) => (
            <TransitionLink key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </TransitionLink>
          ))}
        </nav>

        <TransitionLink href="/contact" className="hidden md:block">
          <button className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
            Begin a Conversation
          </button>
        </TransitionLink>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-64px)] bg-background md:hidden"
          >
            <nav className="flex flex-col divide-y divide-border border-t border-border">
              {navItems.map((item, i) => (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-6 py-5 font-serif text-2xl text-foreground transition-colors hover:text-primary"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </TransitionLink>
              ))}
            </nav>
            <div className="px-6 py-8">
              <TransitionLink href="/contact" onClick={() => setMobileOpen(false)}>
                <button className="w-full rounded-md bg-primary px-6 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
                  Begin a Conversation
                </button>
              </TransitionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
