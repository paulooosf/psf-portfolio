import type { Localized } from '@/i18n/helpers'

export interface GithubLink {
  label: string
  url: string
}

export interface Project {
  title: string
  category: Localized
  description: Localized
  chips: string[]
  image: string
  githubLinks: GithubLink[]
  liveUrl?: string
}

export const projectsData: Project[] = [
  {
    title: 'Cometa Marketplace',
    category: { pt: 'Microsserviços', en: 'Microservices' },
    description: {
      pt: 'Sistema de e-commerce distribuído utilizando arquitetura de microserviços, comunicação assíncrona com RabbitMQ, service discovery e orquestração via Docker Compose.',
      en: 'Distributed e-commerce system using microservices architecture, asynchronous communication with RabbitMQ, service discovery, and orchestration via Docker Compose.',
    },
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
    category: { pt: 'FullStack', en: 'FullStack' },
    description: {
      pt: 'Plataforma full stack de avaliação de jogos com autenticação JWT/OAuth2, sistema de reviews, cache com Redis e pipeline CI/CD com deploy automatizado em AWS EC2 e front-end distribuído via AWS S3 + CloudFront.',
      en: 'Full stack game review platform with JWT/OAuth2 authentication, review system, Redis caching, and CI/CD pipeline with automated deploy to AWS EC2 and front-end distributed via AWS S3 + CloudFront.',
    },
    chips: [
      'Spring Boot',
      'React',
      'JWT',
      'OAuth2',
      'Redis',
      'PostgreSQL',
      'Docker',
      'AWS EC2',
      'AWS S3',
      'CloudFront',
      'CI/CD',
    ],
    image: '/images/projetos/gameboxed.png',
    githubLinks: [
      { label: 'Front', url: 'https://github.com/paulooosf/gameboxed-front' },
      { label: 'Back', url: 'https://github.com/paulooosf/gameboxed-back' },
    ],
  },
  {
    title: 'PSF Fitness',
    category: { pt: 'Front-end PWA', en: 'Front-end PWA' },
    description: {
      pt: 'PWA para gerenciamento de treinos de musculação com funcionamento offline, persistência local e experiência otimizada para dispositivos móveis.',
      en: 'PWA for workout management with offline support, local persistence, and an experience optimized for mobile devices.',
    },
    chips: ['Vue', 'TypeScript', 'Vuetify', 'Tailwind', 'PWA'],
    image: '/images/projetos/psf-fitness.png',
    githubLinks: [{ label: 'GitHub', url: 'https://github.com/paulooosf/psf-fitness' }],
    liveUrl: 'https://psf-fitness.vercel.app/',
  },
  {
    title: 'PSF Stock',
    category: { pt: 'FullStack', en: 'FullStack' },
    description: {
      pt: 'Sistema full stack de gerenciamento de estoque com autenticação JWT, movimentação de produtos, dashboard administrativo e integração entre API .NET e front-end Angular.',
      en: 'Full stack inventory management system with JWT authentication, product movement, admin dashboard, and integration between .NET API and Angular front-end.',
    },
    chips: ['.NET', 'Angular', 'PostgreSQL', 'JWT', 'Entity Framework', 'Tailwind'],
    image: '/images/projetos/psf-stock.png',
    githubLinks: [
      { label: 'Front', url: 'https://github.com/paulooosf/psf-estoque' },
      { label: 'Back', url: 'https://github.com/paulooosf/psf-estoque-backend' },
    ],
  },
  {
    title: 'Scizor Tracker',
    category: { pt: 'Back-end e Cloud', en: 'Back-end & Cloud' },
    description: {
      pt: 'Sistema de rastreamento de bugs com arquitetura event-driven, notificações serverless e deploy completo na AWS com infraestrutura como código.',
      en: 'Bug tracking system with event-driven architecture, serverless notifications, and complete AWS deployment with infrastructure as code.',
    },
    chips: [
      'Spring Boot',
      'Java 17',
      'Apache Kafka',
      'AWS ECS Fargate',
      'Terraform',
      'Lambda',
      'SNS',
      'SQS',
      'Testcontainers',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
      'PostgreSQL',
      'Docker',
      'JWT',
      'LocalStack',
    ],
    image: '/images/projetos/scizor-tracker.png',
    githubLinks: [{ label: 'GitHub', url: 'https://github.com/paulooosf/scizor-tracker' }],
  },
]
