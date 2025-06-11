import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import {
  Megaphone,
  TrendingUp,
  Globe,
  Users,
  BarChart,
  Brush,
  Mail,
  MonitorSmartphone,
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

const topics = [
  {
    icon: Megaphone,
    colorClass: 'blue-600',
    title: 'Social Media Marketing',
    desc: 'Promote brands and engage with customers on social platforms.',
  },
  {
    icon: TrendingUp,
    colorClass: 'green-600',
    title: 'SEO Optimization',
    desc: 'Improve search engine visibility and drive organic traffic.',
  },
  {
    icon: Globe,
    colorClass: 'purple-600',
    title: 'Content Marketing',
    desc: 'Create and share valuable content to attract audiences.',
  },
  {
    icon: Users,
    colorClass: 'red-600',
    title: 'Influencer Marketing',
    desc: 'Leverage social influencers to expand reach and credibility.',
  },
  {
    icon: BarChart,
    colorClass: 'yellow-600',
    title: 'Analytics & Data',
    desc: 'Track performance and make data-driven decisions.',
  },
  {
    icon: Brush,
    colorClass: 'indigo-600',
    title: 'Brand Strategy',
    desc: 'Craft brand identity and maintain consistent messaging.',
  },
  {
    icon: Mail,
    colorClass: 'pink-600',
    title: 'Email Campaigns',
    desc: 'Build relationships and drive conversions through email.',
  },
  {
    icon: MonitorSmartphone,
    colorClass: 'cyan-600',
    title: 'Mobile Marketing',
    desc: 'Reach users via mobile devices with targeted ads and apps.',
  },
];

const DigitalMarketingPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-[#0a0a0a] min-h-screen pt-16 sm:pt-20 transition-colors duration-500">
      {/* Hero Section */}
      <motion.section
        className="text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-4 leading-tight">
          Master Digital Marketing Skills
        </h1>
        <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto">
          Explore tools and strategies to grow brands online. Learn how to reach audiences, boost visibility, and convert users through data-driven digital campaigns.
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
          className="text-2xl sm:text-3xl mt-10 font-semibold text-gray-800 dark:text-white mb-8 text-center"
          variants={fadeUp}
        >
          Core Areas of Digital Marketing
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {topics.map(({ icon: Icon, colorClass, title, desc }, index) => {
            const hoverBorderClass = `hover:border-${colorClass}`;
            const textColorClass = `text-${colorClass}`;

            return (
              <motion.div
                key={index}
                className={clsx(
                  "bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center cursor-pointer border-2 border-transparent hover:shadow-lg hover:scale-[1.03] transition-all duration-300",
                  hoverBorderClass
                )}
                variants={fadeUp}
              >
                <div className={clsx("mb-3 flex justify-center", textColorClass)}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Details Section */}
      <motion.section
        className="max-w-5xl mx-auto text-center px-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Why Learn Digital Marketing?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 max-w-3xl mx-auto">
          Digital marketing is essential for businesses to succeed in the online world. With the right skills, you can create campaigns that reach millions and deliver measurable impact.
        </p>
        <ul className="text-left list-disc pl-6 text-gray-700 dark:text-gray-400 space-y-2 text-sm sm:text-base max-w-2xl mx-auto">
          <li>High-demand career paths with growing opportunities</li>
          <li>Master tools like SEO, analytics, social ads, and email</li>
          <li>Build strategies that generate real-world business results</li>
          <li>Stay ahead in a rapidly evolving digital landscape</li>
        </ul>
      </motion.section>
    </main>
  );
};

export default DigitalMarketingPage;
