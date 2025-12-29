import React from 'react';
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from '../constants';
import { FaCode, FaServer, FaCloud, FaMobile } from "react-icons/fa";

const highlights = [
    { icon: FaServer, title: "Backend", desc: "Spring Boot & Microservices" },
    { icon: FaCode, title: "Languages", desc: "Java, JavaScript, SQL" },
    { icon: FaCloud, title: "Cloud", desc: "GCP, Docker, Kubernetes" },
    { icon: FaMobile, title: "Mobile", desc: "Flutter Development" },
];

const About = () => {
    return (
        <div className='border-b border-neutral-800 pb-20'>
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='my-20 text-center'
            >
                <motion.span 
                    className="text-purple-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Get To Know
                </motion.span>
                <h2 className='text-4xl md:text-5xl font-bold mt-2'>
                    About{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>
            </motion.div>
            
            <div className="flex flex-wrap lg:flex-nowrap gap-12 items-center">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-2/5"
                >
                    <div className="relative mx-auto w-fit">
                        {/* Background decoration */}
                        <motion.div
                            className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"
                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        
                        {/* Border animation */}
                        <motion.div
                            className="absolute -inset-1 rounded-2xl opacity-75"
                            style={{
                                background: "linear-gradient(90deg, #a855f7, #ec4899, #a855f7)",
                                backgroundSize: "200% 100%",
                            }}
                            animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        
                        <motion.img 
                            className='rounded-2xl relative z-10 w-full max-w-md' 
                            src={aboutImg} 
                            alt="About me"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </div>
                </motion.div>
                
                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-3/5"
                >
                    {/* Highlight Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                                    borderColor: "rgba(168, 85, 247, 0.5)"
                                }}
                                className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <item.icon className="text-2xl text-purple-400 mb-2" />
                                </motion.div>
                                <h4 className="font-semibold text-white">{item.title}</h4>
                                <p className="text-sm text-neutral-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* About Text */}
                    <motion.p 
                        className="text-neutral-400 leading-relaxed text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {ABOUT_TEXT}
                    </motion.p>
                    
                    {/* Download CV Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-8"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-colors"
                        >
                            Let's Connect
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
