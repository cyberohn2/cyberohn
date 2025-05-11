import { About, Contact, Hero, ProjectGallery, SkillSection, TechStack } from "@/Components";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <SkillSection />
      <TechStack />
      <ProjectGallery />
      <Contact />
    </main>
  );
}
