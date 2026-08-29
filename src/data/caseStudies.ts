export interface CaseStudyTextBlock {
  label?: string
  title?: string
  body?: string | string[]
  image?: string
}

export interface CaseStudySection {
  sectionLabel: string
  title: string[]
  lead?: string
  body?: string[]
  bodyStyle?: 'body' | 'lead'
  blocks?: CaseStudyTextBlock[]
  tags?: string[]
}

export const uhnCaseStudy = {
  backLabel: 'Back to work',
  sectionLabel: 'UHN · KITE Research Institute',
  title: [
    { text: 'Digital Cognitive' },
    { text: 'Rehabilitation', accent: true },
    { text: 'Platform' },
  ],
  tags: ['Full-Stack Development', 'UI/UX Design', 'Digital Health'],
  intro:
    'A digital health platform supporting remotely delivered spatial navigation training and cognitive intervention research through structured, interactive virtual navigation tasks.',
  website: {
    label: 'View Live Platform',
    href: 'https://spatialnavigation-a4cvh0abfqerd3b5.canadacentral-01.azurewebsites.net',
  },
  sections: [
    {
      sectionLabel: '01 — OVERVIEW',
      title: ['About the', 'Project'],
      body: [
        'Spatial Navigation is a remotely delivered, self-administered digital intervention designed to support memory and stimulate hippocampal function through structured navigation tasks.',
        'The intervention uses allocentric spatial navigation, encouraging participants to build mental maps from landmarks and spatial relationships rather than relying on step-by-step directions. The platform supports research involving individuals with traumatic brain injury, multiple sclerosis, and older adults.',
      ],
      bodyStyle: 'lead',
    },
    {
      sectionLabel: '02 — Spatial Training',
      title: ['How It', 'Works'],
      lead:
        'Participants complete a structured 17-week intervention across a series of virtual cities. Using maps and Google Street View, they learn routes, landmarks, and street layouts before completing activities that assess their understanding of the environment from different perspectives.',
      blocks: [
        {
          title: 'Route Learning',
          body:
            'Participants navigate through virtual environments using Google Street View, learning routes, streets, and landmarks along the way.',
          image: '/uhn/RouteLearning.JPG',
        },
        {
          title: 'Spatial Direction',
          body:
            "Participants determine the relative direction of landmarks and streets from a bird’s-eye perspective using an interactive compass.",
          image: '/uhn/SpatialDirection.JPG',
        },
        {
          title: 'Cognitive Mapping',
          body:
            'Participants reconstruct their understanding of each city by identifying landmark and street locations and describing routes between places from memory.',
          image: '/uhn/CognitiveMapping.JPG',
        },
        {
          title: 'Spatial Memory Questions',
          body:
            "Multiple-choice questions assess participants’ knowledge of landmarks, routes, and spatial relationships within each virtual city.",
          image: '/uhn/SpatialMemoryQuestions.JPG',
        },
      ],
    },
    {
      sectionLabel: '03 — Research Administration',
      title: ['Behind the Research'],
      lead:
        'The platform also includes researcher-facing tools for managing participants and monitoring the intervention.',
      body: [
        'The administrative experience brings participant progress, study status, analytics, and data management into one place, giving the research team a centralized view of the intervention and reducing the amount of manual coordination required to run the study.',
      ],
      bodyStyle: 'lead',
      blocks: [
        {
          title: 'Participant Management',
          body:
            'View and manage participants, monitor enrollment and status, and track completion progress at a glance.',
          image: '/uhn/ParticipantManagement.JPG',
        },
        {
          title: 'Participant Information',
          body:
            'Access individual participant details, including enrollment dates, level, status, and study records.',
          image: '/uhn/ParticipantInformation.JPG',
        },
        {
          title: 'Progress Tracking',
          body:
            'Monitor intervention progress over time, including completed days, weekly activity, and key summary metrics.',
          image: '/uhn/ProgressTracking.JPG',
        },
        {
          title: 'Performance Analytics',
          body:
            'Review accuracy trends across weeks and task types to understand participant performance throughout the intervention.',
          image: '/uhn/PerformanceAnalytics.JPG',
        },
      ],
    },
  ] satisfies CaseStudySection[],
  role: {
    sectionLabel: '04 — My Role',
    title: ['Development &', 'Delivery'],
    lead:
      'My work on Spatial Navigation spans the full development lifecycle, from translating research requirements into product features to implementation, testing, and deployment.',
    blocks: [
      {
        title: 'Product & UI/UX Design',
        body:
          'Designed the end-to-end participant and researcher-facing experience in Figma, creating clear digital workflows and a reusable component system across the platform.',
      },
      {
        title: 'Front-End Development',
        body:
          'Built the participant and researcher-facing interfaces using Next.js, React, TypeScript, and Tailwind CSS, including interactive navigation experiences powered by Google Maps and Street View.',
      },
      {
        title: 'Back-End & Data',
        body:
          'Used Supabase and PostgreSQL to support authentication, participant records, intervention data, and application state across the study.',
      },
      {
        title: 'Testing & Iteration',
        body:
          'Worked with researchers and testers to validate study flows, reproduce issues, implement fixes, and regression-test updates as the intervention evolved.',
      },
      {
        title: 'Deployment',
        body:
          'Deployed the application on Microsoft Azure and maintained a GitHub Actions CI/CD workflow for ongoing releases and internal testing.',
      },
    ],
    tags: [
      'Figma',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Google Maps',
      'Azure',
      'GitHub Actions',
    ],
  } satisfies CaseStudySection,
}
