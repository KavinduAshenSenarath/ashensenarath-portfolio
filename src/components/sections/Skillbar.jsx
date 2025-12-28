import { motion } from 'framer-motion';
import { useState } from 'react';

const TECHNOLOGIES = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB"
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248"
    },
    {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#FFFFFF"
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933"
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#3776AB"
    },
    {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        color: "#150458"
    },
    {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        color: "#013243"
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#336791"
    }
];
function Technologies() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { scale: 0, rotate: -180, opacity: 0 },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };
    return (
        <section className="bg-[#151925] py-16 px-4">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto bg-[#323846] rounded-2xl p-8 border border-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.3) lg:bg-transparent lg:rounded-none lg:p-0 lg:border-none lg:shadow-none"
            >
                <div className="flex flex-wrap justify-center gap-8">
                    {TECHNOLOGIES.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.15,
                                transition: { duration: 0.3 }
                            }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="relative flex flex-col items-center cursor-pointer group"
                        >
                            <motion.div
                                className="absolute inset-0 rounded-xl blur-xl -z-10"
                                style={{ backgroundColor: tech.color }}
                                animate={{
                                    opacity: hoveredIndex === index ? 0.4 : 0,
                                    scale: hoveredIndex === index ? 1.5 : 1
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            <motion.div
                                className="w-15 h-15 lg:w-20 lg:h-20 bg-[#1e2330] rounded-xl p-4 border-2 flex items-center justify-center"
                                style={{
                                    borderColor: hoveredIndex === index ? tech.color : 'transparent'
                                }}
                                animate={{
                                    backgroundColor: hoveredIndex === index
                                        ? `${tech.color}20`
                                        : '#1e2330',
                                    boxShadow: hoveredIndex === index
                                        ? `0 0 20px ${tech.color}80`
                                        : '0 0 0 transparent'
                                }}
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            <motion.span
                                className="mt-3 text-sm lg:text-base font-semibold text-center"
                                animate={{
                                    color: hoveredIndex === index ? tech.color : '#ffffff',
                                    scale: hoveredIndex === index ? 1.05 : 1
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {tech.name}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </section>
    );
}

export default Technologies;