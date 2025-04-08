import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiExternalLink } from 'react-icons/fi';
import Navbar from './components/Navbar';

const projects = [
  {
    title: 'Boteco',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/src/assets/boteco-project.jpg',
    github: '#',
    live: '#',
  },
];

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="section bg-secondary pt-32">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left md:w-1/2"
            >
              <h1 className="heading">Hi, I'm <span className="text-accent">Reginald John</span></h1>
              <p className="subheading">Full Stack Developer & UI/UX Designer</p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn border border-white/20 hover:bg-white/10">Contact Me</a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative md:w-1/2"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
                <img
                  src="/src/assets/profile.png"
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/10"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-full"
                >
                  <span className="text-white font-bold">Student</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading">About Me</h2>
            <p className="subheading max-w-3xl">
              I'm a passionate developer with expertise in building modern web applications.
              I love creating beautiful, functional, and user-friendly experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-secondary rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading">My Projects</h2>
            <div className="max-w-3xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary rounded-lg overflow-hidden shadow-xl"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover bg-white" 
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a href={project.github} className="text-gray-400 hover:text-accent transition-colors">
                        <FiGithub size={24} />
                      </a>
                      <a href={project.live} className="text-gray-400 hover:text-accent transition-colors">
                        <FiExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading">Get In Touch</h2>
            <p className="subheading">I'm always open to new opportunities and collaborations.</p>
            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-2xl hover:text-accent transition-colors">
                <FiGithub />
              </a>
              <a href="#" className="text-2xl hover:text-accent transition-colors">
                <FiLinkedin />
              </a>
              <a href="#" className="text-2xl hover:text-accent transition-colors">
                <FiTwitter />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default App;
