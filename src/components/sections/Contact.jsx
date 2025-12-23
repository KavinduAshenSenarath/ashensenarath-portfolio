import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        emailjs
            .sendForm(
                "service_wit1bdc",
                "template_k2mu4g5",
                e.target,
                "OVN35Y1UhVVzU2tiG"
            )
            .then(() => {
                setLoading(false);
                setSuccess(true);
                e.target.reset();
            })
            .catch(() => {
                setLoading(false);
                alert("Message failed, please try again");
            });
    };

    /* animations */
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const glowProperty = {
        focused: {
            boxShadow:
                "0 0 12px rgba(99,102,241,0.6), 0 0 4px rgba(99,102,241,1)",
            borderColor: "rgb(99 102 241)"
        },
        unfocused: {
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            borderColor: "transparent"
        }
    };

    const inputClass =
        "w-full bg-[#323846] rounded-3xl text-gray-300 placeholder-gray-500 px-5 py-4 border-none focus:outline-none";

    return (
        <section
            id="contact"
            className="min-h-screen bg-[#151925] px-4 sm:px-8 md:px-16 py-24 flex items-center justify-center"
        >
            <motion.div
                className="w-full max-w-3xl bg-[#1a1f2e] rounded-3xl p-6 sm:p-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-white text-2xl font-bold text-center mb-10"
                    variants={itemVariants}
                >
                    Contact <span className="text-indigo-400">Me</span>
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={itemVariants}
                    >
                        <motion.input
                            name="first_name"
                            type="text"
                            placeholder="First Name"
                            className={inputClass}
                            variants={glowProperty}
                            whileFocus="focused"
                            animate="unfocused"
                            required
                        />
                        <motion.input
                            name="last_name"
                            type="text"
                            placeholder="Last Name"
                            className={inputClass}
                            variants={glowProperty}
                            whileFocus="focused"
                            animate="unfocused"
                            required
                        />
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={itemVariants}
                    >
                        <motion.input
                            name="phone"
                            type="tel"
                            placeholder="Mobile Number"
                            className={inputClass}
                            variants={glowProperty}
                            whileFocus="focused"
                            animate="unfocused"
                            required
                        />
                        <motion.input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className={inputClass}
                            variants={glowProperty}
                            whileFocus="focused"
                            animate="unfocused"
                            required
                        />
                    </motion.div>

                    {/* Message */}
                    <motion.textarea
                        name="message"
                        placeholder="Type Your Message Here!"
                        rows="6"
                        className={`${inputClass} resize-none`}
                        variants={glowProperty}
                        whileFocus="focused"
                        animate="unfocused"
                        required
                    />

                    {/* Button */}
                    <motion.button
                        type="submit"
                        disabled={loading}
                        className={`w-fit px-8 py-3 border-2 rounded-2xl text-white font-bold text-[17px]
              ${loading
                                ? "border-indigo-600 opacity-70 cursor-not-allowed"
                                : "border-indigo-400"
                            }`}
                        whileHover={!loading && { scale: 1.05 }}
                        whileTap={!loading && { scale: 0.95 }}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>

                    {success && (
                        <motion.p className="text-green-400 text-center mt-4">
                            Message sent successfully
                        </motion.p>
                    )}
                </form>
            </motion.div>
        </section>
    );
}

export default Contact;
