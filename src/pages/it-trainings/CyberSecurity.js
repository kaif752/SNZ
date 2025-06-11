import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  ShieldCheck,
  GlobeLock,
  Cpu,
  LockKeyhole,
  Radar,
  Fingerprint,
  AlertTriangle,
  Network,
} from 'lucide-react';

const coreFeatures = [
  {
    icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-500" />,
    title: 'Threat Detection',
    desc: 'Identify and respond to threats in real-time using intelligent monitoring systems.',
  },
  {
    icon: <GlobeLock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-500" />,
    title: 'Data Privacy',
    desc: 'Ensure sensitive information remains protected against unauthorized access.',
  },
  {
    icon: <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-500" />,
    title: 'System Integrity',
    desc: 'Prevent unauthorized changes and maintain system integrity.',
  },
  {
    icon: <LockKeyhole className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-500" />,
    title: 'Access Management',
    desc: 'Control who can view or use resources within your organization.',
  },
];

const securityLayers = [
  {
    icon: <Radar className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 dark:text-purple-500" />,
    title: 'Network Security',
    desc: 'Protect your infrastructure from intrusion and maintain secure communication.',
  },
  {
    icon: <Fingerprint className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 dark:text-purple-500" />,
    title: 'Identity Verification',
    desc: 'Authenticate users and control access through multi-factor authentication.',
  },
  {
    icon: <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 dark:text-purple-500" />,
    title: 'Incident Response',
    desc: 'Prepare, detect, contain, and recover from cyber incidents swiftly.',
  },
  {
    icon: <Network className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 dark:text-purple-500" />,
    title: 'Endpoint Security',
    desc: 'Secure end-user devices and monitor for anomalies and vulnerabilities.',
  },
];

const CyberSecurity = () => {
  return (
    <div className="pt-16 sm:pt-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">

      {/* 1. Introduction */}
      <motion.section
        className="text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Cybersecurity Overview
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 dark:text-gray-200">
          Cybersecurity is the practice of defending computers, servers, mobile devices,
          electronic systems, networks, and data from malicious attacks.
        </p>
      </motion.section>

      {/* 2. Core Features */}
      <motion.section
        className="max-w-7xl mx-auto mt-10 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border-2 border-transparent 
                         dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500
                         p-6 text-center cursor-pointer hover:shadow-md hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-3 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. Security Layers */}
      <motion.section
        className="max-w-7xl mx-auto mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Security Layers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityLayers.map((layer, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border-2 border-transparent 
                         dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500
                         p-6 text-center cursor-pointer hover:shadow-md hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-3 flex justify-center">{layer.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{layer.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{layer.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. Why It Matters */}
      <motion.section
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Why Cybersecurity Matters</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          In today’s interconnected digital world, cybersecurity is essential. Data breaches,
          ransomware, phishing attacks, and system intrusions can cause severe damage.
          Organizations must proactively defend their digital assets to ensure trust,
          compliance, and continuity.
        </p>
      </motion.section>

      {/* 5. CTA Section */}
      <motion.section
        className="bg-white mb-10 dark:bg-gray-800 shadow-inner rounded-xl max-w-4xl mx-auto p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ amount: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4">Get Protected Today</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Secure your organization’s future. Contact our experts to build a custom cybersecurity solution tailored to your needs.
        </p>
        <Link to="/contactus">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </button>
        </Link>
      </motion.section>
    </div>
  );
};

export default CyberSecurity;
