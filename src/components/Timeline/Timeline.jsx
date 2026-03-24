import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Timeline.css'

gsap.registerPlugin(ScrollTrigger)

const events = [
  { year: '1994', title: 'Fundação', description: 'O TSX Group nasce com foco em assessoria tributária e fiscal.' },
  { year: '2000', title: 'Expansão', description: 'Abertura da unidade de Engineering para grandes projetos de infraestrutura.' },
  { year: '2008', title: 'Internacional', description: 'Início das operações internacionais em Portugal e EUA.' },
  { year: '2015', title: 'TSX Invest', description: 'Criação da gestora patrimonial para clientes de alta renda.' },
  { year: '2020', title: 'Transformação Digital', description: 'Digitalização dos processos e expansão da equipe para 200+ profissionais.' },
  { year: '2024', title: '30 Anos', description: 'Celebração de três décadas com presença em 3 continentes.' },
]

export default function Timeline() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const dotsRef = useRef([])
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Linha central cresce ao scroll
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
          }
        }
      )

      // Itens acendem em sequência
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return
        ScrollTrigger.create({
          trigger: dot,
          start: 'top 75%',
          onEnter: () => {
            gsap.to(dot, { scale: 1.5, background: 'var(--color-gold)', duration: 0.4, ease: 'back.out' })
            gsap.fromTo(itemsRef.current[i],
              { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
              { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 }
            )
          },
          onLeaveBack: () => {
            gsap.to(dot, { scale: 1, background: 'rgba(201,168,76,0.2)', duration: 0.3 })
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="historia" className="section timeline" ref={sectionRef}>
      <div className="container">
        <div className="timeline__header">
          <div className="gold-line"></div>
          <h2 className="timeline__title">Nossa <em className="text-gold">Trajetória</em></h2>
          <p className="timeline__subtitle">30 anos de história que moldaram quem somos hoje.</p>
        </div>

        <div className="timeline__track">
          {/* Linha vertical */}
          <div className="timeline__line" ref={lineRef} aria-hidden="true" />

          {events.map((event, i) => (
            <div
              key={event.year}
              className={`timeline__item timeline__item--${i % 2 === 0 ? 'left' : 'right'}`}
              ref={el => itemsRef.current[i] = el}
            >
              {/* Dot */}
              <div className="timeline__dot" ref={el => dotsRef.current[i] = el} aria-hidden="true" />

              {/* Card */}
              <div className="timeline__card">
                <span className="timeline__year">{event.year}</span>
                <h3 className="timeline__event-title">{event.title}</h3>
                <p className="timeline__event-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
