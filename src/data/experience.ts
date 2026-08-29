export interface ExperienceItem {
  period: string
  company: string
  location?: string
  role: string
  description: string | string[]
}

export const experiences: ExperienceItem[] = [
  {
    period: 'Apr 2025 - Present',
    company: 'UHN, KITE Research Institute',
    location: 'Toronto, ON',
    role: 'Web Platform Developer',
    description: [
      'Took end-to-end ownership of a full-stack cognitive training platform for clinical research, initially leading a 4-person development team and now independently driving development, testing, and iterative improvement.',
      'Led front-end and UI/UX development using React, Next.js, TypeScript, Tailwind CSS, Google Maps APIs, Zustand, and a Figma design system with 30+ reusable components to support complex application workflows.',
      'Managed back-end infrastructure and REST API integrations using Supabase, PostgreSQL, and authentication services, supporting user accounts, session logs, application state, and research data.',
      'Deployed and maintained the Next.js application on Microsoft Azure App Service in a Node.js runtime environment, using GitHub Actions CI/CD pipelines to automate builds and deployments from the main branch.',
      'Performed functional, workflow, regression, and post-deployment testing, debugging application issues and validating fixes across end-to-end user workflows before release.',
      'Worked in an Agile, iterative development environment, collaborating through GitHub with developers and cross-functional stakeholders.',
    ],
  },
  {
    period: 'Oct 2025 - Jan 2026',
    company: 'Spirit of Math Schools Inc.',
    location: 'North York, ON',
    role: 'Grade 5-6 Math Teacher',
    description: [
      'Maintained accurate attendance, grades, and student records using online academic systems while handling confidential student information.',
      'Supported the organization and administration of exams and academic activities, coordinating with the Campus Principal and other staff.',
      'Prepared and assessed assignments and course materials, maintained weekly lesson plans, and completed academic documentation within established deadlines.',
      'Communicated with students, parents, and staff regarding academic progress and administrative matters, escalating concerns when appropriate.',
    ],
  },
  {
    period: 'Jan 2025 - Apr 2025',
    company: 'University of Toronto',
    location: 'Toronto, ON',
    role: 'Sleep Laboratory Data Analysis Project',
    description: [
      'Processed and analyzed sleep laboratory data from 63 patients using Python, pandas, NumPy, matplotlib, and Seaborn, performing missing-value handling, correlation analysis, outlier detection, and data visualization across physiological and questionnaire-derived features.',
      'Built a data preprocessing and bootstrapping pipeline to prepare model features and generate balanced training and test datasets for binary sleep quality classification.',
      'Developed and evaluated a logistic regression model for machine learning classification, achieving approximately 80% test accuracy in predicting sleep quality from nine physiological and questionnaire-derived features.',
    ],
  },
  {
    period: 'Jan 2025 - Apr 2025',
    company: 'University of Toronto',
    location: 'Toronto, ON',
    role: 'EndoGuard Pro - Implantable Insulin Pump System Design',
    description: [
      'Coordinated project planning within a 5-person team, defining system requirements, tracking deliverables, and aligning design tasks through weekly team meetings.',
      'Translated product requirements into technical specifications for sensing, delivery, and monitoring components, while identifying system risks and developing mitigation strategies.',
      'Produced 9 structured technical documents, including requirements traceability and risk control matrices, supporting project planning, design decisions, and execution.',
    ],
  },
]
