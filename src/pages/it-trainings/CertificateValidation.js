import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CertificateValidation = () => {
  const [certNumber, setCertNumber] = useState('');
  const [result, setResult] = useState(null); // true or false
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidate = async () => {
    setError('');
    setResult(null);
    setShowModal(false);
    setIsLoading(true);

    try {
      const res = await axios.get(`http://localhost:5000/validate/${certNumber}`);

      if (res.data.valid === true) {
        setResult(true);
        setShowModal(true);
        toast.success('Certificate is valid!');
      } else {
        setResult(false);
        setShowModal(true);
        toast.error('Certificate is invalid.');
      }
    } catch (err) {
      if (err.response && (err.response.status === 404 || err.response.status === 400)) {
        setResult(false);
        setShowModal(true);
        toast.error('Certificate not found.');
      } else {
        setError('Server error. Please try again.');
        toast.error('⚠️ Server error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setResult(null);
    setCertNumber('');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-[#0a0a0a] dark:to-[#111827] transition-all duration-500">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <motion.h2
        className="text-4xl font-extrabold text-[#155A8A] dark:text-blue-400 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certificate Validation
      </motion.h2>

      <motion.p
        className="text-lg mb-6 text-center dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Enter your certificate number to verify its authenticity:
      </motion.p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
        <input
          type="text"
          className="w-full p-3 border rounded-md shadow-sm text-black dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Certificate Number"
          value={certNumber}
          onChange={(e) => setCertNumber(e.target.value)}
          disabled={isLoading}
        />
        <button
          onClick={handleValidate}
          disabled={isLoading || !certNumber}
          className={`px-6 py-3 rounded-md text-white transition ${
            isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#155A8A] hover:bg-[#0f3f63]'
          }`}
        >
          {isLoading ? (
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
            />
          ) : (
            'Validate'
          )}
        </button>
      </div>

      {error && (
        <motion.div
          className="mt-6 text-red-500 text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-2xl w-[90%] max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                {result ? (
                  <FaCheckCircle className="text-green-500 text-3xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 text-3xl" />
                )}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {result ? 'Certificate is Valid' : 'Invalid Certificate'}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {result
                  ? 'Your certificate has been successfully validated. Congratulations!'
                  : 'We could not find a matching certificate. Please verify the number or contact support.'}
              </p>
              <div className="text-right mt-6">
                <button
                  onClick={closeModal}
                  className="bg-[#155A8A] text-white px-4 py-2 rounded hover:bg-[#0f3f63]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificateValidation;
