import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
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
                    My Journey
                </motion.span>
                <h2 className='text-4xl md:text-5xl font-bold mt-2'>
                    Work{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>
            </motion.div>
            
            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute left-0 md:left-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-1/2"
                />
                
                {EXPERIENCE.map((exp, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
                    >
                        {/* Timeline dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            viewport={{ once: true }}
                            className={`absolute top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-neutral-950 z-10 
                                ${i % 2 === 0 ? 'left-0 md:-right-2 md:left-auto' : 'left-0 md:-left-2'}`}
                        />
                        
                        {/* Card */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="ml-8 md:ml-0 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                        >
                            {/* Header */}
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
                                    <motion.h3 
                                        className="text-xl font-bold text-white flex items-center gap-2"
                                        whileHover={{ color: "#a855f7" }}
                                    >
                                        <FaBriefcase className="text-purple-400" />
                                        {exp.role}
                                    </motion.h3>
                                    <p className="text-purple-400 font-medium mt-1">{exp.company}</p>
                                </div>
                                <div className="text-right text-sm">
                                    <p className="text-neutral-400 flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-pink-400" />
                                        {exp.location}
                                    </p>
                                    <p className="text-neutral-400 flex items-center gap-2 mt-1">
                                        <FaCalendarAlt className="text-green-400" />
                                        {exp.duration}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Responsibilities */}
                            <ul className="space-y-3">
                                {exp.responsibilities.map((resp, j) => (
                                    <motion.li 
                                        key={j}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + j * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-neutral-300 text-sm group"
                                    >
                                        <motion.span
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                                        </motion.span>
                                        <span className="group-hover:text-white transition-colors">{resp}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
