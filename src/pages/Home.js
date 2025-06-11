import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

import Aboutimg from '../img/About2.jpg';
import Aboutimg1 from '../img/About1.jpg';
import Aboutimg2 from '../img/About1222.avif';
import HeroImage from '../img/hero33.jpg';
import HeroImage2 from '../img/hero23.jpg';
import Info from '../pdf/Copy of SNZ CYBER INTELLECTS (3).pdf';

const slides = [
  {
    heading: "Empowering Your Digital World with Reliable",
    subheading: "Cyber Protection",
    paragraph: "Stay ahead of evolving cyber threats with our cutting-edge cybersecurity solutions.",
    serviceLink: "/services",
    trainingLink: "/it-trainings",
    image: HeroImage,
  },
  {
    heading: "Experience Tech Learning That Works",
    subheading: "Real-World Tech Education",
    paragraph: "Get certified with cutting-edge skills and practical learning designed for modern IT careers.",
    serviceLink: "/services",
    trainingLink: "/it-trainings",
    image: HeroImage2, // ← Different image used here
  },
];

const scrollAnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HomeWithAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.clientWidth * nextIndex,
          behavior: 'smooth',
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const imagesRef = useRef(null);

  const isWhoWeAreInView = useInView(whoWeAreRef, { margin: '-100px' });
  const isWhatWeDoInView = useInView(whatWeDoRef, { margin: '-100px' });
  const isImagesInView = useInView(imagesRef, { margin: '-100px' });

  return (
    <div className="w-full pt-16 overflow-hidden min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-950 dark:bg-gray-900 text-blue dark:text-white min-h-screen flex items-center pb-20 pt-12">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide w-full h-full items-center"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center justify-center gap-10 min-w-full snap-start px-9 py-16"
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 text-center lg:text-left"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    {slide.heading}
                    <br />
                    <span className="text-[#155A8A] dark:text-cyan-400">{slide.subheading}</span>
                  </h1>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl mt-4">
                    {slide.paragraph}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 flex justify-center"
                >
                  <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#155A8A]/40 dark:bg-black/40" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2 space-y-3 pr-1 hidden md:flex flex-col items-end">
        <Link to="/contact" className="w-10 h-10 flex items-center justify-center bg-[#155A8A] text-white rounded-l-md shadow-md hover:bg-[#1f96b0]">💬</Link>
        <a href="tel:+918108108486" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-l-md shadow-md hover:bg-blue-700"><FaPhoneAlt /></a>
        <a href="https://wa.me/918108108486" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-l-md shadow-md hover:bg-green-600"><FaWhatsapp /></a>
      </div>

      {/* Mobile Footer Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-600 flex justify-center gap-6 p-3 md:hidden">
        <Link to="/contact" className="w-12 h-12 flex items-center justify-center bg-[#155A8A] text-white rounded-full shadow hover:bg-[#1f96b0] text-xl">💬</Link>
        <a href="tel:+918108108486" className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 text-xl"><FaPhoneAlt /></a>
        <a href="https://wa.me/918108108486" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow hover:bg-green-600 text-xl"><FaWhatsapp /></a>
      </div>

      {/* About Section */}
      <section className="bg-[#fcfcfc] dark:bg-gray-900 text-black dark:text-white text-center pt-10 pb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">ABOUT SNZ CYBER INTELLECTS</h2>
        <p className="mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Empowering Your Digital World with Reliable Cyber Protection
        </p>
      </section>

      {/* Company Info Section */}
      <section className="bg-white dark:bg-gray-950 py-12 scroll-pt-52 px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            ref={whoWeAreRef}
            initial="hidden"
            animate={isWhoWeAreInView ? 'visible' : 'hidden'}
            variants={scrollAnimationVariants}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h4 className="font-bold text-lg">Who We Are</h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              SNZ Cyberintellects LLP is a forward-thinking cybersecurity firm committed to helping organizations safeguard their digital assets, infrastructure, and people. We specialize in delivering end-to-end cybersecurity solutions — from risk assessment and compliance to active threat detection, employee awareness, and post-incident recovery.
            </p>
          </motion.div>

          <motion.div
            ref={whatWeDoRef}
            initial="hidden"
            animate={isWhatWeDoInView ? 'visible' : 'hidden'}
            variants={scrollAnimationVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h4 className="font-bold text-lg">What We Do</h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              Our team of seasoned security experts, ethical hackers, and consultants works at the intersection of technology and trust, ensuring clients stay one step ahead of evolving cyber threats. Driven by innovation and guided by integrity, we partner with businesses, government bodies, and service providers to build safer digital ecosystems.
            </p>
            <div className="mt-6">
              <a href={Info} download className="bg-[#155A8A] text-white px-5 py-2 rounded-md shadow hover:bg-[#173136] transition">
                Company Profile
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
  ref={imagesRef}
  initial="hidden"
  animate={isImagesInView ? 'visible' : 'hidden'}
  variants={scrollAnimationVariants}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
>
  {[Aboutimg, Aboutimg1, Aboutimg2].map((img, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="w-full max-w-xs aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={img}
        alt={`About ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ))}
</motion.div>
      </section>
    </div>
  );
};

export default HomeWithAbout;
