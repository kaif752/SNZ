import {
  ShieldCheck,
  CloudCog,
  Router,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const cloudServices = [
  {
    icon: ShieldCheck,
    color: "text-purple-600 dark:text-purple-400",
    title: "Web Application Firewall (WAF)",
    description:
      "Protect your web apps from common attacks like SQL injection and cross-site scripting with real-time traffic filtering and threat mitigation.",
  },
  {
    icon: CloudCog,
    color: "text-indigo-600 dark:text-indigo-400",
    title: "Cloud Access Security Broker (CASB)",
    description:
      "Gain visibility and control over cloud service usage, enforcing security policies and protecting sensitive data across cloud environments.",
  },
  {
    icon: Router,
    color: "text-violet-600 dark:text-violet-400",
    title: "Zero Trust Network Access (ZTNA)",
    description:
      "Secure remote access by verifying every user and device continuously, minimizing trust zones and preventing lateral threats.",
  },
  {
    icon: ShieldCheck,
    color: "text-purple-700 dark:text-purple-300",
    title: "Secure Access Service Edge (SASE)",
    description:
      "Combine networking and security functions into a unified cloud service for flexible, scalable, and secure edge access.",
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

export default function CloudSecurityServices() {
  return (
    <div className="pt-16 bg-gray-100 dark:bg-gray-950 text-black dark:text-white">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-20 px-4 text-center dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-700"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          Cloud Security Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 dark:text-gray-300"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Fortify your cloud infrastructure with cutting-edge security solutions
          for a safe and scalable digital future.
        </motion.p>
      </motion.section>

      {/* Services */}
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
            Core Cloud Security Technologies
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:border-purple-600 dark:hover:border-purple-400 border border-transparent transition-all duration-300"
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`${service.color} mb-4`}
                    variants={iconSpin}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
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
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md border hover:border-blue-500 dark:hover:border-blue-400 transition duration-300"
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
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
          className="text-lg mb-8 max-w-xl mx-auto text-gray-700 dark:text-gray-300"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Schedule a free consultation with our network experts today.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-6 rounded-full hover:text-blue-500 transition"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.section>
    </div>
  );
}
