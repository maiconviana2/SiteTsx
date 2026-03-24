import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './CustomCursor.css'

export default function CustomCursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    let mouse = { x: 0, y: 0 }
    let ringPos = { x: 0, y: 0 }

    // Dot segue o mouse instantaneamente
    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      gsap.set(dot, { x: mouse.x, y: mouse.y })
    }

    // Anel segue com lag suave
    const lerp = (start, end, factor) => start + (end - start) * factor

    let rafId
    const animate = () => {
      ringPos.x = lerp(ringPos.x, mouse.x, 0.12)
      ringPos.y = lerp(ringPos.y, mouse.y, 0.12)
      gsap.set(ring, { x: ringPos.x, y: ringPos.y })
      rafId = requestAnimationFrame(animate)
    }
    animate()

    // Hover em links e botões: expand ring
    const onEnterLink = () => {
      gsap.to(ring, { scale: 2.4, opacity: 0.5, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot,  { scale: 0,   duration: 0.2 })
    }
    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot,  { scale: 1, duration: 0.2 })
    }

    document.addEventListener('mousemove', onMove)

    const addLinkListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }
    addLinkListeners()
    // Reatualiza ao DOM mudar
    const observer = new MutationObserver(addLinkListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor__dot"  ref={dotRef}  aria-hidden="true" />
      <div className="cursor__ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}
