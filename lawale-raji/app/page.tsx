"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export default function Home() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="mb-6 text-4xl font-light tracking-tight md:text-5xl">
          Frontend Engineer Specializing in Modern Web Experiences
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          I transform complex requirements into intuitive, accessible, and high-performance web applications. With
          expertise in React, Next.js, and TypeScript, I build scalable solutions that deliver exceptional user
          experiences.
        </p>
        <div className="flex gap-4">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
              View Portfolio
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-24" id="about">
        <h2 className="mb-6 text-2xl font-light">About</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm a detail-oriented Frontend Engineer with a passion for creating performant, accessible, and visually
            appealing web applications. My approach combines technical precision with creative problem-solving to
            deliver solutions that exceed client expectations and enhance user engagement.
          </p>
          <p>
            With a strong foundation in modern JavaScript frameworks and UI/UX principles, I specialize in building
            responsive interfaces that work flawlessly across all devices. My experience spans from e-commerce platforms
            to interactive dashboards, always prioritizing clean code architecture and maintainability.
          </p>
          <p>
            I thrive in collaborative environments where I can contribute to product strategy while implementing
            pixel-perfect designs. My commitment to continuous learning keeps me at the forefront of frontend
            technologies and best practices.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-24" id="skills">
        <h2 className="mb-6 text-2xl font-light">Technical Expertise</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Frontend Development</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>React & Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>Tailwind CSS / SCSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Tools & Workflow</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Git / GitHub</li>
              <li>CI/CD Pipelines</li>
              <li>Figma / Design Systems</li>
              <li>Vercel / Netlify</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Professional Skills</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Web Accessibility (WCAG)</li>
              <li>Performance Optimization</li>
              <li>State Management</li>
              <li>API Integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-24" id="projects">
        <h2 className="mb-6 text-2xl font-light">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="mb-6 text-2xl font-light">Let's Connect</h2>
        <p className="mb-6 text-muted-foreground">
          I'm currently open to new opportunities where I can contribute, learn, and grow. If you're looking for a
          developer who can deliver clean, efficient code and exceptional user experiences, let's talk.
        </p>
        <div className="space-y-2">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=olawaleraji188@gmail.com&su=Job%20Opportunity%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-lg hover:underline"
          >
            olawaleraji188@gmail.com
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/savagegraphics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-lg hover:underline"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/toheeb-raji-b3a615235"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-lg hover:underline"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  )
}

