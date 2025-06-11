import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import {
  Cpu,
  Bot,
  BrainCog,
  Atom,
  CircleDashed,
  BookOpenCheck,
  Code2,
  ScanEye,
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

// Topics for AI & Machine Learning
const topics = [
  {
    icon: Cpu,
    colorClass: 'purple-600',
    title: 'Neural Networks',
    desc: 'Build multi-layered models to simulate human brain functionality.',
  },
  {
    icon: Bot,
    colorClass: 'blue-600',
    title: 'AI Automation',
    desc: 'Design systems that mimic intelligent behavior and automate tasks.',
  },
  {
    icon: BrainCog,
    colorClass: 'green-600',
    title: 'Deep Learning',
    desc: 'Leverage large datasets for high-performance learning models.',
  },
  {
    icon: Atom,
    colorClass: 'red-600',
    title: 'Natural Language Processing',
    desc: 'Enable machines to understand, interpret, and generate human language.',
  },
  {
    icon: CircleDashed,
    colorClass: 'yellow-600',
    title: 'Computer Vision',
    desc: 'Train machines to analyze and interpret visual information.',
  },
  {
    icon: BookOpenCheck,
    colorClass: 'indigo-600',
    title: 'Reinforcement Learning',
    desc: 'Use reward-based systems to help agents make optimal decisions.',
  },
  {
    icon: Code2,
    colorClass: 'pink-600',
    title: 'Model Deployment',
    desc: 'Integrate trained models into live systems and applications.',
  },
  {
    icon: ScanEye,
    colorClass: 'cyan-600',
    title: 'AI Ethics',
    desc: 'Explore fairness, transparency, and accountability in intelligent systems.',
  },
];

const AIMLPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <motion.section
        className="text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white py-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 dark:text-white mb-4 leading-tight">
          Master Artificial Intelligence & Machine Learning
        </h1>
        <p className="text-gray-300 dark:text-gray-200 text-base sm:text-lg max-w-3xl mx-auto">
          Dive into the future of technology. Learn how intelligent systems are built, trained, and used to revolutionize industries—from healthcare to finance and beyond.
        </p>
      </motion.section>

      {/* Cards Section */}
      <motion.section
        className="max-w-7xl mt-10 mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        variants={containerStagger}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-center"
          variants={fadeUp}
        >
          Core Areas of AI & Machine Learning
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {topics.map(({ icon: Icon, colorClass, title, desc }, index) => {
            const hoverBorder = `hover:border-${colorClass}`;
            const textColor = `text-${colorClass}`;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={clsx(
                  'bg-white dark:bg-gray-800 border-2 border-transparent rounded-xl shadow-md p-6 text-center cursor-pointer',
                  'transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg',
                  hoverBorder
                )}
              >
                <div className={clsx('mb-3 flex justify-center', textColor)}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Details Section */}
      <motion.section
        className="max-w-5xl mb-10 mx-auto text-center px-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Why Learn AI & Machine Learning?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 max-w-3xl mx-auto">
          AI & Machine Learning are transforming the world, enabling smarter software, automation, and human-like interaction. Equip yourself with the tools to lead the next tech revolution.
        </p>
        <ul className="text-left list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2 text-sm sm:text-base max-w-2xl mx-auto">
          <li>In-demand skills for the fastest-growing tech careers</li>
          <li>Drive innovation with automation and intelligent systems</li>
          <li>Develop cutting-edge applications in vision, language, and robotics</li>
          <li>Shape the future with ethical and responsible AI</li>
        </ul>
      </motion.section>
    </main>
  );
};

export default AIMLPage;
