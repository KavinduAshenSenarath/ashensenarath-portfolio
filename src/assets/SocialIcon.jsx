import { motion } from "framer-motion";

function SocialIcon({ icon }) {
    return (
        <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full bg-gray-700 hover:bg-indigo-500 transition"
        >
            {icon}
        </motion.a>
    );
}

export default SocialIcon;
