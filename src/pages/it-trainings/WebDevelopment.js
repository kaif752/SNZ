import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Smartphone,
  Globe,
  FileCode,
  Database,
  LayoutDashboard,
} from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Front-End Development',
    description:
      'Master the building blocks of the web including HTML5, CSS3, JavaScript, and front-end frameworks like React.',
    hoverBorderColor: 'hover:border-blue-600 dark:hover:border-blue-400',
    iconColorClass: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Server,
    title: 'Back-End Development',
    description:
      'Gain expertise in server-side programming with Node.js, Express.js, and databases such as MySQL and MongoDB.',
    hoverBorderColor: 'hover:border-green-600 dark:hover:border-green-400',
    iconColorClass: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Craft websites that adapt to any screen size using Flexbox, CSS Grid, and media queries.',
    hoverBorderColor: 'hover:border-purple-600 dark:hover:border-purple-400',
    iconColorClass: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: Globe,
    title: 'Deployment & Hosting',
    description:
      'Deploy full-stack applications using Vercel, Netlify, or Render. Manage DNS, domains, and SSL certificates.',
    hoverBorderColor: 'hover:border-indigo-600 dark:hover:border-indigo-400',
    iconColorClass: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    icon: FileCode,
    title: 'Hands-On Projects',
    description:
      'Work on real-world apps like portfolios, blogs, e-commerce sites, and admin dashboards.',
    hoverBorderColor: 'hover:border-pink-600 dark:hover:border-pink-400',
    iconColorClass: 'text-pink-600 dark:text-pink-400',
  },
];

const WebDevelopment = () => {
  return (
    <div className="pt-16 sm:pt-20 bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Web Development</h1>
        <p className="text-base sm:text-lg max-w-3xl mx-auto px-2">
          Explore the complete web development journey—from design to deployment. Our hands-on course teaches you how to build, scale, and launch responsive web applications.
        </p>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 max-w-7xl mx-auto gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ amount: 0.2 }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 text-center transition-all duration-300 hover:scale-[1.05] hover:shadow-xl ${feature.hoverBorderColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ amount: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`${feature.iconColorClass} mb-4 flex justify-center`}
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon size={32} />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.section>

      {/* Front-End Content */}
      <motion.section
        className="mt-16 bg-[#f3f9fd] dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-[#155A8A] dark:text-blue-400 mb-4">Front-End Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2 text-sm sm:text-base">
            <li>Semantic HTML5 and web accessibility.</li>
            <li>CSS3 styling with animations, transitions, Flexbox, and Grid.</li>
            <li>JavaScript ES6+ syntax, DOM manipulation, and event handling.</li>
            <li>React.js fundamentals, hooks, components, and routing.</li>
            <li>Tailwind CSS utility-first design for responsive UIs.</li>
            <li>Third-party libraries like React Router and Axios.</li>
            <li>Form handling, validation, and UI state management.</li>
          </ul>
          <div className="flex justify-center items-center">
            <LayoutDashboard className="text-[#155A8A] dark:text-blue-400" size={80} />
          </div>
        </div>
      </motion.section>

      {/* Back-End Content */}
      <motion.section
        className="mt-12 mb-10 bg-[#f3f9fd] dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-[#155A8A] dark:text-blue-400 mb-4">Back-End Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2 text-sm sm:text-base">
            <li>Node.js runtime, event loop, and package management.</li>
            <li>Express.js for building APIs and routing.</li>
            <li>MongoDB with Mongoose for NoSQL databases.</li>
            <li>MySQL and SQL queries for relational data.</li>
            <li>Authentication with JWT, bcrypt, and sessions.</li>
            <li>Error handling, environment config, and middleware usage.</li>
            <li>Git & GitHub for version control and collaboration.</li>
          </ul>
          <div className="flex justify-center items-center">
            <Database className="text-[#155A8A] dark:text-blue-400" size={80} />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default WebDevelopment;
