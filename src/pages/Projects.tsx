import { motion } from 'framer-motion';

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
        Here are some of my recent works showcasing my development
        experience, creativity, and problem-solving skills.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-semibold text-blue-700">
            Project One
          </h3>
          <p className="text-gray-600 mt-2">
            A brief description of the first project goes here. You can
            explain what technologies you used and what problems it
            solves.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-3 inline-block"
          >
            View Project →
          </a>
        </div>

        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
          <h3 className="text-xl font-semibold text-blue-700">
            Project Two
          </h3>
          <p className="text-gray-600 mt-2">
            A short summary of another project. Mention tools,
            frameworks, or APIs you worked with to showcase your
            experience.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-3 inline-block"
          >
            View Project →
          </a>
        </div>
      </div>
    </motion.section>
  );
}