import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navRef = useRef(null)
  const { t, i18n } = useTranslation()

  const navLinks = [
    { label: t('nav.about'), href: '#sobre' },
    { label: t('nav.units'), href: '#unidades' },
    { label: t('nav.insights'), href: '#insights' },
    { label: t('nav.contact'), href: '#contato' },
  ]

  useEffect(() => {
    const nav = navRef.current
    ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => nav.classList.add('navbar--scrolled'),
      onLeaveBack: () => nav.classList.remove('navbar--scrolled'),
    })
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  const handleScrollTo = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleLanguage = (e) => {
    e.preventDefault()
    const newLang = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(newLang)
  }

  return (
    <nav className="navbar" ref={navRef} role="navigation" aria-label="Menu principal">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="TSX Group — Página inicial">
          <span className="navbar__logo-tsx">TSX</span>
          <span className="navbar__logo-group">Group</span>
        </a>

        {/* Links primários */}
        <ul className="navbar__links" role="list">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleScrollTo(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Navegação secundária */}
        <div className="navbar__secondary">
          <button onClick={toggleLanguage} className="navbar__lang-btn" aria-label="Mudar idioma">
            {i18n.language === 'pt' ? (
              <>PT <span>/ EN</span></>
            ) : (
              <><span>PT /</span> EN</>
            )}
          </button>
          <a href="#contato" className="btn btn--primary navbar__cta">
            {t('nav.cta')}
          </a>
        </div>

        {/* Hambúrguer mobile */}
        <button className="navbar__hamburger" aria-label="Abrir menu" id="hamburger-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
