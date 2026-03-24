import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Navbar.css'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current

    // Transição navbar: transparente → sólido ao scroll
    ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => nav.classList.add('navbar--scrolled'),
      onLeaveBack: () => nav.classList.remove('navbar--scrolled'),
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleScrollTo = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
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
          <a href="#" className="navbar__lang">PT <span>/ EN</span></a>
          <a href="#contato" className="btn btn--primary navbar__cta">Fale Conosco</a>
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
