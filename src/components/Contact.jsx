import React from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="border-b border-neutral-800 pb-20">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="my-20 text-center"
            >
                <motion.span 
                    className="text-purple-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.span>
                <h2 className='text-4xl md:text-5xl font-bold mt-2'>
                    Let's{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Connect
                    </span>
                </h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-neutral-400 mt-4 max-w-md mx-auto"
                >
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </motion.p>
            </motion.div>

            {/* Contact Cards */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Email Card */}
                <motion.a
                    href={`mailto:${CONTACT.email}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative z-10">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4"
                        >
                            <FaEnvelope className="text-2xl text-purple-400" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                        <p className="text-purple-400 text-sm group-hover:text-purple-300 transition-colors">
                            {CONTACT.email}
                        </p>
                    </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                    href={`tel:${CONTACT.phoneNo}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 hover:border-green-500/50 transition-all duration-500 overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative z-10">
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4"
                        >
                            <FaPhone className="text-2xl text-green-400" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                        <p className="text-green-400 text-sm group-hover:text-green-300 transition-colors">
                            {CONTACT.phoneNo}
                        </p>
                    </div>
                </motion.a>

                {/* Location Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative z-10">
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4"
                        >
                            <FaMapMarkerAlt className="text-2xl text-blue-400" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                        <p className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                            {CONTACT.address}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
            >
                <p className="text-neutral-400 mb-6">Or find me on</p>
                <div className="flex justify-center gap-4">
                    <motion.a
                        href="https://linkedin.com/in/prabhat-kumar-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                    >
                        <FaLinkedin className="text-xl" />
                    </motion.a>
                    <motion.a
                        href="https://github.com/Prabhat-21"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-white shadow-lg shadow-neutral-500/20 hover:shadow-neutral-500/40 transition-all"
                    >
                        <FaGithub className="text-xl" />
                    </motion.a>
                </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
            >
                <motion.a
                    href={`mailto:${CONTACT.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] hover:bg-right rounded-xl text-lg font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500"
                >
                    <FaPaperPlane className="animate-bounce" />
                    Send Me a Message
                </motion.a>
            </motion.div>
        </div>
    );
}

export default Contact;