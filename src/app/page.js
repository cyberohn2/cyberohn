import { About, Contact, Hero, ProjectGallery } from "@/Components";
import Image from 'next/image'; 
import glowingBlob from '../assets/glowblob.png';

export default function Home() {
  return (
    <main className="text-[#e4e4e4] md:p-4 p-2 overflow-x-hidden ">
      <div className='before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#00FFFF] before:blur-xl before:opacity-80 before:rounded-full rounded-full slow-bounce absolute lg:-top-[65%] md:-top-[50%] -top-[20%] left-[50%] -translate-x-1/2 before:shadow-2xl before:shadow-[#00FFFF]'>
        <Image
          src={glowingBlob}
          alt='icon'
          className='z-10 blur-2xl opacity-100 rounded-full animate-pulse'
        />
      </div>
      <Hero />
      <About />
      <ProjectGallery />
      <Contact />
    </main>
  );
}
