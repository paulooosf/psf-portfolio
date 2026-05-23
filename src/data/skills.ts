export interface SkillCategory {
  name: string
  color: string
  spotlightColor: string
  borderColor: string
  skills: string[]
}

export interface StudyingItem {
  name: string
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    color: 'text-emerald-400',
    spotlightColor: 'rgba(52, 211, 153, 0.45)',
    borderColor: 'rgba(52, 211, 153, 0.35)',
    skills: [
      'Java',
      'Spring Boot',
      'JAX-RS',
      'JPA',
      'Hibernate',
      'Spring Security',
      'JWT',
      'OAuth2',
    ],
  },
  {
    name: 'Arquitetura',
    color: 'text-fuchsia-400',
    spotlightColor: 'rgba(232, 121, 249, 0.45)',
    borderColor: 'rgba(232, 121, 249, 0.35)',
    skills: ['DDD', 'SOLID', 'Clean Architecture', 'Event-driven', 'Microsserviços'],
  },
  {
    name: 'Banco de Dados',
    color: 'text-amber-400',
    spotlightColor: 'rgba(251, 191, 36, 0.45)',
    borderColor: 'rgba(251, 191, 36, 0.35)',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'SQL Server'],
  },
  {
    name: 'DevOps / Cloud',
    color: 'text-violet-400',
    spotlightColor: 'rgba(167, 139, 250, 0.45)',
    borderColor: 'rgba(167, 139, 250, 0.35)',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'AWS', 'EC2', 'IAM'],
  },
  {
    name: 'Frontend',
    color: 'text-sky-400',
    spotlightColor: 'rgba(56, 189, 248, 0.45)',
    borderColor: 'rgba(56, 189, 248, 0.35)',
    skills: ['Vue', 'React', 'TypeScript', 'JavaScript'],
  },
]

export const studyingItems: StudyingItem[] = [
  { name: 'AWS' },
  { name: 'CI/CD' },
  { name: 'Observabilidade' },
  { name: 'Testes de Integração' },
  { name: 'Kubernetes' },
]
