import type { Localized } from '@/i18n/helpers'

export interface Education {
  institution: Localized
  course: Localized
  period: Localized
  subtitle: Localized
  completed: boolean
}

export const academicEducation: Education[] = [
  {
    institution: {
      pt: 'FIAP - Faculdade de Administração e Informática Paulista',
      en: 'FIAP - Paulista School of Administration and Informatics',
    },
    course: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
    period: { pt: 'fev/2024 → fev/2026', en: 'Feb/2024 → Feb/2026' },
    completed: true,
    subtitle: {
      pt: 'Formação voltada para desenvolvimento de software, APIs, banco de dados e arquitetura de sistemas, com aprendizado prático baseado em projetos e desafios próximos do mercado.',
      en: 'Education focused on software development, APIs, databases, and system architecture, with hands-on learning based on projects and market-oriented challenges.',
    },
  },
]

export const complementaryEducation: Education[] = [
  {
    institution: { pt: 'Serratec / SENAI', en: 'Serratec / SENAI' },
    course: { pt: 'Residência em TIC/Software', en: 'ICT/Software Residency' },
    period: { pt: 'mar/2024 → jul/2024', en: 'Mar/2024 → Jul/2024' },
    completed: true,
    subtitle: {
      pt: 'Programa intensivo de formação full stack com foco em aplicações modernas, APIs RESTful, banco de dados e boas práticas de desenvolvimento, aliado a mentorias, inglês técnico e preparação para o mercado.',
      en: 'Intensive full stack training program focused on modern applications, RESTful APIs, databases, and development best practices, combined with mentoring, technical English, and market preparation.',
    },
  },
]
