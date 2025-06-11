import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../img/logonav.png";
import Light from "../img/darkimage.png";
import axios from "axios";
import { motion } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/message", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", mobile: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-[#0a0a0a] text-black dark:text-white px-4 sm:px-10 pt-24 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap gap-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-w-[280px]"
        >
          {/* Light Mode Logo */}
  <img
    src={Logo}
    alt="Logo Light"
    className="block dark:hidden h-20 w-auto"
  />
  {/* Dark Mode Logo */}
  <img
    src={Light}
    alt="Logo Dark"
    className="hidden dark:block h-16 w-auto"
  />
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mt-4 max-w-sm">
            SNZ CYBER INTELLECTS LLP is a global cybersecurity firm offering
            comprehensive and high-quality solutions in cybersecurity and IT
            infrastructure protection.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-800 transition"
            >
              <FaLinkedin className="text-[#0A66C2] w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-800 transition"
            >
              <FaTwitter className="text-[#1DA1F2] w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-800 transition"
            >
              <FaInstagram className="text-[#C13584] w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Middle Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 min-w-[280px]"
        >
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/it-trainings" className="hover:underline">Trainings</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/it-trainings/certificate" className="hover:underline">Certificate Validation</Link></li>
              <li><Link to="/careers" className="hover:underline">Career</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Services</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/cyber-security-services" className="hover:underline">Cyber Security Services</Link></li>
              <li><Link to="/services/network-services" className="hover:underline">Network Services</Link></li>
              <li><Link to="/services/vulnerability-assessment-and-penetration-testing" className="hover:underline">VAPT</Link></li>
              <li><Link to="/services/cloud-services" className="hover:underline">Cloud Services</Link></li>
              <li><Link to="/services/cyber-security-awarness-training" className="hover:underline">Cyber Security Awareness & Training</Link></li>
              <li><Link to="/services/governance-risk-counsalting" className="hover:underline">Governance Risk & Counsalting (GRC)</Link></li>
            </ul>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 min-w-[280px]"
        >
          <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-lg p-6 border border-gray-300 dark:border-gray-700">
            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold rounded-md py-2 mb-4 transition">
              Subscribe to our Email
            </button>
            <h3 className="text-lg font-semibold mb-4">Free Consultation</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none"
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Send Query (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none"
              ></textarea>

              <div className="flex items-center justify-between gap-2">
                <button
                  type="submit"
                  className="bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-6 rounded-md hover:opacity-90 transition"
                >
                  Apply Now
                </button>
                {status && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm text-green-500"
                  >
                    {status}
                  </motion.span>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-800 dark:text-gray-400">
        &copy; {new Date().getFullYear()} SNZ CYBER INTELLECTS LLP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
