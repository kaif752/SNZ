import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/message', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', mobile: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send. Try again.');
    }
  };

  return (
    <div className="bg-white mt-4 dark:bg-gray-950 text-gray-900 dark:text-white pt-20 pb-12 px-4 sm:px-6 lg:px-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 lg:w-1/2 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Have questions or need assistance? We’re here to help with inquiries, support, and guidance. Let’s connect.
          </p>

          <div className="space-y-4 text-base sm:text-lg">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-indigo-600 dark:text-indigo-400 mt-1" />
              <div>
                <strong>Phone</strong>
                <div className="text-gray-800 dark:text-gray-300">+91 8108108486</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-indigo-600 dark:text-indigo-400 mt-1" />
              <div>
                <strong>Email</strong>
                <div className="text-gray-800 dark:text-gray-300">info@infotekhub.com</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-semibold text-lg">Follow Us:</p>
            <div className="flex gap-4 mt-2 text-indigo-600 dark:text-indigo-400">
              <Link to="/linkedin" aria-label="LinkedIn"><FaLinkedin size={24} /></Link>
              <Link to="/instagram" aria-label="Instagram"><FaInstagram size={24} /></Link>
              <Link to="/twitter" aria-label="Twitter"><FaTwitter size={24} /></Link>
            </div>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 w-full lg:w-[450px] shadow-md"
        >
          <div className="bg-indigo-600 text-white text-center py-2 rounded-md mb-4 font-semibold text-sm sm:text-base">
            Subscribe to Our Email
          </div>
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Free Consultation</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white w-full sm:w-auto px-6 py-2 rounded-md font-semibold transition duration-300"
              >
                Send Message
              </button>

              {status && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm text-green-500 dark:text-green-400 mt-2 sm:mt-0"
                >
                  {status}
                </motion.span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
