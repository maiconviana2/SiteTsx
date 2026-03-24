import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Numbers.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 30, suffix: '+', label: 'Anos de experiência', description: 'Uma história de três décadas construída com resultado' },
  { value: 500, suffix: '+', label: 'Clientes atendidos', description: 'Empresas de todos os portes e segmentos' },
  { value: 4,   suffix: '',  label: 'Unidades de negócio', description: 'Advisors, Engineering, International e Invest' },
  { value: 3,   suffix: '',  label: 'Continentes', description: 'Presença e atuação global integrada' },
]

function animateCounter(el, target, duration = 2) {
  let start = 0
  const startTime = performance.now()
  const step = (now) => {
    const progress = Math.min((now - startTime) / (duration * 1000), 1)
    const eased = 1 - Math.pow(1 - progress, 4) // easeOutQuart
    const current = Math.floor(eased * target)
    el.textContent = current
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = target
  }
  requestAnimationFrame(step)
}

export default function Numbers() {
  const sectionRef = useRef(null)
  const numbersRef = useRef([])
  const hasAnimated = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        onEnter: () => {
          if (hasAnimated.current) return
          hasAnimated.current = true

          numbersRef.current.forEach((el, i) => {
            if (!el) return
            const target = stats[i].value
            setTimeout(() => animateCounter(el, target, 2), i * 200)
          })

          // Fade in items
          gsap.fromTo('.numbers__item',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out' }
          )
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="numeros" className="section numbers" ref={sectionRef}>
      <div className="numbers__bg-line" aria-hidden="true" />
      <div className="container">
        <div className="numbers__header">
          <div className="gold-line"></div>
          <h2 className="numbers__title">
            TSX em <em className="text-gold">Números</em>
          </h2>
        </div>

        <div className="numbers__grid">
          {stats.map((stat, i) => (
            <div className="numbers__item" key={stat.label}>
              <div className="numbers__value-wrap">
                <span
                  className="numbers__value"
                  ref={el => numbersRef.current[i] = el}
                >0</span>
                <span className="numbers__suffix">{stat.suffix}</span>
              </div>
              <span className="numbers__label">{stat.label}</span>
              <p className="numbers__description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
