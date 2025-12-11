import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            id: 1,
            image: "medical-app.png",
            title: "UWU Medical Web App",
            Discription:
                "This MERN-based Medical Request System digitalizes student medical services at Uva Wellassa University. I contributed by integrating the frontend with backend APIs and building UI features for profiles, prescriptions, and request updates to make the system simple and efficient."
        }
    ];

    return (
        <section id="portfolio" className="min-h-screen bg-[#151925] py-10">
            <h2 className="text-white text-2xl text-center font-bold">
                My <span className="text-indigo-400">Projects</span>
            </h2>

            <div className="space-y-6">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-5 text-center bg-[#323846] rounded-2xl m-8 p-5 border border-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-all duration-300"
                    >
                        {/* Title */}
                        <div className="text-white text-center text-2xl font-semibold mb-4">
                            {project.title}
                        </div>

                        {/* Project Image */}
                        <motion.div
                            className="flex justify-center mb-4"
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-[300px] rounded-xl shadow-md"
                            />
                        </motion.div>

                        {/* Description */}
                        <p className="text-white text-[15px] text-center m-2">
                            {project.Discription}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
