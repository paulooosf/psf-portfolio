export interface Education {
  institution: string
  course: string
  period: string
  subtitle?: string
  completed?: boolean
}

export const academicEducation: Education[] = [
  {
    institution: 'FIAP - Faculdade de Administração e Informática Paulista',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: 'fev/2024 → fev/2026',
    completed: true,
    subtitle:
      'Formação voltada para desenvolvimento de software, APIs, banco de dados e arquitetura de sistemas, com aprendizado prático baseado em projetos e desafios próximos do mercado.',
  },
]

export const complementaryEducation: Education[] = [
  {
    institution: 'Serratec / SENAI',
    course: 'Residência em TIC/Software',
    period: 'mar/2024 → jul/2024',
    completed: true,
    subtitle:
      'Programa intensivo de formação full stack com foco em aplicações modernas, APIs RESTful, banco de dados e boas práticas de desenvolvimento, aliado a mentorias, inglês técnico e preparação para o mercado.',
  },
]
