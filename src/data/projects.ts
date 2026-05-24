export interface GithubLink {
  label: string
  url: string
}

export interface Project {
  title: string
  category: string
  description: string
  chips: string[]
  image: string
  githubLinks: GithubLink[]
  liveUrl?: string
}

export const projectsData: Project[] = [
  {
    title: 'Cometa Marketplace',
    category: 'Microsserviços',
    description:
      'Sistema de e-commerce distribuído utilizando arquitetura de microserviços, comunicação assíncrona com RabbitMQ, service discovery e orquestração via Docker Compose.',
    chips: [
      'Spring Boot',
      'Spring Cloud',
      'RabbitMQ',
      'Docker',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'JasperReports',
    ],
    image: '/images/projetos/cometa-marketplace.png',
    githubLinks: [{ label: 'GitHub', url: 'https://github.com/paulooosf/cometa-marketplace' }],
  },
  {
    title: 'GameboXed',
    category: 'FullStack',
    description:
      'Plataforma full stack de avaliação de jogos com autenticação JWT/OAuth2, sistema de reviews, cache com Redis e integração entre API Spring Boot e interface React.',
    chips: ['Spring Boot', 'React', 'JWT', 'OAuth2', 'Redis', 'PostgreSQL', 'Docker'],
    image: '/images/projetos/gameboxed.png',
    githubLinks: [
      { label: 'Front', url: 'https://github.com/paulooosf/gameboxed-front' },
      { label: 'Back', url: 'https://github.com/paulooosf/gameboxed-back' },
    ],
  },
  {
    title: 'PSF Fitness',
    category: 'Front-end PWA',
    description:
      'PWA para gerenciamento de treinos de musculação com funcionamento offline, persistência local e experiência otimizada para dispositivos móveis.',
    chips: ['Vue', 'TypeScript', 'Vuetify', 'Tailwind', 'PWA'],
    image: '/images/projetos/psf-fitness.png',
    githubLinks: [{ label: 'GitHub', url: 'https://github.com/paulooosf/psf-fitness' }],
    liveUrl: 'https://psf-fitness.vercel.app/',
  },
  {
    title: 'PSF Stock',
    category: 'FullStack',
    description:
      'Sistema full stack de gerenciamento de estoque com autenticação JWT, movimentação de produtos, dashboard administrativo e integração entre API .NET e front-end Angular.',
    chips: ['.NET', 'Angular', 'PostgreSQL', 'JWT', 'Entity Framework', 'Tailwind'],
    image: '/images/projetos/psf-stock.png',
    githubLinks: [
      { label: 'Front', url: 'https://github.com/paulooosf/psf-estoque' },
      { label: 'Back', url: 'https://github.com/paulooosf/psf-estoque-backend' },
    ],
  },
]
