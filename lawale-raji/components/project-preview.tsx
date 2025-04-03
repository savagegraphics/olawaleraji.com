"use client"
import Image from "next/image"
import type { Project } from "@/lib/types"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

interface ProjectPreviewProps {
  project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
    >
      <div className="overflow-hidden rounded-lg border aspect-video relative">
        {/* Website preview iframe with zoom effect */}
        <div className="w-full h-full overflow-hidden">
          <iframe
            ref={iframeRef}
            src={project.link}
            title={project.title}
            className={`absolute top-0 left-0 w-full border-0 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            scrolling="no"
            style={{
              overflow: "hidden",
              transform: "scale(0.5)",
              transformOrigin: "top left",
              height: "200%",
              width: "200%", // Double the width to ensure it fills the container when scaled down
              pointerEvents: "none",
            }}
          />

          {/* Fallback image while iframe loads */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={340}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-xl font-medium group-hover:underline">{project.title}</h3>
        <p className="mb-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border px-2 py-1 text-xs text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <span className="flex items-center gap-1 text-sm font-medium">
            Visit Site <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

