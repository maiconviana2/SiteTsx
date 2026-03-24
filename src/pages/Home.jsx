import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import UnitsPin from '../components/UnitsPin/UnitsPin'
import Numbers from '../components/Numbers/Numbers'
import Timeline from '../components/Timeline/Timeline'
import Insights from '../components/Insights/Insights'
import Contact from '../components/Contact/Contact'
import './Home.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Seção: Sobre o Grupo */}
        <section id="sobre" className="section section-sobre">
          <div className="container">
            <div className="sobre__layout">
              <div className="sobre__text">
                <div className="gold-line"></div>
                <h2 className="sobre__title">
                  Um grupo construído <br />
                  para <em className="text-gold">resultados reais</em>
                </h2>
                <p>
                  O TSX Group nasceu em 1994 com uma convicção simples: empresas
                  complexas merecem soluções igualmente sofisticadas. Ao longo de
                  três décadas, construímos um ecossistema de quatro unidades
                  complementares, capazes de resolver os desafios mais críticos
                  dos nossos clientes de forma integrada.
                </p>
                <p>
                  Mais do que consultores, somos parceiros estratégicos com pele
                  no jogo — alinhando interesses, assumindo compromissos e
                  entregando resultados mensuráveis.
                </p>
                <a href="#unidades" className="btn btn--outline" style={{ marginTop: 'var(--space-6)' }}>
                  Conheça as unidades
                </a>
              </div>
              <div className="sobre__visual" aria-hidden="true">
                <div className="sobre__visual-inner">
                  <div className="sobre__visual-card" style={{ '--d': '0' }}>
                    <span>TSX Advisors</span>
                  </div>
                  <div className="sobre__visual-card" style={{ '--d': '0.1s' }}>
                    <span>TSX Engineering</span>
                  </div>
                  <div className="sobre__visual-card" style={{ '--d': '0.2s' }}>
                    <span>TSX International</span>
                  </div>
                  <div className="sobre__visual-card" style={{ '--d': '0.3s' }}>
                    <span>TSX Invest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <UnitsPin />
        <Numbers />
        <Timeline />
        <Insights />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__brand">
              <span className="footer__logo">
                <em>TSX</em> Group
              </span>
              <p className="footer__tagline">
                Transformando ideais estratégicos em realidade.
              </p>
            </div>
            <nav className="footer__nav" aria-label="Links do rodapé">
              <div className="footer__nav-col">
                <span className="footer__nav-title">Unidades</span>
                <a href="#">TSX Advisors</a>
                <a href="#">TSX Engineering</a>
                <a href="#">TSX International</a>
                <a href="#">TSX Invest</a>
              </div>
              <div className="footer__nav-col">
                <span className="footer__nav-title">Empresa</span>
                <a href="#">Sobre nós</a>
                <a href="#">Nossa história</a>
                <a href="#">Trabalhe conosco</a>
                <a href="#">Insights</a>
              </div>
              <div className="footer__nav-col">
                <span className="footer__nav-title">Legal</span>
                <a href="#">Privacidade</a>
                <a href="#">Termos de uso</a>
                <a href="#">Cookies</a>
              </div>
            </nav>
          </div>
          <div className="footer__bottom">
            <p>© 2025 TSX Group. Todos os direitos reservados.</p>
            <span className="footer__lang">PT / EN</span>
          </div>
        </div>
      </footer>
    </>
  )
}
