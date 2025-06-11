// src/pages/Courses.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';

import webIcon from '../img/c1.jpg';
import dataIcon from '../img/c2.jpg';
import cyberIcon from '../img/c3.jpg';
import hardwareIcon from '../img/c4.jpg';
import androidIcon from '../img/c5.jpg';
import aimlIcon from '../img/c6.jpg';
import marketingIcon from '../img/c7.jpg';
import devopsIcon from '../img/c8.jpg';

// Offer images
import Offer1 from '../img/t1.jpg';
import Offer2 from '../img/t2.jpg';
import Offer3 from '../img/t3.jpg';
import Offer4 from '../img/t4.jpg';
import Offer5 from '../img/t5.jpg';

import axios from 'axios';
import { useEffect, useState } from 'react';

const offers = [
  { title: 'Mentor Guidance', image: Offer1 },
  { title: 'Interview Preparation', image: Offer2 },
  { title: 'Project Support', image: Offer3 },
  { title: 'Real-World Projects', image: Offer4 },
  { title: 'Resume Building', image: Offer5 },
];

const courseData = [
  {
    icon: webIcon,
    tag: 'Web Development',
    title: 'Full Stack Web Development',
    description: 'Comprehensive training on HTML, CSS, JavaScript, React, Angular, and backend technologies to build scalable web apps.',
    bgColorLight: 'bg-gradient-to-br from-blue-100 to-indigo-100',
    bgColorDark: 'dark:bg-gradient-to-br dark:from-blue-900 dark:to-indigo-900',
    textColorLight: 'text-gray-800',
    textColorDark: 'dark:text-white',
    borderColor: 'border-blue-200 dark:border-indigo-700'
  },
  {
    icon: dataIcon,
    tag: 'Data Science',
    title: 'Data Science & Analytics',
    description: 'Hands-on learning of Python, data visualization, machine learning models, and big data tools for real-world insights.',
    bgColorLight: 'bg-gradient-to-br from-purple-100 to-pink-100',
    bgColorDark: 'dark:bg-gradient-to-br dark:from-purple-900 dark:to-pink-900',
    textColorLight: 'text-gray-800',
    textColorDark: 'dark:text-white',
    borderColor: 'border-pink-200 dark:border-pink-700'
  },
  {
    icon: cyberIcon,
    tag: 'Cyber Security',
    title: 'Cybersecurity Training',
    description: 'Learn ethical hacking, penetration testing, network security, and threat mitigation to protect digital assets.',
    bgColorLight: 'bg-gradient-to-br from-green-100 to-teal-100',
    bgColorDark: 'dark:bg-gradient-to-br dark:from-green-900 dark:to-teal-900',
    textColorLight: 'text-gray-800',
    textColorDark: 'dark:text-white',
    borderColor: 'border-green-200 dark:border-green-700'
  },
  {
    icon: hardwareIcon,
    tag: 'Hardware Networking',
    title: 'Hardware & Networking',
    description: 'Practical skills in hardware setup, network configuration, troubleshooting, and maintaining IT infrastructure.',
    bgColorLight: 'bg-gradient-to-br from-red-100 to-orange-100',
    bgColorDark: 'dark:bg-gradient-to-br dark:from-red-900 dark:to-orange-900',
    textColorLight: 'text-gray-800',
    textColorDark: 'dark:text-white',
    borderColor: 'border-red-200 dark:border-orange-700'
  },
  {
    icon: androidIcon,
    tag: 'Android App Development',
    title: 'Android Development',
    description: 'Build modern Android applications using Java/Kotlin with database integration and user interface design.',
    bgColorLight: 'bg-gradient-to-br from-emerald-100 to-cyan-100',
    bgColorDark: 'dark:bg-gradient-to-br dark:from-emerald-900 dark:to-cyan-900',
    textColorLight: 'text-gray-800',
    textColorDark: 'dark:text-white',
    borderColor: 'border-emerald-200 dark:border-cyan-700'
  },
  {
    icon: aimlIcon,
    tag: 'AIML',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Explore AI concepts, develop predictive models, and implement machine learning algorithms with real datasets.',
    bgColorLight: 'bg-gradient-to-br from-yellow-100 to-amber-100',
    bgColorDark: 'dark:bg-gradient-to-br dark:from-yellow-900 dark:to-amber-900',
    textColorLight: 'text-gray-800',
    textColorDark: 'dark:text-white',
    borderColor: 'border-yellow-200 dark:border-amber-700'
  },
  {
    icon: marketingIcon,
    tag: 'Digital Marketing',
    title: 'Digital Marketing',
    description: 'Master SEO, SEM, content marketing, social media strategies, and analytics to drive online business growth.',
    bgColorLight: 'bg-gradient-to-br from-pink-100 to-rose-100',
    bgColorDark: 'dark:bg-gradient-to-br dark:from-pink-900 dark:to-rose-900',
    textColorLight: 'text-gray-800',
    textColorDark: 'dark:text-white',
    borderColor: 'border-pink-200 dark:border-rose-700'
  },
  {
    icon: devopsIcon,
    tag: 'DevOps',
    title: 'DevOps Automation',
    description: 'Learn CI/CD pipelines, containerization, cloud infrastructure, and automation tools for efficient development cycles.',
    bgColorLight: 'bg-gradient-to-br from-indigo-100 to-violet-100',
    bgColorDark: 'dark:bg-gradient-to-br dark:from-indigo-900 dark:to-violet-900',
    textColorLight: 'text-gray-800',
    textColorDark: 'dark:text-white',
    borderColor: 'border-indigo-200 dark:border-violet-700'
  },
];



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Courses = () => {
  const [certNumber, setCertNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleValidate = async () => {
    if (!certNumber.trim()) {
      setError('Please enter a certificate number');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);
    
    try {
      const res = await axios.get(`http://localhost:5000/validate/${certNumber}`);
      setResult(res.data.valid);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid certificate number');
    } finally {
      setIsLoading(false);
    }
  };

  return (
<main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 pt-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
  {/* Animated Heading */}
  <motion.header
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-12  text-center"
  >
    <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-tight sm:leading-snug md:leading-snug max-w-7xl mx-auto">
      IT Training Programs
    </h1>

    <p className="mt-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl max-w-3xl mx-auto">
      Boost your career with our industry-aligned IT training courses designed to make you job-ready.
    </p>
  </motion.header>


      {/* Animated Course Cards */}
      <section className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {courseData.map((course, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex"
          >
            <CourseCard 
              {...course} 
              className="flex-1"
              iconClassName="w-16 h-16"
              titleClassName="text-lg md:text-xl font-bold"
              descriptionClassName="text-sm md:text-base"
            />
          </motion.div>
        ))}
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-800/50 backdrop-blur-sm px-4 sm:px-6 lg:px-8 mt-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-lg dark:shadow-gray-900/50">
        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive support to ensure your learning journey is smooth and successful
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {offers.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-700/50 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-6 flex flex-col items-center justify-center h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain" 
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8 mt-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-lg dark:shadow-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Students Say
          </motion.h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  name: 'Ayan Shaikh',
                  role: 'Web Developer',
                  message: 'This course transformed my coding skills—I can now build responsive websites with ease!',
                  
                },
                {
                  name: 'Irfan',
                  role: 'Android Developer',
                  message: 'I went from zero to launching my own Android app in just a few months!',
                  
                },
                {
                  name: 'Mohammad Affan',
                  role: 'Data Analyst',
                  message: 'The hands-on projects helped me land my first job as a data analyst!',
                  
                },
                {
                  name: 'Anjali',
                  role: 'Security Engineer',
                  message: 'The cybersecurity sessions were top-notch and helped me clear my CEH certification.',
                },
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl dark:shadow-gray-900/50 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-base mb-4 flex-grow">
                    &quot;{testimonial.message}&quot;
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Validation Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-800/50 backdrop-blur-sm px-4 sm:px-6 lg:px-8 mt-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-lg dark:shadow-gray-900/50">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Certificate Validation
          </motion.h2>
          <motion.p 
            className="text-lg mb-6 text-center text-gray-600 dark:text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Verify the authenticity of your certificate by entering the certificate number below
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              className="w-full p-3 border rounded-lg shadow-sm text-base dark:bg-gray-700/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter Certificate Number"
              value={certNumber}
              onChange={(e) => setCertNumber(e.target.value)}
            />
            <button
              onClick={handleValidate}
              disabled={isLoading}
              className={`w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl ${
                isLoading ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Validating...
                </span>
              ) : 'Validate Certificate'}
            </button>
          </motion.div>

          <motion.div 
            className="mt-6 min-h-8 text-center w-full max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {result === true && (
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 font-medium">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Certificate is valid and verified!
                </div>
              </div>
            )}
            {result === false && (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 font-medium">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Certificate not found. Please check the number and try again.
                </div>
              </div>
            )}
            {error && (
              <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200 font-medium">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  {error}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Courses;