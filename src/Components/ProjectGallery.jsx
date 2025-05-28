'use client';
import { useEffect, useState,  } from "react";
import Image from 'next/image';
import codeBranch from '../assets/code-branch.svg';
import browser from '../assets/browser.svg';
import rightArrow from '../assets/right-arrow.svg';
import glowingBlob from '../assets/glowblob.png';




const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [scrollValue, setScrollValue] = useState(0)

  const handleScroll = (direction) => {
    // Set boundaries
    const minScroll = (-20 * projects.length) + 20; // Adjusted for 4 projects visible on desktop
    const maxScroll = 0;
    if (direction === 'next') {
      setScrollValue(prev => prev - 20 < minScroll ? minScroll : prev - 20);
    } else if (direction === 'prev') {
      setScrollValue(prev => prev + 20 > maxScroll ? maxScroll : prev + 20);
    }
  }

 useEffect(() => {



    const localProjects = localStorage.getItem('projects');
    if (localProjects) {
      setProjects(JSON.parse(localProjects));
    } else {
      const fetchProjects = async () => {
        const response = await fetch('/projects.json');
        const data = await response.json();
        setProjects(data.data);
        localStorage.setItem('projects', JSON.stringify(data.data));
      };
      fetchProjects();
    }

  }, []);

  return (
    <section id="portfolio" className="scroll-mt-20 mb-24 relative ">
      <div  className='before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#00FFFF] before:blur-xl before:opacity-20 before:rounded-full rounded-full slow-bounce absolute top-1/2 left-[50%] -translate-x-1/2 before:shadow-2xl before:shadow-[#00FFFF] '>
        <Image
          src={glowingBlob}
          alt='icon'
          className='z-10 blur-2xl rounded-full animate-pulse'
        />
      </div>
      <div className="mb-4">
        <h1 className="termina works-title xl:text-[4.5rem] lg:text-[3.5rem] text-[2rem] leading-none font-bold text-center ">
          My Works
        </h1>
        <p className="text-gray-400 text-center ">Some of my work that shows my expertise.</p>
      </div>
      <div className='relative  '>
        <div className="flex items-center gap-[9px] mx-auto w-fit mb-5">
            <button onClick={ () => handleScroll('prev')} id="prev" className=" bg-white cursor-pointer rounded-[4.5px] p-[12px] text-[#111d15] flex items-center justify-center">
                <Image className="rotate-180" src={rightArrow} alt="previous" />
            </button>
            <button onClick={ () => handleScroll("next")} id="next" className="bg-white cursor-pointer rounded-[4.5px] p-[12px] flex items-center justify-center">
                <Image src={rightArrow} alt="next" />
            </button>
        </div>
        <div style={{width: `calc(320px * ${projects.length})`, transform: `translateX(${scrollValue}rem)`}} className={`flex items-stretch gap-4 transition duration-500`}>
          {projects.map((project, index) => (
          <div key={index} className="project-card w-80 h-[402px] hover:h-fit rounded-xl bg-white/20 backdrop-blur-3xl shadow-lg p-4 text-white border border-white/10 cursor-pointer group hover:scale-105 active:scale-105 transition duration-500 flex flex-col justify-between">
            {/* Image */}
            <div>
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  width={320}
                  height={0} // Adjust height as needed
                />
              </div>
              {/* Title */}
              <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
              {/* Description */}
              <p className="text-sm text-gray-300 mb-4 line-clamp-4 group-hover:line-clamp-none">
                {project.description}
              </p>
            </div>
            {/* Price & Time */}
            <div className="flex justify-between items-center text-sm mb-3 mt-auto">
              <div className="flex items-center space-x-1">
                <Image width={20} className="inline" src={codeBranch} alt="code branch" />
                <a target='_' href={project.repo} className="inline text-[hsl(178,100%,50%)]">Codebase</a>
              </div>
              <div className="flex items-center space-x-1">
                <Image width={20} className="inline" src={browser} alt="browser icon" />
                <a target='_' href={project.site} className="inline">Live Preview</a>
              </div>
            </div>
        </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGallery



// i want the project gallery to have horizontal infinite scrolling, i want 4 projects visible on desktop and 2 projects visible on mobile (the 3rd one can be sticking out from the side).