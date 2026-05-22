export type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  role: string
  timeline: string
  links?: ExternalLink[]
}

export type Experience = {
  title: string
  company: string
  period: string
  description: string
  links?: ExternalLink[]
}

export type ExternalLink = {
  label: string
  href: string
  icon?: string
}
