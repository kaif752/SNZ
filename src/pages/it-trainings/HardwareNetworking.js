import React from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Cable,
  HardDrive,
  Cpu,
  Router,
  Wifi,
  Settings,
  CloudLightning,
} from 'lucide-react';

const coreFeatures = [
  {
    icon: <Server className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" />,
    title: 'Server Setup',
    desc: 'Install and configure robust server systems to handle enterprise-level workloads.',
  },
  {
    icon: <Cable className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" />,
    title: 'Structured Cabling',
    desc: 'Design and deploy organized cabling infrastructure for efficient data flow.',
  },
  {
    icon: <HardDrive className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" />,
    title: 'Storage Solutions',
    desc: 'Implement secure and scalable storage systems for all business needs.',
  },
  {
    icon: <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" />,
    title: 'Workstation Optimization',
    desc: 'Boost employee productivity with powerful, well-configured systems.',
  },
];

const networkLayers = [
  {
    icon: <Router className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400" />,
    title: 'Router Configuration',
    desc: 'Set up routers to manage traffic, assign IPs, and secure network access.',
  },
  {
    icon: <Wifi className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400" />,
    title: 'Wi-Fi Management',
    desc: 'Deploy reliable wireless networks with seamless coverage and security.',
  },
  {
    icon: <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400" />,
    title: 'LAN & WAN Setup',
    desc: 'Establish stable local and wide area networks for internal and external communication.',
  },
  {
    icon: <CloudLightning className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400" />,
    title: 'Network Troubleshooting',
    desc: 'Diagnose and resolve network issues to ensure optimal performance.',
  },
];

const HardwareNetworking = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 pt-16 sm:pt-20 min-h-screen text-gray-800 dark:text-gray-100">
      {/* 1. Introduction */}
      <section className="text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-300 dark:text-gray-100 mb-4">
          Hardware & Networking Overview
        </h1>
        <p className="text-gray-200 dark:text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
          Hardware and networking services form the backbone of modern IT infrastructure. From physical setup to configuring secure and efficient networks, these services ensure smooth communication and system reliability for businesses of all sizes.
        </p>
      </section>

      {/* 2. Core Features */}
      <section className="max-w-7xl mx-auto mt-10 mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center cursor-pointer
                         border-2 border-transparent hover:border-green-400 dark:hover:border-green-300
                         hover:shadow-md hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-3 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Networking Layers */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">Networking Layers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkLayers.map((layer, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center cursor-pointer
                         border-2 border-transparent hover:border-indigo-400 dark:hover:border-indigo-300
                         hover:shadow-md hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-3 flex justify-center">{layer.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{layer.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{layer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why It Matters */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Why Hardware & Networking Matter</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          Every modern business depends on reliable hardware and strong network infrastructure. Proper setup and maintenance minimize downtime, boost productivity, and ensure seamless data transmission across departments and locations.
        </p>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-white mb-10 dark:bg-gray-800 shadow-inner rounded-xl max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Let’s Build Your IT Backbone</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get in touch with our team to design and implement a tailored hardware and networking solution that supports your business growth.
        </p>
        <Link to="/contactus">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
};

export default HardwareNetworking;
