import { motion } from "framer-motion"
function Services() {


    return (

        <section id="Services" className="min-h-screen bg-[#151925] py-16 px-4">
            <h2 className="text-center text-2xl font-bold text-white mb-12 lg:text-4xl ">My <span className="text-indigo-400">service</span></h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    className=" mt-5 text-center bg-[#323846] rounded-2xl flex-col justify-center m-8 lg:h-full"  >

                    <div className="flex justify-center mb-4">
                        <motion.img src="service.svg" alt="service picart " className=" w-10 h-10 m-4  " whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} />
                    </div>
                    <h2 className=" font-bold text-[20px] text-white mt-3 mb-6 lg:text-2xl ">UI-UX Design</h2>
                    <p className="text-white text-[15px] mb-10 ml-2 mr-2 lg:text-[18px] " >I craft clean, modern, and user-friendly interfaces that make websites easy to use and visually appealing. My focus is on improving user experience through clear layouts, smooth interactions, and beautiful design.   </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    className=" mt-5 text-center bg-[#323846] rounded-2xl flex-col justify-center m-8 lg:h-full ">
                    <div className="flex justify-center mb-4">
                        <motion.img src="development.svg" alt="development picart " className=" w-10 h-10 m-4  " whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} />
                    </div>
                    <h2 className=" font-bold text-[20px] text-white mt-3 mb-6 lg:text-2xl">Web Development</h2>
                    <p className="text-white text-[15px] mb-10 ml-2 mr-2 lg:text-[18px] " >I build fast, responsive, and fully functional websites using modern web technologies. From frontend UI design to backend integration, I create websites that perform well and deliver a smooth user experience.  </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    className=" mt-5 text-center bg-[#323846] rounded-2xl m-8 flex-col justify-center lg:h-full  ">
                    <div className="flex justify-center mb-4">
                        <motion.img src="marketing.svg" alt="marketing picart " className=" w-10 h-10 m-4  " whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 200 }} />
                    </div>
                    <h2 className=" font-bold text-[20px] text-white mt-3 mb-6 lg:text-2xl ">Degital Marketing</h2>
                    <p className="text-white text-[15px] mb-10 ml-2 mr-2 lg:text-[18px] " >I use digital marketing tools to help businesses promote their products online. By improving online reach and engagement, I help brands grow faster and connect with more people. </p>

                </motion.div>
            </div>
        </section>

    )
}

export default Services