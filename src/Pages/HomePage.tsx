"use client";
import About from "@/Components/AppComponent/About"
import Contact from "@/Components/AppComponent/Contact";
import Hero from "@/Components/AppComponent/Hero"
import { Projects } from "@/Components/AppComponent/Projects"
import Skills from "@/Components/AppComponent/Skills"


const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage
