import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';

const Certificates = () => {
  const [showCertificates, setShowCertificates] = useState(false);

  const certificates = [
    {
      id: 1,
      title: 'National Level Hackathon',
      issuer: 'BGS College of Engineering and Technology (BGSCET)',
      description:
        'Participated in ADVAYA, a 24-hour national level hackathon focused on innovation and problem solving.',
      date: 'April 11–12, 2025',
      image: '/hack.jpeg',
    },
    {
      id: 2,
      title: 'Smart India Internal Hackathon 2025',
      issuer: 'Adichunchanagiri Institute of Technology, Chikkamagaluru',
      description:
        'Participated in SMART HACK-2025 with a notable contribution to the Health theme.',
      date: 'September 17, 2025',
      image: '/hck.jpeg',
    },
    {
      id: 3,
      title: 'Programming in Java',
      issuer: 'NPTEL / IIT Kharagpur',
      description:
        'Completed 12-week NPTEL course on Programming in Java with proctored exam and assignments.',
      date: 'Jul–Oct 2025',
      image: '/npt.jpeg',
    },
    {
      id: 4,
      title: 'CSS, JavaScript, PHP and Python Programming',
      issuer: 'Udemy – Proper Dot Institute',
      description:
        'Completed a comprehensive course covering CSS, JavaScript, PHP, and Python programming.',
      date: 'May 13, 2025',
      image: '/Screenshot 2026-02-28 152638.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certificates" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my hackathon participation and completed courses that highlight my
            learning journey and achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2"
            onClick={() => setShowCertificates((prev) => !prev)}
          >
            <Award size={20} />
            <span>{showCertificates ? 'Hide Certificates' : 'Show Certificates'}</span>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showCertificates && (
            <motion.div
              key="certificates-grid"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                {certificates.map((certificate) => (
                  <motion.div
                    key={certificate.id}
                    variants={itemVariants}
                    className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/15"
                  >
                    <div className="relative h-56 overflow-hidden bg-dark-900">
                      <img
                        src={process.env.PUBLIC_URL + certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-contain bg-dark-900"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
                      <p className="text-primary-300 text-sm font-medium">{certificate.issuer}</p>
                      <p className="text-gray-300 text-sm">{certificate.description}</p>
                      <p className="text-gray-400 text-xs mt-2">{certificate.date}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;

