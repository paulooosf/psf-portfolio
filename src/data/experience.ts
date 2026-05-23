export interface ExperienceItem {
  company: string
  companyDescription?: string
  role: string
  period: string
  bullets: string[]
  chips: string[]
}

export interface Experience {
  company: string
  roles: ExperienceItem[]
}

export interface ComplementaryExperienceItem {
  company: string
  companyDescription: string
  role: string
  period: string
  chips: string[]
  bullets: string[]
}

export const experienceData: Experience[] = [
  {
    company: 'Alterdata Software',
    roles: [
      {
        company: 'Alterdata Software',
        role: 'Desenvolvedor Junior',
        period: 'jun/25 → Atual',
        chips: ['Java', 'Vue', 'TypeScript', 'SQL Server', 'JasperReports', 'Scrum'],
        bullets: [
          'Desenvolvimento e manutenção de sistema PCP/WMS para empresas do ramo de Moda;',
          'Implementação de regras de negócio e integrações back-end utilizando Java;',
          'Otimização de queries críticas em SQL Server com foco em performance;',
          'Desenvolvimento de relatórios PDF e documentação técnica para sistema legado.',
        ],
      },
      {
        company: 'Alterdata Software',
        role: 'Trainee',
        period: 'set/24 → jun/25',
        chips: [
          'Vue',
          'Lit',
          'Node.js',
          'MongoDB',
          'Google Cloud',
          'CI/CD',
          'Testes Unitários',
          'Microserviços',
        ],
        bullets: [
          'Desenvolvimento de funcionalidades em arquitetura de micro-frontends e microserviços;',
          'Construção e integração de serviços back-end utilizando Node.js e MongoDB;',
          'Implementação de testes unitários e apoio em pipelines CI/CD;',
          'Participação ativa em ambiente ágil Scrum e alinhamento com stakeholders.',
        ],
      },
    ],
  },
]

export const complementaryExperienceData: ComplementaryExperienceItem[] = [
  {
    company: 'SERRATEC',
    companyDescription:
      'Programa de residência tecnológica com foco em formação acelerada e inserção de profissionais no mercado de tecnologia.',
    role: 'Monitor técnico em Lógica de Programação & APIs RESTful',
    period: '2025 → Atual',
    chips: [
      'Lógica de programação',
      'Portugol',
      'Spring Boot',
      'APIs Rest',
      'Mentoria',
      'Educação',
      'Didática',
    ],
    bullets: [
      'Apoio técnico e acompanhamento de alunos durante a formação prática em desenvolvimento de software;',
      'Revisão e reforço de conteúdos de lógica de programação e APIs RESTful com Spring Boot;',
      'Atuação conjunta com professores na resolução de dúvidas e suporte às atividades técnicas;',
      'Contribuição na formação de novos profissionais em um programa intensivo de tecnologia com foco em empregabilidade.',
    ],
  },
]
