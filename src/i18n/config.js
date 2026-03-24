import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: {
    translation: {
      nav: {
        about: 'Sobre',
        units: 'Unidades',
        insights: 'Insights',
        contact: 'Contato',
        cta: 'Fale Conosco',
      },
      hero: {
        label: 'TSX Group · Desde 1994',
        headlineP1: 'Transformando',
        headlineHighlight: 'ideais estratégicos',
        headlineP2: 'em realidade.',
        subheadline: 'Grupo multidisciplinar com mais de 30 anos de história, unindo expertise em Assessoria, Engenharia, Internacional e Investimentos para transformar negócios complexos em resultados concretos.',
        ctaPrimary: 'Conheça o Grupo',
        ctaOutline: 'Nossa História',
        scroll: 'Scroll',
        stats: {
          years: 'anos de história',
          units: 'unidades de negócio',
          global: 'presença internacional',
        }
      },
      about: {
        titleP1: 'Um grupo construído',
        titleP2: 'para',
        titleHighlight: 'resultados reais',
        p1: 'O TSX Group nasceu em 1994 com uma convicção simples: empresas complexas merecem soluções igualmente sofisticadas. Ao longo de três décadas, construímos um ecossistema de quatro unidades complementares, capazes de resolver os desafios mais críticos dos nossos clientes de forma integrada.',
        p2: 'Mais do que consultores, somos parceiros estratégicos com pele no jogo — alinhando interesses, assumindo compromissos e entregando resultados mensuráveis.',
        cta: 'Conheça as unidades'
      },
      units: {
        label: 'Nossas Unidades',
        more: 'Saiba mais',
        advisors: {
          tag: 'Assessoria Estratégica & Fiscal',
          desc: 'Consultoria de alto nível em planejamento tributário, reestruturação societária e assessoria financeira. 30 anos construindo estruturas que protegem patrimônios e maximizam resultados.',
          highlight: '30 anos de estruturação fiscal'
        },
        engineering: {
          tag: 'Engenharia & Projetos',
          desc: 'Soluções de engenharia integradas para projetos de infraestrutura complexa. Do conceito à entrega, com rigor técnico e gestão de ponta.',
          highlight: 'Projetos de grande escala'
        },
        international: {
          tag: 'Expansão Global',
          desc: 'Estruturação de operações internacionais, abertura de empresas no exterior e consultoria tributária cross-border. Presença ativa em 3 continentes.',
          highlight: 'Presença em 3 continentes'
        },
        invest: {
          tag: 'Gestão de Patrimônio',
          desc: 'Gestão patrimonial e alocação de investimentos com visão de longo prazo. Performance consistente, proteção de capital e acesso a oportunidades exclusivas.',
          highlight: 'Retornos acima do mercado'
        }
      },
      numbers: {
        titleP1: 'Construindo o',
        titleHighlight: 'futuro',
        titleP2: 'através de',
        titleHighlight2: 'resultados sólidos',
        p1: 'Nossos números refletem nosso compromisso de longo prazo com o sucesso de nossos clientes e nossa capacidade de atuar em escala global.',
        yearsDesc: 'Anos de experiência focada em resultados reais',
        clientsDesc: 'Clientes impactados por nossas soluções',
        unitsDesc: 'Unidades de negócio altamente especializadas',
        continentsDesc: 'Continentes com nossa atuação internacional ativada'
      },
      footer: {
        tagline: 'Transformando ideais estratégicos em realidade.',
        units: 'Unidades',
        company: 'Empresa',
        aboutUs: 'Sobre nós',
        history: 'Nossa história',
        careers: 'Trabalhe conosco',
        insights: 'Insights',
        legal: 'Legal',
        privacy: 'Privacidade',
        terms: 'Termos de uso',
        cookies: 'Cookies',
        rights: '© 2025 TSX Group. Todos os direitos reservados.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        units: 'Units',
        insights: 'Insights',
        contact: 'Contact',
        cta: 'Contact Us',
      },
      hero: {
        label: 'TSX Group · Since 1994',
        headlineP1: 'Transforming',
        headlineHighlight: 'strategic ideals',
        headlineP2: 'into reality.',
        subheadline: 'Multidisciplinary group with over 30 years of history, uniting expertise in Advisory, Engineering, International and Investments to transform complex businesses into concrete results.',
        ctaPrimary: 'Discover the Group',
        ctaOutline: 'Our History',
        scroll: 'Scroll',
        stats: {
          years: 'years of history',
          units: 'business units',
          global: 'worldwide presence',
        }
      },
      about: {
        titleP1: 'A group built',
        titleP2: 'for',
        titleHighlight: 'real results',
        p1: 'TSX Group was founded in 1994 with a simple conviction: complex companies deserve equally sophisticated solutions. Over three decades, we have built an ecosystem of four complementary units capable of seamlessly solving our clients\' most critical challenges.',
        p2: 'More than consultants, we are strategic partners with skin in the game — aligning interests, making commitments, and delivering measurable results.',
        cta: 'Meet our units'
      },
      units: {
        label: 'Our Units',
        more: 'Learn more',
        advisors: {
          tag: 'Strategic & Tax Advisory',
          desc: 'High-level consulting on tax planning, corporate restructuring, and financial advisory. 30 years building structures that protect wealth and maximize results.',
          highlight: '30 years of tax structuring'
        },
        engineering: {
          tag: 'Engineering & Projects',
          desc: 'Integrated engineering solutions for complex infrastructure projects. From concept to delivery, with technical rigor and cutting-edge management.',
          highlight: 'Large scale projects'
        },
        international: {
          tag: 'Global Expansion',
          desc: 'Structuring of international operations, incorporation of companies abroad, and cross-border tax advisory. Active presence in 3 continents.',
          highlight: 'Presence in 3 continents'
        },
        invest: {
          tag: 'Wealth Management',
          desc: 'Wealth management and asset allocation with a long-term vision. Consistent performance, capital protection, and access to exclusive opportunities.',
          highlight: 'Above-market returns'
        }
      },
      numbers: {
        titleP1: 'Building the',
        titleHighlight: 'future',
        titleP2: 'through',
        titleHighlight2: 'solid results',
        p1: 'Our numbers reflect our long-term commitment to our clients\' success and our ability to act on a global scale.',
        yearsDesc: 'Years of experience focused on real results',
        clientsDesc: 'Clients impacted by our solutions',
        unitsDesc: 'Highly specialized business units',
        continentsDesc: 'Continents with our active international footprint'
      },
      footer: {
        tagline: 'Transforming strategic ideals into reality.',
        units: 'Units',
        company: 'Company',
        aboutUs: 'About us',
        history: 'Our history',
        careers: 'Careers',
        insights: 'Insights',
        legal: 'Legal',
        privacy: 'Privacy',
        terms: 'Terms of use',
        cookies: 'Cookies',
        rights: '© 2025 TSX Group. All rights reserved.'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // idioma padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false // React já escapa XSS
    }
  })

export default i18n
