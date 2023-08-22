import {
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  sass,
  bootstrap,
  nextjs,
  antd,
  golobe,
  topskillDashboard,
  stiTransportation,
  topskill,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'SCSS',
    icon: sass,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  // {
  //   name: 'Ant Design',
  //   icon: antd,
  // },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
 
  {
    name: 'git',
    icon: git,
  },
 
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Topskill',
    icon: topskill,
    iconBg: '#333333',
    date: 'Apr 2023 - Aug 2023',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'Traveling Golobe',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: golobe,
    repo: 'https://github.com/ZafarNorkulov/Traveling.git',
    demo: 'https://traveling-chi.vercel.app',
  },
  {
    id: 'project-2',
    name: 'Topskill',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'Next JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'React Query',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: topskillDashboard,
    repo: 'https://github.com/TopskillUz/topskill-site.git',
    demo: 'https://topskill.uz',
  },
  {
    id: 'project-3',
    name: 'STI Transportition',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'vitejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: stiTransportation,
    repo: 'https://github.com/ZafarNorkulov/STI-Full.git',
    demo: 'https://sti-full.vercel.app',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
