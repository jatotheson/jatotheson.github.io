import { COLORS } from '@/constants';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="mt-16 space-y-12"
    >
      <h2 className="text-5xl font-semibold mb-4 text-center">
        Welcome to Jason Chung's Website!
      </h2>

      <section className="space-y-2">
        <h3 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-600 pb-1">
          Introduction & Passion
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Hello! I'm a dedicated developer who loves crafting clean, modern, and
          intuitive user experiences. My passion lies in solving meaningful
          problems through technology and creating digital products that make
          life easier. I believe that great design and strong engineering go
          hand in hand.
        </p>
      </section>

      <section className="space-y-2">
        <h3 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-600 pb-1">
          Skills & Strengths
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Proficient in JavaScript, TypeScript, and React ecosystem</li>
          <li>Experience with Node.js, Express, and RESTful APIs</li>
          <li>Strong understanding of UI/UX principles</li>
          <li>
            Passionate about performance optimization and clean architecture
          </li>
          <li>Collaborative mindset with strong communication skills</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-600 pb-2">
          Contact & Resume
        </h3>
        
        {/* Contact Information */}
        <div 
          className="grid sm:grid-cols-2 gap-4 p-6 rounded-xl border border-blue-200"
          style={{backgroundColor: COLORS.background.default}}
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Email</p>
              <a href="mailto:your.email@example.com" className="text-blue-700 hover:underline">
                jason6858@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Phone</p>
              <a href="tel:+1234567890" className="text-blue-700 hover:underline">
                +1 (909) 455-8257
              </a>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-medium">Resume Preview:</p>
            <a
              href="/TAE KWANG (JASON) CHUNG - TECH RESUME_D.pdf"
              download
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
          <iframe
            src="/TAE KWANG (JASON) CHUNG - TECH RESUME_D.pdf"
            title="Resume Preview"
            className="w-full h-96 border-2 border-gray-300 rounded-xl shadow-lg"
          ></iframe>
        </div>
  </section>

      {/* <div className="h-[200vh] flex items-end justify-center">
        <p className="text-gray-400 mb-10">
          Scroll down to see the background color change
        </p>
      </div> */}
    </motion.div>
  );
}