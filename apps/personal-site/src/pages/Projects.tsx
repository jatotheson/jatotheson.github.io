import { motion } from 'framer-motion';

const projects = [
  {
    title: 'LaunchPad',
    summary:
      'A guided experimentation coach that watches time, energy, and context before suggesting the next micro-challenge. Built as an independent Vite + React experience with its own deployment pipeline.',
    tech: 'React · Typescript · UnoCSS · Supabase Edge',
    href: '/projects/showcase-project/',
  },
  {
    title: 'Personal Site',
    summary:
      'This page you are reading. Motion-powered sections, Tailwind styling, and a dynamic color system that animates with scroll and interaction.',
    tech: 'React · Tailwind · Framer Motion',
    href: '/',
  },
];

export default function ProjectsPage() {
  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="mt-16 space-y-12"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="text-5xl font-semibold mb-4 text-center">
        Personal Projects
      </h2>
      <p className="text-gray-700 mb-6">
        Independent experiments I am building outside of my main portfolio application.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-xl p-6 shadow hover:shadow-xl transition bg-white">
            <h3 className="text-xl font-semibold text-blue-700">{project.title}</h3>
            <p className="text-gray-600 mt-3">{project.summary}</p>
            <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">{project.tech}</p>
            <a
              href={project.href}
              className="text-blue-600 hover:underline mt-4 inline-block font-medium"
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
