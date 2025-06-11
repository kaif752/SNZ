import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import {
  BarChart3,
  Brain,
  Database,
  ActivitySquare,
  Layers3,
  SearchCode,
  PieChart,
  FileText,
} from 'lucide-react';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Topics data
const topics = [
  {
    icon: BarChart3,
    colorClass: 'blue-600',
    title: 'Data Visualization',
    desc: 'Transform complex data into clear, interactive visual representations.',
  },
  {
    icon: Brain,
    colorClass: 'purple-600',
    title: 'Machine Learning',
    desc: 'Build intelligent models that learn from data and make predictions.',
  },
  {
    icon: Database,
    colorClass: 'green-600',
    title: 'Data Management',
    desc: 'Organize, store, and retrieve structured and unstructured datasets.',
  },
  {
    icon: ActivitySquare,
    colorClass: 'red-600',
    title: 'Predictive Analytics',
    desc: 'Forecast outcomes based on historical trends and real-time data.',
  },
  {
    icon: Layers3,
    colorClass: 'yellow-600',
    title: 'Big Data Processing',
    desc: 'Work with large-scale distributed systems to handle vast amounts of data.',
  },
  {
    icon: SearchCode,
    colorClass: 'indigo-600',
    title: 'Data Mining',
    desc: 'Discover patterns and relationships hidden in large datasets.',
  },
  {
    icon: PieChart,
    colorClass: 'pink-600',
    title: 'Statistical Modeling',
    desc: 'Apply statistical methods to understand and interpret data behavior.',
  },
  {
    icon: FileText,
    colorClass: 'cyan-600',
    title: 'Report Automation',
    desc: 'Generate real-time business reports and dashboards efficiently.',
  },
];

const DataScience = () => {
  return (
    <main className="bg-gray-100 dark:bg-[#0a0a0a] pt-16 sm:pt-20 min-h-screen text-gray-800 dark:text-white">
      {/* Hero Section */}
      <motion.section
        className="text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl">Explore the World of Data Science</h1>
        <p className="text-gray-100 text-base sm:text-lg max-w-3xl mx-auto">
          Data Science empowers organizations to make better decisions through insights derived from data. Learn how analytics, AI, and data engineering work together to drive innovation.
        </p>
      </motion.section>

      {/* Cards Section */}
      <motion.section
        className="max-w-7xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        variants={containerStagger}
      >
        <motion.h2
          className="text-2xl sm:text-3xl mt-10 font-semibold mb-8 text-center"
          variants={fadeUp}
        >
          Core Areas of Data Science
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topics.map(({ icon: Icon, colorClass, title, desc }, index) => {
            const hoverBorderClass = {
              'blue-600': 'hover:border-blue-600',
              'purple-600': 'hover:border-purple-600',
              'green-600': 'hover:border-green-600',
              'red-600': 'hover:border-red-600',
              'yellow-600': 'hover:border-yellow-600',
              'indigo-600': 'hover:border-indigo-600',
              'pink-600': 'hover:border-pink-600',
              'cyan-600': 'hover:border-cyan-600',
            }[colorClass];

            const textColorClass = {
              'blue-600': 'text-blue-600',
              'purple-600': 'text-purple-600',
              'green-600': 'text-green-600',
              'red-600': 'text-red-600',
              'yellow-600': 'text-yellow-600',
              'indigo-600': 'text-indigo-600',
              'pink-600': 'text-pink-600',
              'cyan-600': 'text-cyan-600',
            }[colorClass];

            return (
              <motion.div
                key={index}
                className={clsx(
                  "bg-white dark:bg-[#121212] rounded-xl shadow-md p-6 text-center cursor-pointer border-2 border-transparent hover:shadow-lg hover:scale-[1.03] transition-all duration-300",
                  hoverBorderClass
                )}
                variants={fadeUp}
              >
                <div className={clsx("mb-3 flex justify-center", textColorClass)}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Details Section */}
      <motion.section
        className="max-w-5xl  mx-auto text-center px-2"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Learn Data Science?</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 max-w-3xl mx-auto">
          With the growing demand for data-driven decision making, data science has become a top skill across industries. Whether you're interested in healthcare, finance, marketing, or technology, understanding data can open countless career paths.
        </p>
        <ul className="text-left list-disc pl-6 text-gray-700 dark:text-gray-400 space-y-2 text-sm sm:text-base max-w-2xl mx-auto">
          <li>High-paying job opportunities in data-related roles</li>
          <li>Essential skills for AI and automation development</li>
          <li>Improved business strategies and product decisions</li>
          <li>Tools to analyze consumer behavior and market trends</li>
        </ul>
      </motion.section>
    </main>
  );
};

export default DataScience;
