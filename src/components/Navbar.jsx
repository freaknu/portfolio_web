import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/prabhat-kumar-16b87421b/", color: "hover:text-blue-500", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/freaknu", color: "hover:text-white", label: "GitHub" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/pk2239/", color: "hover:text-yellow-500", label: "LeetCode" },
    { icon: FaInstagram, href: "https://www.instagram.com/stories/freak._yv/", color: "hover:text-pink-500", label: "Instagram" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800 py-4' 
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-8 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img 
                        className="w-10" 
                        src={logo} 
                        alt="logo"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hidden sm:block"
                    >
                        PK
                    </motion.span>
                </motion.a>
                
                {/* Social Icons */}
                <div className="flex items-center gap-1">
                    {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
                        <motion.a 
                            key={label}
                            href={href}
                            target="_blank" 
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-3 text-xl text-neutral-400 ${color} transition-all duration-200 rounded-full hover:bg-neutral-800/50`}
                            aria-label={label}
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
