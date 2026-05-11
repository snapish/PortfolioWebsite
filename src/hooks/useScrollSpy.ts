import { useState, useEffect, useRef } from 'react'

export function useScrollSpy(selectors: string): string {
  const [activeSection, setActiveSection] = useState('top')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    )

    const sections = document.querySelectorAll(selectors)
    sections.forEach((section) => observerRef.current?.observe(section))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [selectors])

  return activeSection
}
