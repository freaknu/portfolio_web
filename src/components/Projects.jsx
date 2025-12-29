import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaRocket, FaServer, FaDatabase } from "react-icons/fa";

const Projects = () => {
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
                    What I've Built
                </motion.span>
                <h2 className='text-4xl md:text-5xl font-bold mt-2'>
                    Featured{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>
            </motion.div>
            
            {/* Projects Grid */}
            <div className="space-y-16">
                {PROJECTS.map((project, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Project Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border border-neutral-800 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden group"
                        >
                            {/* Background glow */}
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            
                            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                                {/* Project Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="lg:w-2/5"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        className="relative rounded-2xl overflow-hidden group/image"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto rounded-2xl"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent flex items-end justify-center pb-6 opacity-0 group-hover/image:opacity-100 transition-opacity"
                                        >
                                            <span className="flex items-center gap-2 text-white font-medium">
                                                <FaRocket /> View Project
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                
                                {/* Project Details */}
                                <div className="lg:w-3/5 flex flex-col">
                                    {/* Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3"
                                    >
                                        <motion.span
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <FaRocket className="text-purple-400" />
                                        </motion.span>
                                        {project.title}
                                    </motion.h3>
                                    
                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="text-neutral-400 leading-relaxed mb-6"
                                    >
                                        {project.description}
                                    </motion.p>
                                    
                                    {/* Tech Stack */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex flex-wrap gap-2 mb-6"
                                    >
                                        {project.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + idx * 0.05 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.3)" }}
                                                className="px-4 py-1.5 rounded-full bg-neutral-800 text-sm font-medium text-purple-300 border border-neutral-700 hover:border-purple-500 transition-all cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                    
                                    {/* Live Links */}
                                    {project.liveLinks && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                            viewport={{ once: true }}
                                            className="flex flex-wrap gap-3 mt-auto"
                                        >
                                            <motion.a
                                                href={project.liveLinks.frontend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl text-sm font-medium shadow-lg shadow-purple-500/20 transition-all"
                                            >
                                                <FaExternalLinkAlt /> Live Demo
                                            </motion.a>
                                            <motion.a
                                                href={project.liveLinks.swagger}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-xl text-sm font-medium shadow-lg shadow-green-500/20 transition-all"
                                            >
                                                <FaServer /> API Docs
                                            </motion.a>
                                            <motion.a
                                                href={project.liveLinks.eureka}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/20 transition-all"
                                            >
                                                <FaDatabase /> Eureka
                                            </motion.a>
                                            <motion.a
                                                href={project.liveLinks.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl text-sm font-medium transition-all"
                                            >
                                                <FaGithub /> Code
                                            </motion.a>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
