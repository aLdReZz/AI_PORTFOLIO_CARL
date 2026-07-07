import { useEffect } from 'react'

// Adds `.is-visible` to every `.reveal` element inside the ref'd container
// as it scrolls into view. One observer per section; disconnects on unmount.
export function useReveal(ref) {
  useEffect(() => {
    const root = ref?.current
    if (!root) return

    const els = [...root.querySelectorAll('.reveal')]
    const revealAll = () => els.forEach((el) => el.classList.add('is-visible'))

    if (!('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))

    // Fail-safe: some embedded/headless renderers never deliver observer
    // callbacks. If that happens, reveal everything so content is never
    // stuck invisible.
    const failsafe = setTimeout(revealAll, 2500)

    return () => {
      io.disconnect()
      clearTimeout(failsafe)
    }
  }, [ref])
}
