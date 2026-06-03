import type { ExternalLink } from '../types'

export const CONTACT_INFO = {
  email: 'elliot.a.brazier@gmail.com',
  githubUrl: 'https://github.com/snapish',
  linkedinUrl: 'https://www.linkedin.com/in/elliot-brazier',
} as const

export const CONTACT_LINKS: ExternalLink[] = [
  { label: 'Email Me', href: `mailto:${CONTACT_INFO.email}`, icon: '@' },
  { label: 'GitHub', href: CONTACT_INFO.githubUrl, icon: '</>' },
  { label: 'LinkedIn', href: CONTACT_INFO.linkedinUrl, icon: 'in' },
]

export const RESUME_REQUEST_LINKS: ExternalLink[] = [
  { label: 'Request Via Email', href: `mailto:${CONTACT_INFO.email}`, icon: '@' },
  { label: 'Request Via LinkedIn', href: CONTACT_INFO.linkedinUrl, icon: 'in' },
]
