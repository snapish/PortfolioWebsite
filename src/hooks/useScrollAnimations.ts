import { useEffect } from 'react'

export function useScrollAnimations(selectors: string): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const elements = document.querySelectorAll(selectors)
    elements.forEach((el) => {
      el.classList.add('fade-slide')
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [selectors])
}
