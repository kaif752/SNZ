import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Aboutimg from '../img/About2.jpg';
import Aboutimg1 from '../img/About1.jpg';
import Aboutimg2 from '../img/About1222.avif'; // NEW IMAGE
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Info from '../pdf/Copy of SNZ CYBER INTELLECTS (3).pdf';

const scrollAnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const imagesRef = useRef(null);

  const isWhoWeAreInView = useInView(whoWeAreRef, { triggerOnce: false, margin: '-100px' });
  const isWhatWeDoInView = useInView(whatWeDoRef, { triggerOnce: false, margin: '-100px' });
  const isImagesInView = useInView(imagesRef, { triggerOnce: false, margin: '-100px' });

  return (
    <div className="w-full pt-16 bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
      
      {/* Top Header Section */}
      <section className="text-center py-10 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">ABOUT SNZ CYBER INTELLECTS</h2>
        <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto dark:text-gray-300">
          Empowering Your Digital World with Reliable Cyber Protection
        </p>
      </section>

      {/* Fixed Contact Buttons (Desktop) */}
      <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2 space-y-3 hidden md:flex flex-col items-end pr-1">
        <Link
          to="/contact"
          className="w-10 h-10 flex items-center justify-center bg-[#155A8A] text-white rounded-l-md shadow-md hover:bg-[#1f96b0]"
        >💬</Link>
        <a href="tel:+918108108486" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-l-md shadow-md hover:bg-blue-700">
          <FaPhoneAlt />
        </a>
        <a href="https://wa.me/918108108486" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-l-md shadow-md hover:bg-green-600">
          <FaWhatsapp />
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700 flex justify-center gap-6 p-3 md:hidden shadow-lg">
        <Link to="/contact" className="w-12 h-12 flex items-center justify-center bg-[#155A8A] text-white rounded-full hover:bg-[#1f96b0] text-xl">💬</Link>
        <a href="tel:+918108108486" className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 text-xl">
          <FaPhoneAlt />
        </a>
        <a href="https://wa.me/918108108486" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 text-xl">
          <FaWhatsapp />
        </a>
      </div>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Who We Are */}
          <motion.div
            ref={whoWeAreRef}
            initial="hidden"
            animate={isWhoWeAreInView ? 'visible' : 'hidden'}
            variants={scrollAnimationVariants}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <h4 className="text-xl font-semibold">Who We Are</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              SNZ Cyberintellects LLP is a forward-thinking cybersecurity firm committed to helping organizations safeguard their digital assets, infrastructure, and people. We specialize in delivering end-to-end cybersecurity solutions — from risk assessment and compliance to active threat detection, employee awareness, and post-incident recovery.
            </p>
          </motion.div>

          {/* Right - What We Do */}
          <motion.div
            ref={whatWeDoRef}
            initial="hidden"
            animate={isWhatWeDoInView ? 'visible' : 'hidden'}
            variants={scrollAnimationVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 space-y-6"
          >
            <h4 className="text-xl font-semibold">What We Do</h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team of seasoned security experts, ethical hackers, and consultants works at the intersection of technology and trust, ensuring clients stay one step ahead of evolving cyber threats. Driven by innovation and guided by integrity, we partner with businesses, government bodies, and service providers to build safer digital ecosystems.
            </p>
            <a
              href={Info}
              download
              className="inline-block mt-4 bg-[#155A8A] text-white px-5 py-2 rounded-md shadow hover:bg-[#1c5d6c] transition"
            >
              Company Profile
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          ref={imagesRef}
          initial="hidden"
          animate={isImagesInView ? 'visible' : 'hidden'}
          variants={scrollAnimationVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[Aboutimg1, Aboutimg, Aboutimg2].map((img, index) => (
            <img
  key={index}
  src={img}
  alt={`About section visual ${index + 1}`}
  className="w-full aspect-[4/3] object-cover rounded-md shadow-lg"
/>

          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
