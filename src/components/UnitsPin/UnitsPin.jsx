import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import './UnitsPin.css'

gsap.registerPlugin(ScrollTrigger)

export default function UnitsPin() {
  const { t } = useTranslation()

  const units = [
    {
      id: 'advisors',
      name: 'TSX Advisors',
      tag: t('units.advisors.tag'),
      description: t('units.advisors.desc'),
      highlight: t('units.advisors.highlight'),
      color: '#C9A84C',
      number: '01',
      bg: 'https://tsx.com.br/wp-content/uploads/2022/09/cabecalho-TSX-Group-gente.jpg',
    },
    {
      id: 'engineering',
      name: 'TSX Engineering',
      tag: t('units.engineering.tag'),
      description: t('units.engineering.desc'),
      highlight: t('units.engineering.highlight'),
      color: '#4C8EC9',
      number: '02',
      bg: 'https://tsx.com.br/wp-content/uploads/2022/09/cabecalho-TSX-Group-gente.jpg',
    },
    {
      id: 'international',
      name: 'TSX International',
      tag: t('units.international.tag'),
      description: t('units.international.desc'),
      highlight: t('units.international.highlight'),
      color: '#4CC97B',
      number: '03',
      bg: 'https://tsx.com.br/wp-content/uploads/2022/09/cabecalho-TSX-Group-gente.jpg',
    },
    {
      id: 'invest',
      name: 'TSX Invest',
      tag: t('units.invest.tag'),
      description: t('units.invest.desc'),
      highlight: t('units.invest.highlight'),
      color: '#C94C8E',
      number: '04',
      bg: 'https://tsx.com.br/wp-content/uploads/2022/09/cabecalho-TSX-Group-gente.jpg',
    },
  ]

  const containerRef = useRef(null)
  const stickyRef    = useRef(null)
  const panelsRef    = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Para cada painel (exceto o primeiro) → fade in conforme scroll
      panelsRef.current.forEach((panel, i) => {
        if (i === 0) return
        gsap.fromTo(panel,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.01, // instantâneo — controlado pelo scrub
            scrollTrigger: {
              trigger: panel,
              containerAnimation: ScrollTrigger.getById('units-h-scroll'),
              start: 'left center',
              end: 'right center',
              scrub: true,
            },
          }
        )
      })

      // ScrollTrigger do pin: pineia o container e anima horizontalmente
      // Move a trilha (track) para a esquerda com base na quantidade de itens (xPercent)
      gsap.to(stickyRef.current, {
        xPercent: -100 * (units.length - 1) / units.length,
        ease: 'none',
        scrollTrigger: {
          id: 'units-h-scroll',
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${window.innerWidth * units.length}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="unidades-pin" className="units-pin" ref={containerRef}>
      {/* Label lateral */}
      <div className="units-pin__label" aria-hidden="true">
        <span>{t('units.label')}</span>
      </div>

      {/* Track horizontal */}
      <div className="units-pin__track" ref={stickyRef}>
        {units.map((unit, i) => (
          <div
            key={unit.id}
            className="units-pin__panel"
            ref={el => panelsRef.current[i] = el}
            style={{ '--accent': unit.color }}
          >
            {/* Background foto */}
            <div
              className="units-pin__panel-bg"
              style={{ backgroundImage: `url(${unit.bg})` }}
              aria-hidden="true"
            >
              <div className="units-pin__panel-overlay" />
            </div>

            {/* Conteúdo */}
            <div className="units-pin__content">
              <div className="units-pin__number">{unit.number}</div>
              <span className="units-pin__tag">{unit.tag}</span>
              <h2 className="units-pin__name">{unit.name}</h2>
              <p className="units-pin__desc">{unit.description}</p>
              <blockquote className="units-pin__highlight">
                "{unit.highlight}"
              </blockquote>
              <a href={`#${unit.id}`} className="btn btn--outline units-pin__link">
                {t('units.more')}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Indicador de progresso */}
      <div className="units-pin__dots" aria-hidden="true">
        {units.map((unit, i) => (
          <span key={i} className="units-pin__dot" style={{ '--accent': unit.color }} />
        ))}
      </div>
    </section>
  )
}
