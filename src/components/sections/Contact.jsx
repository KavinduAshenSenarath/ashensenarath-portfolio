import { motion } from "framer-motion";
function Contact() {
    const glowProperty = {
        focused: {
            boxShadow: "0 0 12px rgba(99, 102, 241, 0.7), 0 0 4px rgba(99, 102, 241, 1)",
            borderColor: "rgb(99 102 241)",
            transition: { duration: 0.25 }
        },
        unfocused: {
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            borderColor: "transparent",
            transition: { duration: 0.2 }
        }
    };
    const inputClass = "w-full bg-[#323846] rounded-3xl text-gray-300 placeholder-gray-500 px-4 py-4 mt-5 border-none focus:outline-none focus:ring-0";



    return (
        <section id="contact" className="h-screen bg-[#151925]">
            <h2 className="font-bold text-white text-2xl text-center"> Contact <span className="text-indigo-400">Me</span></h2>
            <div className="space-y-6 ">
                <div

                    className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-3 mr-3">
                    <motion.input className={inputClass} type="text" placeholder=" First Name " variants={glowProperty} whileFocus="focused" animate="unfocused" />
                    <motion.input className={inputClass} type="text" placeholder=" Last Name " variants={glowProperty} whileFocus="focused" animate="unfocused" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-3 mr-3">
                    <motion.input className={inputClass} type="tel" placeholder=" Mobile Number " variants={glowProperty} whileFocus="focused" animate="unfocused" />
                    <motion.input className={inputClass} type="email" placeholder=" Email Address " variants={glowProperty} whileFocus="focused" animate="unfocused" />
                </div>
                <div className="ml-3 mr-3">
                    <motion.textarea className={inputClass} placeholder=" Type Your Message Here! " rows="8" variants={glowProperty} whileFocus="focused" animate="unfocused" />
                </div>
                <div className="ml-5 ">
                    <motion.button className="px-4 py-1 border-indigo-400 border-2 rounded-2xl text-white font-bold text-[17px] " whileHover={{ scale: 1.06, boxShadow: "0 0 15px rgba(99,102,241,0.8), 0 0 20px rgba(168,85,247,0.6)" }} whileTap={{ scale: 0.94 }} transition={{ duration: 0.2 }}>send</motion.button>
                </div>

            </div>
        </section>
    )
}

export default Contact