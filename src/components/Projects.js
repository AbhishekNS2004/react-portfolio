import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // TODO: Replace these with your actual projects from your resume
  const projects = [
    {
      id: 1,
      title: 'IVF Companion',
      description: 'Supportive website for IVF patients with cycle tracking, medication reminders, and mental wellness resources. Focus on privacy and calming interface.',
      image: '/ivf-companion.jpeg',
      category: 'fullstack',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'Alchemy'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Ticket Tracker',
      description: 'Real-time show ticket booking app with React frontend and PHP/XAMPP backend for seamless ticket management and booking experience.',
      image: '/tracker-project.png',
      category: 'fullstack',
      technologies: ['ReactJS', 'PHP', 'MySQL', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Brain Tumor Detection',
      description: 'MRI image processing application using ResNet50 with transfer learning, achieving high accuracy in brain tumor detection and classification.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      category: 'backend',
      technologies: ['Python', 'ResNet50', 'HTML'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe },
    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the projects I've worked on from my experience. Each project represents 
            real work and showcases my development skills and expertise.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
              }`}
            >
              <filter.icon size={18} />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="bg-dark-900 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image.startsWith('http') ? project.image : process.env.PUBLIC_URL + project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons removed as requested */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty State - Add your projects here */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="bg-dark-700 rounded-xl p-12 border-2 border-dashed border-dark-600">
              <Code size={64} className="text-gray-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Add Your Projects</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                To showcase your work, add your actual projects from your resume to the projects array in 
                <code className="bg-dark-800 px-2 py-1 rounded text-primary-400">src/components/Projects.js</code>
              </p>
              <div className="bg-dark-800 rounded-lg p-6 text-left max-w-4xl mx-auto">
                <p className="text-gray-400 text-sm mb-3">Example project structure:</p>
                <pre className="text-xs text-gray-300 overflow-x-auto">
{`{
  id: 1,
  title: 'Your Project Title',
  description: 'Description from your resume',
  image: 'path-to-image',
  category: 'frontend', // or 'backend', 'fullstack', 'mobile'
  technologies: ['React', 'Node.js', 'MongoDB'],
  liveUrl: 'https://your-project-url.com',
  githubUrl: 'https://github.com/yourusername/project',
  featured: true
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => {
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
