import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

// Imagens reais do tsx.com.br
const HERO_BG = 'https://tsx.com.br/wp-content/uploads/2022/08/cabecalho-TSX-Group-1-1.jpg'
const TSX_LOGO = 'https://tsx.com.br/wp-content/uploads/2022/08/cropped-Logo-TSX-Group-bca.png'

export default function Hero() {
  const heroRef    = useRef(null)
  const bgImgRef   = useRef(null)
  const headlineRef = useRef(null)
  const subheadlineRef = useRef(null)
  const ctaRef     = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const overlayRef = useRef(null)
  const labelRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Parallax no background ao scroll ──────────────────────────
      gsap.to(bgImgRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // ── Timeline de entrada ────────────────────────────────────────
      const tl = gsap.timeline({ delay: 0.2 })

      // Label topo
      tl.fromTo(labelRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )

      // Headline: reveal via clip-path + translateY
      tl.fromTo(headlineRef.current,
        { clipPath: 'inset(100% 0 0 0)', y: 50, opacity: 0 },
        { clipPath: 'inset(0% 0 0 0)', y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' },
        '-=0.3'
      )

      // Sub-headline
      tl.fromTo(subheadlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )

      // CTA
      tl.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )

      // Scroll indicator: entrada + pulsação contínua
      tl.fromTo(scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      gsap.to(scrollIndicatorRef.current, {
        y: 10, repeat: -1, yoyo: true,
        duration: 1.2, ease: 'sine.inOut', delay: 1.5,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef} aria-label="Seção principal">
      {/* ─── Background real tsx.com.br + parallax ─── */}
      <div className="hero__bg" aria-hidden="true">
        <img
          ref={bgImgRef}
          className="hero__bg-img"
          src={HERO_BG}
          alt=""
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__bg-gradient"></div>
        <div className="hero__bg-particles">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="hero__particle" style={{
              left: `${Math.random() * 100}%`,
              top:  `${Math.random() * 100}%`,
              animationDelay:    `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width:  `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }} />
          ))}
        </div>
        <div className="hero__overlay" ref={overlayRef}></div>
      </div>

      {/* ─── Conteúdo ─── */}
      <div className="hero__content container">
        {/* Logo real */}
        <div className="hero__label" ref={labelRef}>
          <img
            src={TSX_LOGO}
            alt="TSX Group"
            className="hero__logo-img"
          />
          <span className="hero__label-since">Desde 1994</span>
        </div>

        <h1 className="hero__headline" ref={headlineRef}>
          Transformando <br />
          <em className="text-gold">ideais estratégicos</em><br />
          em realidade.
        </h1>

        <p className="hero__subheadline" ref={subheadlineRef}>
          Grupo multidisciplinar com mais de 30 anos de história, unindo
          expertise em Assessoria, Engenharia, Internacional e Investimentos
          para transformar negócios complexos em resultados concretos.
        </p>

        <div className="hero__cta" ref={ctaRef}>
          <a href="#unidades" className="btn btn--primary">Conheça o Grupo</a>
          <a href="#sobre"    className="btn btn--outline">Nossa História</a>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <div className="hero__scroll-indicator" ref={scrollIndicatorRef} aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>

      {/* ─── Barra inferior com stats ─── */}
      <div className="hero__bottom-bar" aria-hidden="true">
        <div className="container">
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">+30</span>
              <span className="hero__stat-label">anos de história</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">4</span>
              <span className="hero__stat-label">unidades de negócio</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">Global</span>
              <span className="hero__stat-label">presença internacional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
