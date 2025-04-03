import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Default fallback image if project.image is invalid
  const imageSrc = project.image || "/placeholder.svg?height=340&width=600"

  return (
    <div className="group flex h-full flex-col">
      <div className="overflow-hidden rounded-lg border">
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={340}
            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="mb-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border px-2 py-1 text-xs text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium hover:underline"
          >
            View Project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

