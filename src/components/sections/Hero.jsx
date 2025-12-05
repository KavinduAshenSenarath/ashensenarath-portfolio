import { motion } from "framer-motion";

function Hero() {
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
            <div className='pd-30'>
                hi ia a m
            </div>
        </section>
    );
}

export default Hero;
