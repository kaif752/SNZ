import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import {
  Server,
  Settings,
  CloudCog,
  Terminal,
  Code,
  Activity,
  GitBranch,
  ShieldCheck,
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
    icon: Server,
    colorClass: 'blue-600',
    title: 'Infrastructure as Code',
    desc: 'Automate infrastructure provisioning with tools like Terraform and CloudFormation.',
  },
  {
    icon: Settings,
    colorClass: 'green-600',
    title: 'CI/CD Pipelines',
    desc: 'Streamline development with Continuous Integration and Continuous Deployment.',
  },
  {
    icon: CloudCog,
    colorClass: 'purple-600',
    title: 'Cloud Platforms',
    desc: 'Deploy and manage applications on AWS, Azure, GCP, and more.',
  },
  {
    icon: Terminal,
    colorClass: 'red-600',
    title: 'Automation & Scripting',
    desc: 'Boost productivity through shell scripting and configuration management tools.',
  },
  {
    icon: Code,
    colorClass: 'yellow-600',
    title: 'Containerization',
    desc: 'Use Docker and Kubernetes to deploy scalable and portable applications.',
  },
  {
    icon: Activity,
    colorClass: 'indigo-600',
    title: 'Monitoring & Logging',
    desc: 'Track performance and logs using tools like Prometheus, Grafana, and ELK.',
  },
  {
    icon: GitBranch,
    colorClass: 'pink-600',
    title: 'Version Control',
    desc: 'Manage code changes and collaborate effectively using Git and GitHub.',
  },
  {
    icon: ShieldCheck,
    colorClass: 'cyan-600',
    title: 'Security & Compliance',
    desc: 'Ensure secure deployments and compliance with DevSecOps best practices.',
  },
];

const DevOpsServicesPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen pt-16 sm:pt-20 transition-colors">
      {/* Intro Section */}
      <motion.section
        className="text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-4 leading-tight">
          DevOps Engineering & Automation
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
          Accelerate software delivery, boost reliability, and scale effortlessly with end-to-end DevOps practices.
        </p>
      </motion.section>

      {/* Grid Section */}
      <motion.section
        className="max-w-7xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        variants={containerStagger}
      >
        <motion.h2
          className="text-2xl mt-10 sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center"
          variants={fadeUp}
        >
          Core DevOps Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {topics.map(({ icon: Icon, colorClass, title, desc }, index) => {
            const hoverBorderClass = `hover:border-${colorClass}`;
            const textColorClass = `text-${colorClass}`;

            return (
              <motion.div
                key={index}
                className={clsx(
                  "bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center cursor-pointer border-2 border-transparent hover:shadow-lg hover:scale-[1.03] transition-all duration-300",
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

      {/* Why DevOps Section */}
      <motion.section
        className="max-w-5xl mb-10 mx-auto text-center px-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Why DevOps Matters?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 max-w-3xl mx-auto">
          DevOps brings together development and operations to shorten development cycles, increase deployment frequency, and deliver more reliable software releases.
        </p>
        <ul className="text-left list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 text-sm sm:text-base max-w-2xl mx-auto">
          <li>Faster time to market with automation and CI/CD</li>
          <li>Increased system reliability and scalability</li>
          <li>Improved collaboration between dev and ops teams</li>
          <li>Enhanced monitoring, logging, and feedback loops</li>
        </ul>
      </motion.section>
    </main>
  );
};

export default DevOpsServicesPage;
