import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './BusinessUnits.css'

gsap.registerPlugin(ScrollTrigger)

const units = [
  {
    id: 'advisors',
    name: 'TSX Advisors',
    area: 'Assessoria Estratégica & Fiscal',
    description: 'Consultoria de alto nível em planejamento tributário, reestruturação societária e assessoria financeira para grandes grupos empresariais.',
    highlight: '30 anos de estruturação fiscal',
    accent: '#C9A84C',
    icon: '◈',
    href: '#',
  },
  {
    id: 'engineering',
    name: 'TSX Engineering',
    area: 'Engenharia & Projetos',
    description: 'Soluções de engenharia integradas para projetos de infraestrutura, construção civil e gerenciamento de obras complexas.',
    highlight: 'Projetos de grande escala',
    accent: '#4C8EC9',
    icon: '◉',
    href: '#',
  },
  {
    id: 'international',
    name: 'TSX International',
    area: 'Expansão Global',
    description: 'Estruturação de operações internacionais, abertura de empresas no exterior e consultoria para negócios globais.',
    highlight: 'Presença em 3 continentes',
    accent: '#6CC94C',
    icon: '◎',
    href: '#',
  },
  {
    id: 'invest',
    name: 'TSX Invest',
    area: 'Gestão de Patrimônio',
    description: 'Gestão patrimonial e alocação de investimentos com visão de longo prazo, performance consistente e proteção do capital.',
    highlight: 'Retornos acima do mercado',
    accent: '#C94C8E',
    icon: '◇',
    href: '#',
  },
]

export default function BusinessUnits() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.12,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="unidades" className="section business-units" ref={sectionRef}>
      <div className="container">
        <div className="business-units__header">
          <div className="gold-line"></div>
          <h2 className="business-units__title">
            Nossas <em className="text-gold">Unidades</em>
          </h2>
          <p className="business-units__subtitle">
            Quatro frentes de atuação integradas, cada uma com expertise única,
            todas convergindo para resultados extraordinários.
          </p>
        </div>

        <div className="business-units__grid">
          {units.map((unit, i) => (
            <article
              key={unit.id}
              className="unit-card"
              ref={el => cardsRef.current[i] = el}
              style={{ '--accent': unit.accent }}
            >
              <div className="unit-card__icon" aria-hidden="true">
                {unit.icon}
              </div>
              <div className="unit-card__content">
                <span className="unit-card__area">{unit.area}</span>
                <h3 className="unit-card__name">{unit.name}</h3>
                <p className="unit-card__description">{unit.description}</p>
              </div>
              <div className="unit-card__footer">
                <span className="unit-card__highlight">"{unit.highlight}"</span>
                <a href={unit.href} className="unit-card__link">
                  Saiba mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
