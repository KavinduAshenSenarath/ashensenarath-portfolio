import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import Skillbar from "./components/sections/Skillbar"
import Footer from "./components/layout/Footer"

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skillbar />
      <Contact />
      <Footer />
    </>
  )
}

export default App
