import type { Localized } from '@/i18n/helpers'

export interface ExperienceItem {
  company: string
  role: Localized
  period: Localized
  bullets: Localized<string[]>
  chips: Localized<string[]>
}

export interface Experience {
  company: string
  roles: ExperienceItem[]
}

export interface ComplementaryExperienceItem {
  company: string
  companyDescription: Localized
  role: Localized
  period: Localized
  chips: Localized<string[]>
  bullets: Localized<string[]>
}

export const experienceData: Experience[] = [
  {
    company: 'Alterdata Software',
    roles: [
      {
        company: 'Alterdata Software',
        role: { pt: 'Desenvolvedor Junior', en: 'Junior Developer' },
        period: { pt: 'jun/25 → Atual', en: 'Jun/25 → Present' },
        chips: {
          pt: ['Java', 'Vue', 'TypeScript', 'SQL Server', 'JasperReports', 'Scrum'],
          en: ['Java', 'Vue', 'TypeScript', 'SQL Server', 'JasperReports', 'Scrum'],
        },
        bullets: {
          pt: [
            'Desenvolvimento e manutenção de sistema PCP/WMS para empresas do ramo de Moda;',
            'Implementação de regras de negócio e integrações back-end utilizando Java;',
            'Otimização de queries críticas em SQL Server com foco em performance;',
            'Desenvolvimento de relatórios PDF e documentação técnica para sistema legado.',
          ],
          en: [
            'Development and maintenance of PCP/WMS systems for fashion industry companies;',
            'Implementation of business rules and back-end integrations using Java;',
            'Optimization of critical SQL Server queries with a focus on performance;',
            'Development of PDF reports and technical documentation for legacy systems.',
          ],
        },
      },
      {
        company: 'Alterdata Software',
        role: { pt: 'Trainee', en: 'Trainee' },
        period: { pt: 'set/24 → jun/25', en: 'Sep/24 → Jun/25' },
        chips: {
          pt: ['Vue', 'Lit', 'Node.js', 'MongoDB', 'Google Cloud', 'CI/CD', 'Testes Unitários', 'Microserviços'],
          en: ['Vue', 'Lit', 'Node.js', 'MongoDB', 'Google Cloud', 'CI/CD', 'Unit Testing', 'Microservices'],
        },
        bullets: {
          pt: [
            'Desenvolvimento de funcionalidades em arquitetura de micro-frontends e microserviços;',
            'Construção e integração de serviços back-end utilizando Node.js e MongoDB;',
            'Implementação de testes unitários e apoio em pipelines CI/CD;',
            'Participação ativa em ambiente ágil Scrum e alinhamento com stakeholders.',
          ],
          en: [
            'Development of features in a micro-frontends and microservices architecture;',
            'Building and integrating back-end services using Node.js and MongoDB;',
            'Implementation of unit tests and support in CI/CD pipelines;',
            'Active participation in an agile Scrum environment and alignment with stakeholders.',
          ],
        },
      },
    ],
  },
]

export const complementaryExperienceData: ComplementaryExperienceItem[] = [
  {
    company: 'SERRATEC',
    companyDescription: {
      pt: 'Programa de residência tecnológica com foco em formação acelerada e inserção de profissionais no mercado de tecnologia.',
      en: 'Technology residency program focused on accelerated training and placing professionals in the tech market.',
    },
    role: {
      pt: 'Monitor técnico em Lógica de Programação & APIs RESTful',
      en: 'Technical Mentor in Programming Logic & RESTful APIs',
    },
    period: { pt: '2025 → Atual', en: '2025 → Present' },
    chips: {
      pt: ['Lógica de programação', 'Portugol', 'Spring Boot', 'APIs Rest', 'Mentoria', 'Educação', 'Didática'],
      en: ['Programming Logic', 'Portugol', 'Spring Boot', 'REST APIs', 'Mentoring', 'Education', 'Teaching'],
    },
    bullets: {
      pt: [
        'Apoio técnico e acompanhamento de alunos durante a formação prática em desenvolvimento de software;',
        'Revisão e reforço de conteúdos de lógica de programação e APIs RESTful com Spring Boot;',
        'Atuação conjunta com professores na resolução de dúvidas e suporte às atividades técnicas;',
        'Contribuição na formação de novos profissionais em um programa intensivo de tecnologia com foco em empregabilidade.',
      ],
      en: [
        'Technical support and guidance for students during hands-on software development training;',
        'Review and reinforcement of programming logic and RESTful APIs with Spring Boot;',
        'Collaboration with instructors to resolve questions and support technical activities;',
        'Contribution to training new professionals in an intensive technology program focused on employability.',
      ],
    },
  },
]
