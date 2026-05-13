import type { Project, Experience } from '../types'

export const projects: Project[] = [
  {
    id: 'project-01',
    title: 'Tidewatch Analytics',
    description:
      'A dashboard concept for monitoring shipping patterns, weather windows, and route risk in one cinematic control panel.',
    stack: ['React', 'TypeScript', 'REST API'],
    role: 'Frontend Developer',
    timeline: '2026',
  },
  {
    id: 'project-02',
    title: 'Beacon Habit Studio',
    description:
      'A behavior tracker with narrative progress views, ritual streaks, and reflective checkpoints for weekly planning.',
    stack: ['React', 'Vite', 'CSS Motion'],
    role: 'Product Engineer',
    timeline: '2026',
  },
  {
    id: 'project-03',
    title: 'Harbor Commerce UI',
    description:
      'An ecommerce storefront prototype focused on visual hierarchy, modular cards, and high-conversion checkout flow.',
    stack: ['TypeScript', 'State Management', 'Design Systems'],
    role: 'UI Engineer',
    timeline: '2025',
  },
  {
    id: 'project-04',
    title: 'Atlas Teamboard',
    description:
      'A collaboration workspace for sprint planning with timeline maps, ownership overlays, and fast keyboard actions.',
    stack: ['React', 'Component Architecture', 'Accessibility'],
    role: 'Software Engineer',
    timeline: '2025',
  },
  {
    id: 'project-05',
    title: 'Cinder Event Hub',
    description:
      'A live events microsite platform with flexible templates, sponsor zones, and content-driven visual storytelling.',
    stack: ['Vite', 'Responsive Layouts', 'Animation'],
    role: 'Frontend Engineer',
    timeline: '2024',
  },
  {
    id: 'project-06',
    title: 'Northwind Portfolio CMS',
    description:
      'A portfolio management tool to curate case studies, edit media-rich pages, and publish showcase-ready content.',
    stack: ['TypeScript', 'Forms', 'Content Modeling'],
    role: 'Full Stack Developer',
    timeline: '2024',
  },
]

export const experiences: Experience[] = [
  {
    title: 'Full Stack Engineer',
    company: 'GCI, Inc.',
    period: 'June-Oct 2025',
    description:
      'Worked on a small team for the Alaskan telecomms company GCI on their FastFone site. Though my time there was short I gained a decent understanding of in Ruby on Rails. My focus was mainly fixing unhandled errors in production code, and learning how to interact with their infrastructure.',
  },
  {
    title: 'QA Automation Engineer',
    company: 'Intel',
    period: '2021 - 2025',
    description:
      'Implemented component systems, refined accessibility patterns, and improved handoff quality between design and engineering.',
  },
  {
    title: 'Junior Web Developer',
    company: 'Nova Collective',
    period: '2021 - 2022',
    description:
      'Delivered responsive marketing pages and early product prototypes while learning modern JavaScript and UI architecture.',
  },
]
