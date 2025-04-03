"use client"

import { useState, useEffect, useRef } from "react"

export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("")
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: `${-offset}px 0px 0px 0px`,
        threshold: 0.1,
      },
    )

    elements.forEach((el) => {
      if (el) observer.current?.observe(el)
    })

    return () => observer.current?.disconnect()
  }, [ids, offset])

  return activeId
}

