"use client"

import { TransitionLink } from "./transition-link"

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-[#070c15] py-24 text-foreground">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="font-serif text-2xl leading-none tracking-tight text-foreground">Westhafen</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Consulting</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Private counsel. Written memoranda signed by their author. For chairs, chief executives, and board committees.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <TransitionLink href="/about" className="text-neutral-300 hover:text-white transition-colors text-sm">
                The Firm
              </TransitionLink>
              <TransitionLink href="/mandates" className="text-neutral-300 hover:text-white transition-colors text-sm">
                Services
              </TransitionLink>
              <TransitionLink href="/method" className="text-neutral-300 hover:text-white transition-colors text-sm">
                Method
              </TransitionLink>
              <TransitionLink href="/notes" className="text-neutral-300 hover:text-white transition-colors text-sm">
                Notes
              </TransitionLink>
              <TransitionLink href="/contact" className="text-neutral-300 hover:text-white transition-colors text-sm">
                Contact
              </TransitionLink>
            </nav>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Contact</h4>
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
              <div>
                <p className="text-neutral-400">
                  <a href="mailto:support@westhafen-consulting.org" className="hover:text-white transition-colors">
                    support@westhafen-consulting.org
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Berlin</p>
                <p className="text-neutral-400">Kurfürstendamm 195</p>
                <p className="text-neutral-400">10707 Berlin, Germany</p>
                <p className="text-neutral-400 text-xs mt-2">+49 176 160 21344</p>
              </div>
              <div>
                <p className="font-medium mb-1">New York</p>
                <p className="text-neutral-400">347 Fifth Avenue</p>
                <p className="text-neutral-400">New York, NY 10016, USA</p>
                <p className="text-neutral-400 text-xs mt-2">+1 626 713 1308</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} Westhafen Consulting. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-neutral-500 text-xs uppercase tracking-widest">
            <TransitionLink href="/privacy-policy" className="hover:text-white transition-colors">Privacy</TransitionLink>
            <TransitionLink href="/terms-of-use" className="hover:text-white transition-colors">Terms</TransitionLink>
            <TransitionLink href="/cookie-policy" className="hover:text-white transition-colors">Cookies</TransitionLink>
            <TransitionLink href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</TransitionLink>
            <TransitionLink href="/security-confidentiality" className="hover:text-white transition-colors">Security</TransitionLink>
            <TransitionLink href="/accessibility" className="hover:text-white transition-colors">Accessibility</TransitionLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
