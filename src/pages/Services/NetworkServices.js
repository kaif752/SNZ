import {
  ShieldCheck,
  Router,
  Network,
  CloudCog,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: ShieldCheck,
    color: "text-blue-600",
    title: "Next-Gen Firewall",
    description:
      "Advanced firewalls with deep inspection, app awareness, and integrated threat intelligence for robust perimeter defense.",
  },
  {
    icon: Router,
    color: "text-green-600",
    title: "Switch & Router Configuration",
    description:
      "Optimize traffic with efficient switch/router setup ensuring fast, secure data flow across your infrastructure.",
  },
  {
    icon: Network,
    color: "text-red-600",
    title: "DDoS Protection",
    description:
      "Mitigate DDoS threats through scalable traffic filtering, ensuring consistent availability and system reliability.",
  },
  {
    icon: CloudCog,
    color: "text-indigo-600",
    title: "Managed Network Security",
    description:
      "24/7 monitoring, threat detection, incident response, and compliance management by seasoned security engineers.",
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

export default function NetworkServices() {
  return (
    <div className="pt-16 bg-white dark:bg-black dark:text-white transition-colors duration-300">
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
          Network Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          Reliable, secure, and scalable networks to fuel your digital transformation.
        </motion.p>
      </motion.section>

      {/* Services */}
      <motion.section
        className="py-16 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12"
            variants={fadeUp}
          >
            Core Network Capabilities
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:border-blue-500 border border-transparent dark:border-gray-700 transition-all duration-300"
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
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Why Us */}
      <motion.section
        className="py-20 px-4 sm:px-6 bg-white dark:bg-black transition-colors duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold mb-6" variants={fadeUp}>
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
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md border dark:border-gray-700 hover:border-blue-500 transition duration-300"
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-white dark:bg-black text-black dark:text-white py-16 text-center transition-colors duration-300"
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
