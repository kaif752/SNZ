import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Bug,
  Users,
  Cloud,
  AlertCircle,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Cyber Security Services",
    desc: "Comprehensive protection against cyber threats to safeguard your IT infrastructure.",
    colorKey: "blue",
  },
  {
    icon: <Server size={28} />,
    title: "Network Services",
    desc: "Reliable and secure network design, implementation, and monitoring.",
    colorKey: "green",
  },
  {
    icon: <Bug size={28} />,
    title: "VAPT (Pen Testing)",
    desc: "Identify vulnerabilities and strengthen your defenses with expert VAPT assessments.",
    colorKey: "red",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud Security & Services",
    desc: "Secure and scalable cloud solutions with advanced data protection strategies.",
    colorKey: "purple",
  },
  {
    icon: <Users size={28} />,
    title: "Awareness & Training",
    desc: "Empower your workforce to recognize and avoid cyber threats with expert-led training.",
    colorKey: "yellow",
  },
  {
    icon: <AlertCircle size={28} />,
    title: "Governance, Risk & Compliance (GRC)",
    desc: "Stay compliant and manage IT risks with expert governance strategies.",
    colorKey: "indigo",
  },
];

const colorMap = {
  blue: { gradientFrom: "from-blue-400", gradientTo: "to-blue-600", hoverBorder: "hover:border-blue-600" },
  green: { gradientFrom: "from-green-400", gradientTo: "to-green-600", hoverBorder: "hover:border-green-600" },
  red: { gradientFrom: "from-red-400", gradientTo: "to-red-600", hoverBorder: "hover:border-red-600" },
  purple: { gradientFrom: "from-purple-400", gradientTo: "to-purple-600", hoverBorder: "hover:border-purple-600" },
  yellow: { gradientFrom: "from-yellow-400", gradientTo: "to-yellow-600", hoverBorder: "hover:border-yellow-600" },
  indigo: { gradientFrom: "from-indigo-400", gradientTo: "to-indigo-600", hoverBorder: "hover:border-indigo-600" },
};

const Card = ({ icon, title, desc, colorKey }) => {
  const cardRef = useRef(null);
  const colors = colorMap[colorKey];

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-[#0f172a] rounded-2xl shadow-md p-6 flex flex-col items-center text-center border-2 border-transparent ${colors.hoverBorder} dark:border-slate-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1`}
    >
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr ${colors.gradientFrom} ${colors.gradientTo} text-white mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">{desc}</p>
    </div>
  );
};

const CybersecurityServicesPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <div className="pt-20 pb-24 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-[#0b1120] dark:via-[#0a0f1c] dark:to-[#0f172a]">
      <motion.h3
        className="text-3xl md:text-4xl font-extrabold text-center text-[#0B1F3A] dark:text-white mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        Services
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>

      {/* Additional Section with Scroll Animations */}
      <section
        ref={sectionRef}
        className="mt-24 bg-white dark:bg-[#111827] py-16 px-6 sm:px-10 lg:px-20 rounded-xl shadow-md"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] dark:text-white mb-4">
            Why Robust Security is Your Business Lifeline
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            In today's evolving digital world, every organization faces cyber threats. Our comprehensive cybersecurity and IT services ensure your business stays secure, compliant, and resilient against modern attacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              icon: <ShieldCheck size={28} />,
              title: "Cybersecurity Services",
              color: "text-blue-600 dark:text-blue-400",
              desc:
                "We protect your organization from cyberattacks with proactive monitoring, endpoint protection, firewalls, and incident response plans — ensuring data integrity and business continuity.",
            },
            {
              icon: <Server size={28} />,
              title: "Network Services",
              color: "text-green-600 dark:text-green-400",
              desc:
                "Build a secure, scalable, and robust IT backbone with our expert network solutions.",
            },
            {
              icon: <Cloud size={28} />,
              title: "Cloud Security & Services",
              color: "text-purple-600 dark:text-purple-400",
              desc:
                "Whether you're migrating to the cloud or optimizing your current setup, we help secure cloud platforms like AWS, Azure, and Google Cloud.",
            },
            {
              icon: <Bug size={28} />,
              title: "Vulnerability Assessment & Pen Testing",
              color: "text-red-600 dark:text-red-400",
              desc:
                "Identify security gaps before hackers do. Our certified experts simulate attacks and provide actionable insights.",
            },
            {
              icon: <Users size={28} />,
              title: "Cyber Awareness & Training",
              color: "text-yellow-600 dark:text-yellow-400",
              desc:
                "Educate employees on phishing, ransomware, and social engineering with engaging workshops.",
            },
            {
              icon: <AlertCircle size={28} />,
              title: "Governance, Risk & Compliance (GRC)",
              color: "text-indigo-600 dark:text-indigo-400",
              desc:
                "Align your operations with ISO 27001, GDPR, HIPAA. We build a risk-aware culture.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className={`${item.color} mt-1`}>{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CybersecurityServicesPage;
