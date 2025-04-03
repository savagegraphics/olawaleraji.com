"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { User, Briefcase, Mail } from "lucide-react"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function MobileNav() {
  const activeSection = useScrollSpy(
    navItems.map((item) => item.href.slice(1)),
    100,
  )

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform md:hidden">
      <ul className="flex items-center gap-1 rounded-full border bg-background/80 p-2 backdrop-blur-md">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="relative block p-2">
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <item.icon
                className={`h-6 w-6 transition-colors ${
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span className="sr-only">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

