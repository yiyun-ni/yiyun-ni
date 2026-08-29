import { useEffect, useState } from 'react'

const HOME_SECTION_IDS = ['home', 'about', 'work', 'experience', 'contact']

export function useActiveSection(ids: string[] = HOME_SECTION_IDS): string {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const threshold = window.innerHeight * 0.35

    const handleScroll = () => {
      // If near bottom of page, always activate last section
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 80
      if (nearBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      // Find the section whose top is closest to (but above) the threshold
      // Only set active if at least one section has been scrolled past
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= threshold) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids.join(',')])

  return active
}
