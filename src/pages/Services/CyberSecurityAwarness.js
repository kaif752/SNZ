// Imports
import {
  AlertTriangle,
  UserCheck,
  ArrowRight,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

// Data
const awarenessTrainings = [
  {
    icon: Lightbulb,
    color: "text-yellow-600 dark:text-yellow-400",
    title: "Cybersecurity Awareness Training",
    description:
      "Educate employees on identifying and avoiding cyber threats like phishing, social engineering, and malware with engaging modules and real-world scenarios.",
  },
  {
    icon: AlertTriangle,
    color: "text-red-600 dark:text-red-400",
    title: "Phishing Simulation Exercises",
    description:
      "Run simulated phishing attacks to test awareness levels, identify weak spots, and improve email threat recognition and response.",
  },
  {
    icon: UserCheck,
    color: "text-green-600 dark:text-green-400",
    title: "Role-Based Security Training",
    description:
      "Tailored training for different roles – from executives to IT staff – to ensure relevant and actionable cybersecurity practices.",
  },
  {
    icon: BookOpen,
    color: "text-indigo-600 dark:text-indigo-400",
    title: "Compliance & Policy Education",
    description:
      "Ensure staff understand data protection regulations, security policies, and their role in maintaining compliance across the organization.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const iconSpin = {
  hidden: { rotate: 0 },
  visible: {
    rotate: [0, 15, -15, 0],
    transition: { duration: 1, ease: "easeInOut" },
  },
};

// Main Component
export default function CyberAwarenessTrainings() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 text-black dark:text-gray-100 transition-colors duration-300">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-20 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={fadeUp}
        >
          Cybersecurity Awareness & Training
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Empower your workforce with critical knowledge and simulated
          experiences to recognize and resist cyber threats effectively.
        </motion.p>
      </motion.section>

      {/* Trainings */}
      <motion.section
        className="py-16 px-4 bg-indigo-50 dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12 text-indigo-900 dark:text-indigo-300"
            variants={fadeUp}
          >
            Our Core Awareness Trainings
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {awarenessTrainings.map((training, index) => {
              const Icon = training.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300"
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`${training.color} mb-4`}
                    variants={iconSpin}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-200">
                    {training.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {training.description}
                  </p>
                </motion.div>
              );
            })}
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
          <motion.h2
            className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
            variants={fadeUp}
          >
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
                description:
                  "Around-the-clock security operations center to detect and respond instantly.",
              },
              {
                title: "Scalable Solutions",
                description:
                  "Customizable services for startups to enterprise-grade deployments.",
              },
              {
                title: "Compliance Ready",
                description:
                  "Ensure industry and regulatory compliance (ISO, SOC2, GDPR, HIPAA).",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition duration-300"
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-white dark:bg-gray-950 text-black dark:text-white py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 className="text-3xl font-bold mb-4" variants={fadeUp}>
          Ready to Elevate Your Network?
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-xl mx-auto text-gray-800 dark:text-gray-300"
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
