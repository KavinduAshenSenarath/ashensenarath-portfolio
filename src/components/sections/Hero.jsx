import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import SocialIcon from "../../assets/SocialIcon";

function Hero() {
    const texts = [
        "Front-End Developer",
        "UI/UX Developer",
        "Back-End Developer",
    ];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!deleting && subIndex === texts[index].length) {
                setTimeout(() => setDeleting(true), 700);
                return;
            }

            if (deleting && subIndex === 0) {
                setDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
                return;
            }

            setSubIndex((prev) => prev + (deleting ? -1 : 1));
            setText(texts[index].substring(0, subIndex));
        }, deleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);

    return (
        <section
            id="hero"
            className="h-screen flex items-center justify-center bg-[#151925]"
        >
            <motion.div
                initial={{ scale: 0, rotate: -30, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute w-60 h-30 bg-indigo-600 rounded-full rotate-20 z-0 mt-20 mb-50"
            ></motion.div>

            <img
                src="profic-m.png"
                alt="Profile"
                className="w-64 z-10 absolute pb-50"
            />
            <div className="text-center z-10 mt-100 text-white">
                <p className='text-sm mb-2'>Hello it's Me</p>

                <h1 className="text-3xl font-bold mb-1">
                    Ashen senarath </h1>
                <h2 className="text-lg mb-4" > And I'm a {" "} <span className="text-indigo-400 font-semibold">{text}</span> <span className="ml-1 animate-pulse">|</span></h2>
                <p className="text-gray-400 max-w-md mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border border-indigo-500 rounded-full text-white hover:bg-indigo-600 hover:text-white transition">
                    Download CV
                </motion.button>
                <div className="flex justify-center gap-4 mt-4">
                    <SocialIcon icon={<Github />} />
                    <SocialIcon icon={<Linkedin />} />
                    <SocialIcon icon={<Twitter />} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
