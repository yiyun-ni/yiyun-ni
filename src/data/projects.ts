export interface Project {
  index: string
  year: string
  company: string
  title: string
  description: string
  tags: string[]
  image: string
  route?: string       // internal route — renders a real Link
}

export const projects: Project[] = [
  {
    index: '01',
    year: '2025-2026',
    company: 'UHN · KITE Research Institute',
    title: 'Digital Cognitive Training Platform',
    description:
      'A full-stack digital health platform for clinical research, designed to support structured cognitive training through interactive navigation tasks and end-to-end research workflows.',
    tags: ['Full-Stack Development', 'UI/UX Design', 'Digital Health'],
    image: '/uhn/UHN.JPG',
    route: '/work/uhn',
  },
]
