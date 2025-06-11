import React from "react";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  InboxArrowDownIcon,
  LockClosedIcon,
  UserGroupIcon,
  IdentificationIcon,
  ShieldExclamationIcon,
  KeyIcon,
  DocumentCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const threatColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
];

const measureColors = [
  "bg-indigo-100 text-indigo-800",
  "bg-teal-100 text-teal-800",
  "bg-rose-100 text-rose-800",
  "bg-cyan-100 text-cyan-800",
  "bg-orange-100 text-orange-800",
];

const threats = [
  {
    icon: ExclamationTriangleIcon,
    title: "Phishing",
    description:
      "Fraudulent emails designed to trick recipients into revealing sensitive information such as passwords or financial details.",
  },
  {
    icon: InboxArrowDownIcon,
    title: "Spam",
    description:
      "Unsolicited bulk emails that clutter inboxes and sometimes carry malicious links or attachments.",
  },
  {
    icon: ShieldExclamationIcon,
    title: "Malware",
    description:
      "Attachments or links that install malicious software like ransomware or spyware.",
  },
  {
    icon: IdentificationIcon,
    title: "Email Spoofing",
    description:
      "Forging sender addresses to impersonate trusted entities, making emails appear legitimate.",
  },
  {
    icon: UserGroupIcon,
    title: "Business Email Compromise (BEC)",
    description:
      "Targeted attacks to trick employees into transferring money or sensitive data.",
  },
];

const measures = [
  {
    icon: KeyIcon,
    text: "Implement Multi-Factor Authentication (MFA) for all email accounts.",
  },
  {
    icon: ShieldCheckIcon,
    text: "Use advanced filtering tools to detect and block suspicious messages.",
  },
  {
    icon: LockClosedIcon,
    text: "Protect sensitive emails in transit using protocols like TLS and PGP.",
  },
  {
    icon: DocumentCheckIcon,
    text: "Configure SPF, DKIM & DMARC DNS records to verify sender identity and reduce spoofing.",
  },
  {
    icon: UserCircleIcon,
    text: "Educate employees to recognize phishing and suspicious emails.",
  },
];

export default function EmailSecurity() {
  return (
    <div className="pt-20 px-6 sm:px-12 lg:px-24 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          Email Security
        </h1>

        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Protect your organization from email-based threats like phishing,
          malware, and spoofing by adopting robust email security practices.
        </p>

        {/* Common Email Threats */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-10 text-blue-600 text-center">
            Common Email Threats
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {threats.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className={`${threatColors[i % threatColors.length]} p-6 rounded-xl shadow-md hover:shadow-xl hover:border-current border-2 border-transparent transition-all duration-300 flex flex-col items-start cursor-pointer`}
                style={{
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = getComputedStyle(
                    e.currentTarget
                  ).color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <Icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Email Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-10 text-blue-600 text-center">
            Key Email Security Measures
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {measures.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className={`${measureColors[i % measureColors.length]} p-6 rounded-xl shadow-md hover:shadow-xl hover:border-current border-2 border-transparent transition-all duration-300 flex items-start space-x-4 cursor-pointer`}
                style={{
                  borderColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = getComputedStyle(
                    e.currentTarget
                  ).color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <Icon className="h-10 w-10 flex-shrink-0" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is Email Security? — moved AFTER cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">
            What is Email Security?
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Email security encompasses the techniques, tools, and best practices
            used to protect email accounts, communications, and content from
            unauthorized access, loss, or compromise. Email remains one of the
            primary attack vectors for cybercriminals targeting businesses
            through phishing, spam, malware attachments, and social engineering
            attacks.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Need Expert Email Security Solutions?
          </h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Contact us to learn how we can help protect your organization’s
            email infrastructure and keep your communications safe.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
