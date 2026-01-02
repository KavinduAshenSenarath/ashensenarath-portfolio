import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            id: 1,
            image: "medical-app.png",
            title: "UWU Medical Web App",
            link: "https://github.com/LaKrUwaNS/UWU_Medical",
            Discription:
                "This MERN-based Medical Request System digitalizes student medical services at Uva Wellassa University. I contributed by integrating the frontend with backend APIs and building UI features for profiles, prescriptions, and request updates to make the system simple and efficient."
        },
        {
            id: 2,
            image: "ictforyou.png",
            title: "ICT 4 YOU Learning Platform",
            link: "https://github.com/KavinduAshenSenarath/IctForYou",
            Discription:
                "ICT Learning Platform – A MERN stack–based web application designed for Grade 6 to A/L students to access ICT lessons, videos, quizzes, and notes. Features secure authentication, responsive UI with Tailwind CSS, and structured content aligned with the Sri Lankan ICT syllabus."
        },
        {
            id: 3,
            image: "jobdemand.png",
            title: "Job Market & Skill Demand Analysis",
            link: "https://github.com/KavinduAshenSenarath/Job-Market-Skill-Demand-Analytics",
            Discription:
                "Python & PostgreSQL data analytics project that analyzes real-world job postings to identify in-demand skills, salary trends, and remote work opportunities with meaningful visual insights."
        }

    ];

    return (
        <section id="Projects" className="min-h-screen bg-[#151925] py-10">
            <h2 className="text-white text-2xl text-center font-bold lg:text-4xl mb-12 mt-4">
                My <span className="text-indigo-400">Projects</span>
            </h2>

            <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto px-4">
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
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mb-8 mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                            Read More
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
