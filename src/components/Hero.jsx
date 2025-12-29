import React from 'react'
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profile_pic from "../assets/profile_pc.jpg";
import { FaArrowRight, FaGithub } from "react-icons/fa";

// Text reveal animation
const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.03,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.8,
            ease: "easeOut"
        }
    })
};

const Hero = () => {
    const name = "Prabhat Kumar";
    const role = "Java Spring Boot Developer";
    
    return (
        <motion.div 
            className='border-b border-neutral-800 pb-16 lg:mb-20 min-h-[90vh] flex items-center'
            initial="hidden"
            animate="visible"
        >
            <div className='flex flex-wrap w-full items-center'>
                {/* Left Content */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        
                        {/* Greeting */}
                        <motion.p
                            variants={slideUp}
                            custom={0}
                            className="text-purple-400 font-medium mb-4 text-lg"
                        >
                            👋 Hello, I'm
                        </motion.p>
                        
                        {/* Animated Name */}
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 overflow-hidden'>
                            {name.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterAnimation}
                                    className="inline-block hover:text-purple-400 transition-colors duration-200 cursor-default"
                                    whileHover={{ 
                                        scale: 1.2, 
                                        color: "#a855f7",
                                        rotate: [-5, 5, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </h1>
                        
                        {/* Animated Role */}
                        <motion.div
                            variants={slideUp}
                            custom={0.5}
                            className="overflow-hidden mb-6"
                        >
                            <motion.h2 
                                className='text-2xl md:text-3xl lg:text-4xl font-semibold'
                                style={{
                                    background: "linear-gradient(90deg, #a855f7, #ec4899, #a855f7)",
                                    backgroundSize: "200% auto",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                {role}
                            </motion.h2>
                        </motion.div>
                        
                        {/* Description */}
                        <motion.p
                            variants={slideUp}
                            custom={0.8}
                            className='max-w-xl py-4 text-neutral-400 text-lg leading-relaxed'
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        
                        {/* Stats */}
                        <motion.div
                            variants={slideUp}
                            custom={1}
                            className="flex gap-8 my-6"
                        >
                            {[
                                { number: "1+", label: "Years Experience" },
                                { number: "10+", label: "Projects Built" },
                                { number: "5+", label: "Technologies" }
                            ].map((stat, i) => (
                                <motion.div 
                                    key={stat.label}
                                    className="text-center"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <motion.h3 
                                        className="text-3xl font-bold text-purple-400"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.5 + i * 0.2, type: "spring" }}
                                    >
                                        {stat.number}
                                    </motion.h3>
                                    <p className="text-neutral-500 text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        
                        {/* CTA Buttons */}
                        <motion.div
                            variants={slideUp}
                            custom={1.2}
                            className="flex flex-wrap gap-4 mt-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium flex items-center gap-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
                            >
                                Let's Talk
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <FaArrowRight />
                                </motion.span>
                            </motion.a>
                            <motion.a
                                href="https://github.com/freaknu"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-neutral-700 rounded-full text-neutral-300 font-medium hover:bg-neutral-800/50 transition-all duration-300 flex items-center gap-3"
                            >
                                <FaGithub /> GitHub
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
                
                {/* Right Content - Profile Image */}
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                    <div className='flex justify-center lg:justify-end'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
                            className="relative"
                        >
                            {/* Decorative elements */}
                            <motion.div
                                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl"
                                animate={{ 
                                    opacity: [0.5, 0.8, 0.5],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            
                            {/* Rotating border */}
                            <motion.div
                                className="absolute -inset-1 rounded-3xl"
                                style={{
                                    background: "linear-gradient(90deg, #a855f7, #ec4899, #06b6d4, #a855f7)",
                                    backgroundSize: "300% 100%",
                                }}
                                animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Image container */}
                            <motion.div
                                className="relative rounded-3xl overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    className='w-72 md:w-80 lg:w-96 rounded-3xl relative z-10'
                                    src={profile_pic}
                                    alt="Prabhat Kumar"
                                />
                                
                                {/* Overlay on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-20"
                                >
                                    <span className="text-white font-medium">Software Developer</span>
                                </motion.div>
                            </motion.div>
                            
                            {/* Experience badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 1.8, type: "spring" }}
                                className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg z-30"
                            >
                                1+ Years Exp
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero