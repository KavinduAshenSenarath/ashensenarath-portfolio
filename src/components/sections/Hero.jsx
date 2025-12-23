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
    }, [subIndex, deleting, index]);

    return (
        <section className="min-h-screen bg-[#151925] flex items-center px-6 lg:px-40">
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-14">

                {/* LEFT SIDE - TEXT */}
                <div className="text-center lg:text-left text-white max-w-xl z-10">
                    <p className="text-sm mb-2 lg:font-extrabold lg:text-2xl">Hello it’s Me</p>

                    <h1 className="text-3xl lg:text-5xl font-bold mb-2">
                        Ashen Senarath
                    </h1>

                    <h2 className="text-lg lg:text-3xl mb-4">
                        And I'm a{" "}
                        <span className="text-indigo-400 font-semibold">
                            {text}
                        </span>
                        <span className="ml-1 animate-pulse">|</span>
                    </h2>

                    <p className="text-gray-400 mb-6 lg:text-2xl">
                        I design and build modern, responsive, and user-friendly web
                        applications using React and modern frontend technologies.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 border border-indigo-500 rounded-full hover:bg-indigo-600 transition lg:px-8 lg:py-4 lg:font-bold "
                    >
                        Download CV
                    </motion.button>

                    <div className="flex justify-center lg:justify-start gap-4 mt-6 ">
                        <SocialIcon icon={<Github />} />
                        <SocialIcon icon={<Linkedin />} />
                        <SocialIcon icon={<Twitter />} />
                    </div>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="relative flex justify-center lg:justify-end w-full ">
                    <motion.div
                        initial={{ scale: 0, rotate: -30, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute w-60 h-30 lg:w-95 lg:h-40 lg:mt-47 lg:rounded-full lg:rorate-20   bg-indigo-600 rounded-full rotate-20 z-0 mt-30 mb-50"
                    />

                    <img
                        src="/profic-m.png"
                        alt="Profile"
                        className="w-64 lg:w-100 z-10"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
