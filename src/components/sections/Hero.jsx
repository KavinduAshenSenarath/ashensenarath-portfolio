import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import SocialIcon from "../../assets/SocialIcon";


function Hero() {
    const texts = [
        "Front-End Developer",
        "UI/UX Developer",
        "Back-End Developer",
        "Data Analyst",
        "Business Intelligence Analyst",
        "ML Engineer"
    ];

    const floatingAnimation = {
        animate: {
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0]
        },
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    };

    const techIcons = [
        {
            src: "pythonlogo.svg",
            className: "top-[24%] left-[21%] lg:top-[18%] lg:left-[40%]"
        },
        {
            src: "javalogo.svg",
            className: "top-[85%] left-[6%] lg:top-[80%] lg:left-[28%]"
        },
        {
            src: "powerbilogo.svg",
            className: "top-[33%] left-[58%] lg:top-[27%] lg:left-[75%] "
        },
        {
            src: "reactlogo.svg",
            className: "top-[97%] left-[70%] lg:top-[95%] lg:left-[85%]"
        },
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
        <section id="Home" className="min-h-screen bg-[#151925] flex items-center px-6 lg:px-40">
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-14">

                {/* LEFT SIDE - TEXT */}
                <div className="text-center lg:text-left text-white max-w-xl z-10 lg:mt-4">
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
                        Aspiring Business Intelligence Intern skilled in Power BI, Excel, and SQL, focused on turning data into insights. And foundation in MERN stack development.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1gZgWq1bHvTbUJsPq38_UZQwGvB1p1H59/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 border border-indigo-500 rounded-full hover:bg-indigo-600 transition lg:px-8 lg:py-4 lg:font-bold "
                        >
                            Download CV
                        </motion.button> </a>

                    <div className="flex justify-center lg:justify-start gap-4 mt-6 ">
                        <SocialIcon icon={<Github />} link="https://github.com/KavinduAshenSenarath" />
                        <SocialIcon icon={<Linkedin />} link="https://www.linkedin.com/in/kavindu-ashen-senarath-1b3725325" />
                        <SocialIcon icon={<Twitter />} link="https://www.linkedin.com/in/kavindu-ashen-senarath-1b3725325" />
                    </div>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="relative flex justify-center lg:justify-end w-full ">
                    <motion.div
                        initial={{ scale: 0, rotate: -30, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute w-60 h-30 lg:w-95 lg:h-40 lg:mt-47 lg:rounded-full lg:rorate-20   bg-indigo-600 rounded-full rotate-20 z-0 mt-39 mb-50 "
                    />
                    {/*Tech icons  */}
                    {techIcons.map((icon, index) => (
                        < motion.div
                            key={index}
                            className={`absolute ${icon.className} w-12 h-12 lg:w-14 lg:h-14 bg-[#1e2337] rounded-full flex items-center justify-center shadow-lg `}
                            animate={floatingAnimation.animate}
                            transition={{
                                ...floatingAnimation.transition,
                                delay: index * 0.3,
                            }}
                        >
                            <img src={icon.src} alt="tech" className="w-6 lg:w-8" />
                        </motion.div>
                    ))}

                    <img
                        src="/profic-m.png"
                        alt="Profile"
                        className="w-64 lg:w-100 lg:mt-0 z-10 mt-12"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
