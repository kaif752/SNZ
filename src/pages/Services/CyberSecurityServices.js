import {
  Server,
  MailCheck,
  MonitorCheck,
  ShieldCheck,
  FileWarning,
  Bug,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "IT Infrastructure Security",
    description:
      "Safeguard your core IT systems, servers, and networks with advanced security architecture and monitoring.",
  },
  {
    icon: <MailCheck className="w-8 h-8 text-rose-600 dark:text-rose-400" />,
    title: "Email Security",
    description:
      "Block phishing, malware, and spam threats before they reach your inbox using intelligent email protection.",
  },
  {
    icon: <MonitorCheck className="w-8 h-8 text-green-600 dark:text-green-400" />,
    title: "Endpoint Security",
    description:
      "Protect user devices including desktops, laptops, and mobiles using EDR, antivirus, and policy control.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "Managed Security Services",
    description:
      "Get 24/7 cybersecurity monitoring, threat hunting, and incident response from our security experts.",
  },
  {
    icon: <FileWarning className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    title: "Data Loss Prevention (DLP)",
    description:
      "Prevent sensitive data leaks through monitoring, encryption, and user behavior analytics.",
  },
  {
    icon: <Bug className="w-8 h-8 text-red-600 dark:text-red-400" />,
    title: "Red Teaming & Pen Testing",
    description:
      "Simulate real-world attacks to identify weaknesses and test your organization's response capabilities.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CyberSecurityServices() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-20 px-4 sm:px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          Expert Cybersecurity Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Protect your digital assets with our end-to-end cybersecurity solutions and managed services.
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white" variants={fadeUp}>
            Our Core Cybersecurity Solutions
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition duration-300"
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white" variants={fadeUp}>
            Why Partner with Us?
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            We combine industry best practices, certified experts, and cutting-edge tools to ensure unmatched protection across your digital landscape.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "24/7 Monitoring",
                description: "Around-the-clock security operations center to detect and respond instantly.",
              },
              {
                title: "Scalable Solutions",
                description: "Customizable services for startups to enterprise-grade deployments.",
              },
              {
                title: "Compliance Ready",
                description: "Ensure industry and regulatory compliance (ISO, SOC2, GDPR, HIPAA).",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md border hover:border-blue-500 dark:hover:border-blue-400 transition duration-300"
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-white dark:bg-gray-900 text-black dark:text-white py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 className="text-3xl font-bold mb-4" variants={fadeUp}>
          Ready to Elevate Your Network?
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-xl mx-auto text-gray-700 dark:text-gray-300"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Schedule a free consultation with our network experts today.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-6 rounded-full hover:text-blue-500 dark:hover:text-blue-500 transition"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.section>
    </div>
  );
}
