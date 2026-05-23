export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
  chips: string[]
}

export interface Experience {
  company: string
  roles: ExperienceItem[]
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
