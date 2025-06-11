// src/components/CourseCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // If using React Router

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const CourseCard = ({
  icon,
  tag,
  title,
  description,
  className = '',
  iconClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  bgColorLight = 'bg-white',
  bgColorDark = 'dark:bg-gray-800',
  textColorLight = 'text-gray-800',
  textColorDark = 'dark:text-white',
  borderColor = 'border-gray-200 dark:border-gray-700'
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`${className} ${bgColorLight} ${bgColorDark} rounded-2xl overflow-hidden shadow-md border ${borderColor} transition-all duration-300`}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {icon && (
            <img
              src={icon}
              alt={title}
              className={`${iconClassName} w-12 h-12 rounded-md object-cover shadow-md`}
            />
          )}
          <Link
            to={`/it-trainings/${slugify(tag)}`}
            className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-black/30 backdrop-blur-sm ${textColorLight} ${textColorDark} hover:underline hover:scale-105 transition-transform`}
          >
            {tag}
          </Link>
        </div>
        <h3 className={`text-lg font-bold mb-2 ${titleClassName} ${textColorLight} ${textColorDark}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${descriptionClassName} text-gray-700 dark:text-gray-300`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default CourseCard;
