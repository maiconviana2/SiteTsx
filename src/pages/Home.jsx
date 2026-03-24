import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import UnitsPin from '../components/UnitsPin/UnitsPin'
import Numbers from '../components/Numbers/Numbers'
import Timeline from '../components/Timeline/Timeline'
import Insights from '../components/Insights/Insights'
import Contact from '../components/Contact/Contact'
import './Home.css'

export default function Home() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')
  }
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
                  {t('about.titleP1')} <br />
                  {t('about.titleP2')} <em className="text-gold">{t('about.titleHighlight')}</em>
                </h2>
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <a href="#unidades" className="btn btn--outline" style={{ marginTop: 'var(--space-6)' }}>
                  {t('about.cta')}
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
                {t('footer.tagline')}
              </p>
            </div>
            <nav className="footer__nav" aria-label="Links do rodapé">
              <div className="footer__nav-col">
                <span className="footer__nav-title">{t('footer.units')}</span>
                <a href="#">TSX Advisors</a>
                <a href="#">TSX Engineering</a>
                <a href="#">TSX International</a>
                <a href="#">TSX Invest</a>
              </div>
              <div className="footer__nav-col">
                <span className="footer__nav-title">{t('footer.company')}</span>
                <a href="#">{t('footer.aboutUs')}</a>
                <a href="#">{t('footer.history')}</a>
                <a href="#">{t('footer.careers')}</a>
                <a href="#">{t('footer.insights')}</a>
              </div>
              <div className="footer__nav-col">
                <span className="footer__nav-title">{t('footer.legal')}</span>
                <a href="#">{t('footer.privacy')}</a>
                <a href="#">{t('footer.terms')}</a>
                <a href="#">{t('footer.cookies')}</a>
              </div>
            </nav>
          </div>
          <div className="footer__bottom">
            <p>{t('footer.rights')}</p>
            <button 
              className="footer__lang" 
              onClick={toggleLanguage}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '500' }}
            >
              {i18n.language === 'pt' ? 'PT / EN' : 'EN / PT'}
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
