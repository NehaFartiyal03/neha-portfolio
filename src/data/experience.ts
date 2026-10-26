import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'enigoal',
    company: 'ENIGOAL Startup Advisory Private Limited',
    role: 'Web Developer',
    location: 'Noida',
    period: 'Jan 2026 – Present',
    start: '2026-01-01',
    current: true,
    responsibilities: [
      'Frontend development for client and internal web applications.',
      'Responsive website development ensuring cross-device compatibility.',
      'UI implementation with clean typography, intuitive layouts, and modern aesthetics.',
      'Website improvements and optimization for enhanced user experience.',
      'Working with modern web technologies including React, TypeScript, and Tailwind CSS.'
    ]
  },
  {
    id: 'corizo',
    company: 'Corizo Edutech',
    role: 'Web Development Intern',
    location: 'Remote',
    period: 'May 2025 – June 2025',
    current: false,
    responsibilities: [
      'Built responsive webpages and dynamic web applications using HTML, CSS, and JavaScript.',
      'Worked on a mini CRUD project with backend connectivity using Node.js and MongoDB.',
      'Improved practical knowledge of full-stack development and RESTful API integration.'
    ]
  }
];
