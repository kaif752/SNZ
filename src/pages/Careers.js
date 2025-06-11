import React from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
    description: "React.js, Tailwind CSS, REST APIs",
  },
  {
    title: "Backend Developer",
    location: "Bangalore, India",
    type: "Full-Time",
    description: "Node.js, MongoDB, Microservices",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description: "Figma, Design Systems, Prototyping",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition duration-300 pt-16 sm:pt-20">
      
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="text-center py-16 px-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">We're Hiring!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Build your future with a team driven by purpose, creativity, and innovation.
        </p>
      </motion.section>

      {/* Jobs */}
      <section className="py-16 px-4 md:px-12 lg:px-24">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12"
        >
          Open Positions
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {job.type} • {job.location}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
              <button className="mt-4 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500 transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.footer
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-indigo-900 dark:bg-gray-950 text-white text-center py-12"
      >
        <h3 className="text-2xl font-semibold mb-2">Excited to work with us?</h3>
        <p className="mb-4 text-indigo-100 dark:text-gray-300">
          Be part of a culture where you're valued and your work makes an impact.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-100 transition">
          View All Openings
        </button>
      </motion.footer>
    </div>
  );
};

export default CareersPage;
