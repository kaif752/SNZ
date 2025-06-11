import {
  ShieldCheck,
  FileCheck2,
  Settings,
  BarChart,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const grcServices = [
  {
    icon: ShieldCheck,
    color: "text-purple-600 dark:text-purple-400",
    title: "ISO Readiness",
    description:
      "Prepare your organization for ISO certifications with structured guidance, document control, and policy alignment.",
  },
  {
    icon: FileCheck2,
    color: "text-indigo-600 dark:text-indigo-400",
    title: "Configuration Review",
    description:
      "Evaluate and fine-tune system and network configurations to align with security best practices and compliance requirements.",
  },
  {
    icon: Settings,
    color: "text-violet-600 dark:text-violet-400",
    title: "Managed Security Services",
    description:
      "Outsource security operations to experts who monitor, detect, and respond to threats around the clock.",
  },
  {
    icon: BarChart,
    color: "text-purple-700 dark:text-purple-300",
    title: "Compliance Gap Assessment",
    description:
      "Identify compliance gaps with industry standards like ISO 27001, HIPAA, and GDPR, and receive detailed remediation plans.",
  },
  {
    icon: Users,
    color: "text-indigo-700 dark:text-indigo-300",
    title: "vCISO as a Service",
    description:
      "Gain strategic security leadership through our Virtual CISO service—aligning security efforts with business goals.",
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

export default function GovernanceRiskConsulting() {
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
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeUp}>
          Governance, Risk & Compliance (GRC) Services
        </motion.h1>
        <motion.p className="max-w-2xl mx-auto text-lg md:text-xl" variants={fadeUp} transition={{ delay: 0.2 }}>
          Streamline your organization’s governance framework, mitigate risk, and ensure continuous compliance with expert support.
        </motion.p>
      </motion.section>

      {/* Services */}
      <motion.section
        className="py-16 px-4 bg-indigo-50 dark:bg-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl font-semibold text-center mb-12 text-indigo-900 dark:text-white" variants={fadeUp}>
            Core GRC Offerings
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {grcServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md hover:border-purple-600 dark:hover:border-purple-400 border border-transparent transition-all duration-300"
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
                  <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 bg-white dark:bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold mb-6 text-black dark:text-white" variants={fadeUp}>
            Why Partner with Us?
          </motion.h2>
          <motion.p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12" variants={fadeUp} transition={{ delay: 0.2 }}>
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
                className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md border hover:border-blue-500 dark:border-zinc-700 dark:hover:border-blue-400 transition duration-300"
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-white dark:bg-black text-black dark:text-white py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 className="text-3xl font-bold mb-4" variants={fadeUp}>
          Ready to Elevate Your Network?
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-xl mx-auto"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Schedule a free consultation with our network experts today.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-6 rounded-full hover:text-blue-500 dark:hover:text-blue-400 transition"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.section>
    </div>
  );
}
