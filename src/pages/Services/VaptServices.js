import React from "react";
import {
  Globe,
  Smartphone,
  ShieldCheck,
  Cloud,
  Wifi,
  Code,
  FileCode,
  ServerCog,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const vaptServices = [
  {
    icon: Globe,
    color: "text-blue-600",
    title: "Web Security",
    description:
      "Identify and patch vulnerabilities in your web applications to protect against threats like SQLi, XSS, and more.",
  },
  {
    icon: Smartphone,
    color: "text-green-600",
    title: "Mobile Security",
    description:
      "Ensure the security of mobile apps across Android and iOS platforms through in-depth dynamic and static testing.",
  },
  {
    icon: ShieldCheck,
    color: "text-red-600",
    title: "Network Security",
    description:
      "Uncover and address vulnerabilities in your internal and external networks to secure communication channels.",
  },
  {
    icon: ServerCog,
    color: "text-indigo-600",
    title: "API Security",
    description:
      "Secure REST and SOAP APIs against unauthorized access, injection flaws, and logic abuse.",
  },
  {
    icon: Cloud,
    color: "text-yellow-500",
    title: "Cloud Security",
    description:
      "Assess configurations and access controls in cloud platforms to prevent data leaks and privilege abuse.",
  },
  {
    icon: Wifi,
    color: "text-purple-600",
    title: "Wireless Security",
    description:
      "Audit Wi-Fi networks to uncover risks from rogue access points and weak encryption protocols.",
  },
  {
    icon: Code,
    color: "text-teal-600",
    title: "Thick Client Security",
    description:
      "Evaluate thick client applications for insecure storage, buffer overflows, and privilege escalations.",
  },
  {
    icon: FileCode,
    color: "text-pink-600",
    title: "Source Code Review",
    description:
      "Perform manual and automated code reviews to detect insecure coding practices and vulnerabilities.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function VAPTServices() {
  return (
    <div className="pt-16">
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
          VAPT Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Comprehensive Vulnerability Assessment and Penetration Testing across platforms and technologies.
        </motion.p>
      </motion.section>

      {/* Services */}
      <motion.section
        className="py-16 px-4 bg-gray-100 dark:bg-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-white"
            variants={fadeUp}
          >
            Our VAPT Capabilities
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vaptServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md border border-transparent hover:border-blue-500 transition-all duration-300"
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`${service.color} mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="py-20 px-4 sm:px-6 bg-white dark:bg-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
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
                className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md border hover:border-blue-500 transition duration-300"
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
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
        className="bg-white dark:bg-zinc-900 text-black dark:text-white py-16 text-center"
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
          className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-6 rounded-full hover:text-blue-500 dark:hover:text-blue-600 transition"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.section>
    </div>
  );
}
