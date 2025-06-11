import React from "react";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  DeviceTabletIcon,
  FingerPrintIcon,
  UserCircleIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  KeyIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

// Threats with fixed color utility classes
const threats = [
  {
    icon: ExclamationTriangleIcon,
    title: "Malware & Ransomware",
    description:
      "Malicious software that can encrypt data or compromise device functionality, threatening endpoint integrity.",
    bg: "bg-red-100",
    text: "text-red-800",
    hoverBg: "hover:bg-red-200",
  },
  {
    icon: FingerPrintIcon,
    title: "Unauthorized Access",
    description:
      "Attackers gaining access to endpoints through weak passwords, stolen credentials, or privilege escalation.",
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    hoverBg: "hover:bg-yellow-200",
  },
  {
    icon: DeviceTabletIcon,
    title: "Lost or Stolen Devices",
    description:
      "Physical loss or theft of laptops, smartphones, or tablets can expose sensitive organizational data.",
    bg: "bg-purple-100",
    text: "text-purple-800",
    hoverBg: "hover:bg-purple-200",
  },
  {
    icon: ShieldExclamationIcon,
    title: "Zero-Day Exploits",
    description:
      "Unknown vulnerabilities exploited by attackers before patches or fixes are available.",
    bg: "bg-pink-100",
    text: "text-pink-800",
    hoverBg: "hover:bg-pink-200",
  },
  {
    icon: UserCircleIcon,
    title: "Phishing & Social Engineering",
    description:
      "Techniques targeting users to trick them into revealing credentials or installing malware on endpoints.",
    bg: "bg-indigo-100",
    text: "text-indigo-800",
    hoverBg: "hover:bg-indigo-200",
  },
];

// Measures with fixed color utility classes
const measures = [
  {
    icon: ShieldCheckIcon,
    text: "Install and maintain updated endpoint protection software including antivirus and anti-malware.",
    bg: "bg-blue-100",
    textColor: "text-blue-800",
    hoverBg: "hover:bg-blue-200",
  },
  {
    icon: LockClosedIcon,
    text: "Enforce strong authentication methods like Multi-Factor Authentication (MFA) on all endpoints.",
    bg: "bg-green-100",
    textColor: "text-green-800",
    hoverBg: "hover:bg-green-200",
  },
  {
    icon: DocumentCheckIcon,
    text: "Apply timely software patches and security updates to operating systems and applications.",
    bg: "bg-cyan-100",
    textColor: "text-cyan-800",
    hoverBg: "hover:bg-cyan-200",
  },
  {
    icon: KeyIcon,
    text: "Implement device encryption to protect data stored on endpoints.",
    bg: "bg-orange-100",
    textColor: "text-orange-800",
    hoverBg: "hover:bg-orange-200",
  },
  {
    icon: UserCircleIcon,
    text: "Conduct regular user training and awareness programs on security best practices.",
    bg: "bg-teal-100",
    textColor: "text-teal-800",
    hoverBg: "hover:bg-teal-200",
  },
];

export default function EndpointSecurity() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 sm:px-12 lg:px-24 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-8">
          Endpoint Security
        </h1>

        {/* Intro */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Endpoint security protects endpoints — devices like laptops,
            desktops, and mobile devices — from malicious threats and attacks.
            With employees working remotely and the increasing use of mobile
            devices, endpoint security is critical for maintaining the integrity
            and confidentiality of organizational data.
          </p>
        </section>

        {/* Common Endpoint Threats */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-10 text-center">
            Common Endpoint Threats
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {threats.map(({ icon: Icon, title, description, bg, text, hoverBg }, i) => (
              <div
                key={i}
                className={`${bg} ${text} ${hoverBg} p-6 rounded-xl shadow-md border-2 border-transparent hover:border-indigo-600 hover:shadow-xl transition duration-300 flex flex-col`}
              >
                <Icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Endpoint Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-10 text-center">
            Key Endpoint Security Measures
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {measures.map(({ icon: Icon, text, bg, textColor, hoverBg }, i) => (
              <div
                key={i}
                className={`${bg} ${textColor} ${hoverBg} p-6 rounded-xl shadow-md border-2 border-transparent hover:border-indigo-600 hover:shadow-xl transition duration-300 flex items-start space-x-4`}
              >
                <Icon className="h-10 w-10 flex-shrink-0" />
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Secure Your Endpoints Today
          </h3>
          <p className="text-gray-700 mb-6">
            Protect your business and sensitive data by implementing
            comprehensive endpoint security strategies. Contact us to learn how
            we can help safeguard your organization's devices and network.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
