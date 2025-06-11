import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Code,
  AppWindow,
  ShieldCheck,
  Cpu,
  Bug,
  Cloud,
  Rocket,
} from 'lucide-react';

const coreFeatures = [
  {
    icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />,
    title: 'Mobile Optimization',
    desc: 'Design responsive, fast, and reliable apps for Android devices of all sizes.',
  },
  {
    icon: <Code className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />,
    title: 'Custom Development',
    desc: 'Build tailored mobile apps with unique functionality using Kotlin or Java.',
  },
  {
    icon: <AppWindow className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />,
    title: 'UI/UX Design',
    desc: 'Create intuitive and engaging interfaces that improve user retention.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />,
    title: 'App Security',
    desc: 'Protect user data and integrate secure authentication mechanisms.',
  },
];

const devLayers = [
  {
    icon: <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    title: 'Backend Integration',
    desc: 'Connect your mobile app to scalable, cloud-based backend services.',
  },
  {
    icon: <Bug className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    title: 'Testing & QA',
    desc: 'Ensure your app is bug-free with unit tests, UI testing, and real device trials.',
  },
  {
    icon: <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    title: 'Cloud Deployment',
    desc: 'Use Firebase, AWS, or GCP for real-time syncing, notifications, and data. ',
  },
  {
    icon: <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    title: 'App Launch',
    desc: 'Deploy your app to Google Play with proper optimization and compliance.',
  },
];

const AndroidAppDevelopment = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 pt-16 sm:pt-20 min-h-screen text-gray-800 dark:text-gray-100">
      <div>
        {/* 1. Introduction */}
        <section className="text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-300 dark:text-white mb-4">
            Android App Development
          </h1>
          <p className="text-gray-300 dark:text-gray-200 max-w-3xl mx-auto text-base sm:text-lg">
            Android App Development involves designing, building, and deploying applications for the Android operating system using modern languages, tools, and design practices to deliver high-performance mobile experiences.
          </p>
        </section>

        {/* 2. Core Features */}
        <section className="max-w-7xl mx-auto mt-10 mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center cursor-pointer
                           border-2 border-transparent hover:border-green-400
                           hover:shadow-md hover:scale-[1.03] transition-all duration-300"
              >
                <div className="mb-3 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Development Layers */}
        <section className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">Development Layers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devLayers.map((layer, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center cursor-pointer
                           border-2 border-transparent hover:border-purple-400
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Why Android Apps Matter</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            With over 3 billion devices worldwide running Android, mobile applications offer a direct channel to users. Whether for business, utility, education, or entertainment, a well-built Android app improves engagement, boosts efficiency, and expands market reach.
          </p>
        </section>

        {/* 5. CTA Section */}
        <section className="bg-white mb-10 dark:bg-gray-800 shadow-inner rounded-xl max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Let’s Build Your App</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Transform your ideas into reality. Contact our Android experts to craft a mobile app that drives results.
          </p>
          <Link to="/contact">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Contact Us
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default AndroidAppDevelopment;
