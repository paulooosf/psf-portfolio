import type { Localized } from '@/i18n/helpers'

export interface SkillCategory {
  name: Localized
  color: string
  spotlightColor: string
  borderColor: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: { pt: 'Backend', en: 'Backend' },
    color: 'text-emerald-400',
    spotlightColor: 'rgba(52, 211, 153, 0.45)',
    borderColor: 'rgba(52, 211, 153, 0.35)',
    skills: ['Java', 'Spring Boot', 'JAX-RS', 'JPA', 'Hibernate', 'Spring Security', 'JWT', 'OAuth2'],
  },
  {
    name: { pt: 'Arquitetura', en: 'Architecture' },
    color: 'text-fuchsia-400',
    spotlightColor: 'rgba(232, 121, 249, 0.45)',
    borderColor: 'rgba(232, 121, 249, 0.35)',
    skills: ['DDD', 'SOLID', 'Clean Architecture', 'Event-driven', 'Microsserviços'],
  },
  {
    name: { pt: 'Banco de Dados', en: 'Database' },
    color: 'text-amber-400',
    spotlightColor: 'rgba(251, 191, 36, 0.45)',
    borderColor: 'rgba(251, 191, 36, 0.35)',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'SQL Server'],
  },
  {
    name: { pt: 'DevOps / Cloud', en: 'DevOps / Cloud' },
    color: 'text-violet-400',
    spotlightColor: 'rgba(167, 139, 250, 0.45)',
    borderColor: 'rgba(167, 139, 250, 0.35)',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'AWS', 'EC2', 'IAM'],
  },
  {
    name: { pt: 'Frontend', en: 'Frontend' },
    color: 'text-sky-400',
    spotlightColor: 'rgba(56, 189, 248, 0.45)',
    borderColor: 'rgba(56, 189, 248, 0.35)',
    skills: ['Vue', 'React', 'TypeScript', 'JavaScript'],
  },
]

export const studyingItems: Localized<string[]> = {
  pt: ['AWS', 'CI/CD', 'Observabilidade', 'Testes de Integração', 'Kubernetes'],
  en: ['AWS', 'CI/CD', 'Observability', 'Integration Testing', 'Kubernetes'],
}
