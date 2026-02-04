import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Chikkamagaluru, India' },
    { icon: Mail, label: 'Email', value: 'abhishekns142@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7411255177' },
   
  ];

  const achievements = [
    'Developed and deployed  web applications',
    'Led a team of 5 developers in a major project',
    'Achieved 99.9% uptime for production systems',
    'Reduced application load time by 40%',
    
  ];

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate and dedicated developer with a strong foundation in modern web technologies. 
            I love creating innovative solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Personal Information</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors duration-300"
                  >
                    <div className="p-2 bg-primary-500/20 rounded-lg">
                      <info.icon className="text-primary-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Key Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I started my journey in software development with a curiosity to understand how things work 
                behind the scenes. Over the years, I've evolved from a beginner coder to a full-stack developer 
                who can handle both frontend and backend challenges with confidence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My passion lies in creating user-centric applications that not only look great but also 
                provide exceptional user experiences. I believe in writing clean, maintainable code and 
                staying updated with the latest technologies and best practices.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building modern web applications using  various cloud technologies. 
                From concept to deployment, I handle the entire development lifecycle, ensuring that every project 
                meets the highest standards of quality and performance.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm always eager to learn and grow in this 
                ever-evolving field.
              </p>
            </div>

            {/* Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/ressume.pdf';
                link.download = 'resume.pdf';
                link.click();
              }}
            >
              <User size={20} />
              <span>Download Full Resume</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
