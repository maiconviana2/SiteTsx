import React, { useRef } from 'react'
import './Contact.css'

export default function Contact() {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrar com backend / Formspree / EmailJS
    alert('Mensagem enviada! Entraremos em contato em breve.')
  }

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div className="contact__layout">
          {/* Info */}
          <div className="contact__info">
            <div className="gold-line"></div>
            <h2 className="contact__title">
              Vamos <em className="text-gold">conversar</em>?
            </h2>
            <p className="contact__subtitle">
              Nossa equipe está pronta para entender seu desafio e propor
              a melhor solução dentro do ecossistema TSX Group.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">📍 Localização</span>
                <span className="contact__detail-value">Belo Horizonte, MG — Brasil</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">🕐 Atendimento</span>
                <span className="contact__detail-value">Seg – Sex, das 8h às 18h</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">📧 E-mail</span>
                <span className="contact__detail-value">contato@tsx.com.br</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">📞 Telefone</span>
                <span className="contact__detail-value">+55 (11) 3000-0000</span>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit} ref={formRef} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Nome</label>
                  <input id="contact-name" type="text" className="form-input" placeholder="Seu nome completo" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">E-mail</label>
                  <input id="contact-email" type="email" className="form-input" placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-empresa" className="form-label">Empresa</label>
                <input id="contact-empresa" type="text" className="form-input" placeholder="Nome da empresa" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-unidade" className="form-label">Unidade de interesse</label>
                <select id="contact-unidade" className="form-input form-select">
                  <option value="">Selecione uma unidade</option>
                  <option value="advisors">TSX Advisors</option>
                  <option value="engineering">TSX Engineering</option>
                  <option value="international">TSX International</option>
                  <option value="invest">TSX Invest</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-mensagem" className="form-label">Mensagem</label>
                <textarea
                  id="contact-mensagem"
                  className="form-input form-textarea"
                  rows={5}
                  placeholder="Descreva brevemente seu desafio ou necessidade..."
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary contact__submit">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
