import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Insights.css'

gsap.registerPlugin(ScrollTrigger)

const insights = [
  {
    id: 1,
    featured: true,
    category: 'Mercado',
    title: 'O futuro do planejamento tributário no Brasil em 2025',
    excerpt: 'Com a reforma tributária avançando, as empresas precisam se preparar agora para não serem pegas de surpresa pelas mudanças no ICMS e ISS.',
    date: 'Mar 2025',
    readTime: '8 min',
  },
  {
    id: 2,
    featured: false,
    category: 'TSX Engineering',
    title: 'Gestão de obras complexas: lições de 30 anos',
    excerpt: 'Como estruturar equipes, cronogramas e contratos em projetos de grande escala.',
    date: 'Fev 2025',
    readTime: '5 min',
  },
  {
    id: 3,
    featured: false,
    category: 'Internacional',
    title: 'Abertura de empresa no exterior: guia completo',
    excerpt: 'Os principais países, custos envolvidos e armadilhas que empreendedores brasileiros devem evitar.',
    date: 'Fev 2025',
    readTime: '7 min',
  },
  {
    id: 4,
    featured: false,
    category: 'ESG',
    title: 'ESG como vantagem competitiva no mercado atual',
    excerpt: 'A integração de práticas ESG já deixou de ser opção e se tornou critério de seleção em grandes contratos B2B.',
    date: 'Jan 2025',
    readTime: '6 min',
  },
]

export default function Insights() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.insight-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const [featured, ...rest] = insights

  return (
    <section id="insights" className="section insights" ref={sectionRef}>
      <div className="container">
        <div className="insights__header">
          <div className="gold-line"></div>
          <h2 className="insights__title">
            <em className="text-gold">Insights</em> & Publicações
          </h2>
          <a href="#" className="insights__ver-todos">Ver todos →</a>
        </div>

        <div className="insights__layout">
          {/* Featured */}
          <article className="insight-card insight-card--featured">
            <div className="insight-card__image insight-card__image--featured" aria-hidden="true">
              <div className="insight-card__image-inner" />
            </div>
            <div className="insight-card__body">
              <span className="insight-card__category">{featured.category}</span>
              <h3 className="insight-card__title insight-card__title--lg">{featured.title}</h3>
              <p className="insight-card__excerpt">{featured.excerpt}</p>
              <div className="insight-card__meta">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} de leitura</span>
              </div>
            </div>
          </article>

          {/* Grid lateral */}
          <div className="insights__grid">
            {rest.map(item => (
              <article key={item.id} className="insight-card insight-card--sm">
                <div className="insight-card__image" aria-hidden="true">
                  <div className="insight-card__image-inner" />
                </div>
                <div className="insight-card__body">
                  <span className="insight-card__category">{item.category}</span>
                  <h3 className="insight-card__title">{item.title}</h3>
                  <div className="insight-card__meta">
                    <span>{item.date}</span>
                    <span>·</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
