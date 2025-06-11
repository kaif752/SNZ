import React from "react";
import { ShieldCheck, ServerCog, LockKeyhole, Cloud, Wifi } from "lucide-react";

const infraSecurityData = [
  {
    icon: <ShieldCheck className="text-blue-600 w-8 h-8" />,
    title: "Firewall & Perimeter Security",
    description:
      "We deploy enterprise-grade firewalls, intrusion prevention systems (IPS), and intrusion detection systems (IDS) to secure your network perimeter and block unauthorized access.",
  },
  {
    icon: <ServerCog className="text-blue-600 w-8 h-8" />,
    title: "Server Hardening",
    description:
      "We ensure your servers are secure by disabling unnecessary services, applying OS security patches, and configuring least-privilege access.",
  },
  {
    icon: <LockKeyhole className="text-blue-600 w-8 h-8" />,
    title: "Access Control & Identity Management",
    description:
      "Role-based access control (RBAC), multi-factor authentication (MFA), and centralized identity management ensure only authorized users access critical infrastructure.",
  },
  {
    icon: <Cloud className="text-blue-600 w-8 h-8" />,
    title: "Cloud Infrastructure Security",
    description:
      "We secure your AWS, Azure, and GCP infrastructure using encryption, IAM policies, and configuration monitoring.",
  },
  {
    icon: <Wifi className="text-blue-600 w-8 h-8" />,
    title: "Wireless Network Security",
    description:
      "We secure Wi-Fi networks using WPA3 encryption, MAC address filtering, and VLAN segmentation to prevent unauthorized access.",
  },
];

export default function ITInfraSecurity() {
  return (
    <div className="pt-20 px-4 sm:px-10 lg:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          IT Infrastructure Security
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Safeguard your organization's critical infrastructure with advanced protection mechanisms, proactive monitoring, and compliance-driven strategies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {infraSecurityData.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Why IT Infrastructure Security Matters</h2>
          <p className="text-gray-700 mb-4">
            In today's interconnected digital world, every organization depends on IT infrastructure to run critical operations. Cyber threats targeting servers, networks, endpoints, and cloud services are increasing rapidly. Without proper security:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Data breaches can expose sensitive customer and business information.</li>
            <li>Ransomware can lock down systems and halt operations.</li>
            <li>Compliance violations can lead to hefty fines and reputational damage.</li>
            <li>Unpatched systems are vulnerable to known exploits and zero-day attacks.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Approach</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Conduct infrastructure risk assessment and gap analysis.</li>
            <li>Implement layered security across endpoints, network, and cloud.</li>
            <li>Deploy SIEM and log monitoring tools for early threat detection.</li>
            <li>Harden OS and applications using best security practices.</li>
            <li>Regularly audit and review access policies and permissions.</li>
            <li>Conduct penetration testing and vulnerability assessments.</li>
          </ol>
        </section>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Ready to Strengthen Your Infrastructure?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us today to schedule a security assessment and secure your IT foundation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl shadow">
            Get a Free Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
