"use client"

import type React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Register at module level so plugins are available before any useGSAP hooks run
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export function GsapProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
