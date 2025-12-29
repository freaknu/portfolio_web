import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    // Trigger loading animation
    setIsLoaded(true);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {/* Page transition wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-500/30 selection:text-white'>
          {/* Animated gradient background */}
          <div className='fixed top-0 -z-10 h-full w-full'>
            <div className="absolute inset-0 bg-neutral-950" />
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), transparent)",
                  "radial-gradient(ellipse 80% 80% at 60% -10%, rgba(168,85,247,0.25), transparent)",
                  "radial-gradient(ellipse 80% 80% at 40% -20%, rgba(120,119,198,0.3), transparent)",
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          {/* Animated floating orbs */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px]"
              animate={{
                x: [0, 100, 50, 0],
                y: [0, -80, 40, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '5%', left: '5%' }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[100px]"
              animate={{
                x: [0, -100, -50, 0],
                y: [0, 100, -50, 0],
                scale: [1, 0.8, 1.1, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '40%', right: '5%' }}
            />
            <motion.div
              className="absolute w-[350px] h-[350px] rounded-full bg-cyan-600/8 blur-[100px]"
              animate={{
                x: [0, 80, -40, 0],
                y: [0, -60, 60, 0],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: '10%', left: '25%' }}
            />
          </div>
          
          {/* Grid pattern overlay */}
          <div 
            className="fixed inset-0 -z-10 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          <div className='container mx-auto px-8 pt-24'>
            <Navbar />
            
            {/* Animated sections with stagger */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <Projects />
              <Contact />
            </motion.div>
            
            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='py-10 text-center border-t border-neutral-800'
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-neutral-500 text-sm mb-2"
                  whileHover={{ color: "#a855f7" }}
                >
                  Designed & Built by Prabhat Kumar
                </motion.p>
                <p className="text-neutral-600 text-xs">
                  © 2024 • Made with 💜 using React & Framer Motion
                </p>
              </motion.div>
            </motion.footer>
          </div>
          
          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={scrollToTop}
                className='fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg shadow-purple-500/30 z-50 group'
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowUp className="group-hover:scale-110 transition-transform" />
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default App