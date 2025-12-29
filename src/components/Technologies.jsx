import React, { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiMysql, SiFlutter, SiElasticsearch, SiDocker } from "react-icons/si";
import { HiCubeTransparent } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { TECHNOLOGIES } from "../constants";

const iconComponents = {
    FaJava,
    SiSpringboot,
    SiApachekafka,
    SiMysql,
    SiFlutter,
    SiElasticsearch,
    SiDocker,
    RiReactjsLine,
    FaMicroservices: HiCubeTransparent
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 150, damping: 15 }
    }
};

const TechCard = ({ tech, index, onHover, onLeave }) => {
    const IconComponent = iconComponents[tech.icon];
    
    const getRatingColor = () => {
        if (tech.rating >= 9) return "bg-green-500";
        if (tech.rating >= 7) return "bg-yellow-500";
        return "bg-blue-500";
    };

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ 
                scale: 1.1,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 20 }
            }}
            onMouseEnter={(e) => onHover(tech, e)}
            onMouseLeave={onLeave}
            className="group relative rounded-2xl border-2 border-neutral-800 p-5 cursor-pointer hover:border-purple-500/60 transition-all duration-200 bg-neutral-900/50 backdrop-blur-sm"
            style={{
                boxShadow: "0 0 0 rgba(168, 85, 247, 0)"
            }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Glow effect on hover */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at center, ${tech.bgGlow}, transparent 70%)`,
                    filter: "blur(20px)",
                    zIndex: -1
                }}
            />
            
            {/* Rating badge */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
                className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${getRatingColor()} text-black shadow-lg`}
            >
                {tech.rating}
            </motion.div>
            
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            >
                <IconComponent className={`text-5xl md:text-6xl ${tech.color} transition-all duration-200 group-hover:scale-110`} />
            </motion.div>
            
            <p className="text-center text-xs text-neutral-500 mt-3 font-medium group-hover:text-neutral-300 transition-colors">
                {tech.name}
            </p>
        </motion.div>
    );
};

const TechTooltip = ({ tech, position }) => {
    const getRatingGradient = () => {
        if (tech.rating >= 9) return "from-green-500 to-emerald-400";
        if (tech.rating >= 7) return "from-yellow-500 to-amber-400";
        return "from-blue-500 to-cyan-400";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed z-[100] w-72 md:w-80 p-5 bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/40 shadow-2xl"
            style={{
                top: Math.max(20, position.y - 280),
                left: Math.min(Math.max(20, position.x - 160), window.innerWidth - 340),
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
            }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${tech.color} bg-neutral-800 flex items-center justify-center`}>
                    {React.createElement(iconComponents[tech.icon], { className: `text-2xl ${tech.color}` })}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        tech.expertise === "Expert" ? "bg-green-500/20 text-green-400" :
                        tech.expertise === "Advanced" ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-blue-500/20 text-blue-400"
                    }`}>
                        {tech.expertise}
                    </span>
                </div>
            </div>
            
            {/* Rating bar */}
            <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-neutral-400">Proficiency</span>
                    <span className="font-bold text-white">{tech.rating}/10</span>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.rating * 10}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${getRatingGradient()}`}
                    />
                </div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-neutral-300 mb-3 leading-relaxed">{tech.description}</p>
            
            {/* Why I use it */}
            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <p className="text-xs text-purple-400 font-semibold mb-1 flex items-center gap-1">
                    💡 Why I use it
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed">{tech.whyUse}</p>
            </div>
            
            {/* Arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-neutral-900/95 border-r border-b border-purple-500/40 rotate-45" />
        </motion.div>
    );
};

const Technologies = () => {
    const [hoveredTech, setHoveredTech] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleHover = (tech, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPosition({
            x: rect.left + rect.width / 2,
            y: rect.top
        });
        setHoveredTech(tech);
    };

    return (
        <div className="border-b border-neutral-800 pb-24 relative">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="my-20 text-center text-4xl font-light"
            >
                My Tech{" "}
                <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Arsenal
                </span>
            </motion.h2>
            
            {/* Legend */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm"
            >
                {[
                    { color: "bg-green-500", label: "Expert (9-10)" },
                    { color: "bg-yellow-500", label: "Advanced (7-8)" },
                    { color: "bg-blue-500", label: "Intermediate" }
                ].map(({ color, label }) => (
                    <div key={label} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${color}`} />
                        <span className="text-neutral-400">{label}</span>
                    </div>
                ))}
            </motion.div>

            {/* Tech Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
            >
                {TECHNOLOGIES.map((tech, index) => (
                    <TechCard 
                        key={tech.name} 
                        tech={tech} 
                        index={index}
                        onHover={handleHover}
                        onLeave={() => setHoveredTech(null)}
                    />
                ))}
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
                {hoveredTech && (
                    <TechTooltip tech={hoveredTech} position={tooltipPosition} />
                )}
            </AnimatePresence>
            
            {/* Hint */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-neutral-600 text-sm mt-10"
            >
                ✨ Hover to explore each technology
            </motion.p>
        </div>
    );
};

export default Technologies;
