'use client'
import Image from 'next/image'; 
import React, { useEffect, useLayoutEffect, useState } from 'react';
import heroImg from '../assets/hero-img.png';
import frontEndIcon from '../assets/code-window.svg';
import backendIcon from '../assets/square-terminal.svg';
import webDesignIcon from '../assets/website-design.svg';
import graphicsDesignIcon from '../assets/pencil-paintbrush.svg'
import nextjsIcon from '../assets/nextjs-icon-svgrepo-com.svg';
import tailwindIcon from '../assets/tailwind-svgrepo-com.svg';
import reactIcon from '../assets/react-svgrepo-com.svg';
import nodejsIcon from '../assets/node-js-svgrepo-com.svg';
import expressIcon from '../assets/Express.svg';
import mongoDbIcon from '../assets/mongo-svgrepo-com.svg';
import figmaIcon from '../assets/figma-svgrepo-com.svg';
import adobeXdIcon from '../assets/adobe-xd-svgrepo-com.svg';
import wordpressIcon from '../assets/wordpress-svgrepo-com.svg';
import illustratorIcon from '../assets/adobe-illustrator-svgrepo-com.svg';
import photoShopIcon from '../assets/photoshop-cc-logo-svgrepo-com.svg';
import canvaIcon from '../assets/canva-svgrepo-com.svg';

import SplitType from 'split-type';
import gsap from "gsap";

const Hero = () => {
  useLayoutEffect(()=>{
    let herotext = new SplitType('#hero-text')
    let skillText = new SplitType('#skill-text')
    let chars = document.querySelectorAll('.word');
    let heroImage = document.querySelector('.hero-image');
    heroImage.classList.add('translate-y-[5rem]')


    for (let i = 0; i < chars.length; i++) {
      chars[i].classList.add('translate-y-full')
      chars[i].classList.add('cliptext')
    }
    gsap.to('.word', {
      duration: 1,
      stagger: 0.1,
      y: 0,
    })

    gsap.to('.skill-icon', {
      duration: 1,
      stagger: 0.1,
      y: 0,
    })

    gsap.to(heroImage, {
      duration: 6,
      stagger: 0.1,
      y: 0,
      opacity: 1,
    })
  }, [])



  const skills = [
    {
      skill:'Front-End Developer',
      rightBoxDesc: 'Build responsive, user-friendly interfaces using modern frameworks and libraries.',
      leftBoxDesc: "3+ years building experience. With over 20+ projects shipped.",
      displayIcon: frontEndIcon,
      icons: [nextjsIcon, tailwindIcon, reactIcon]
    },
    {
      skill:'Back-End Developer',
      rightBoxDesc: 'Develop robust server-side logic, APIs, and database interaction to power web applications',
      leftBoxDesc: "A year building server-side logic and APIs for web apps.",
      displayIcon: backendIcon,
      icons: [nodejsIcon, expressIcon, mongoDbIcon]
    },
    {
      skill:'Web Designer',
      rightBoxDesc: 'Craft intuitive, visually appealing website layouts focused on user experience and accessibility.',
      leftBoxDesc: "3+ years crafting experience. Use tools like Figma and Wix.",
      displayIcon: webDesignIcon,
      icons: [figmaIcon, adobeXdIcon, wordpressIcon]
    },
    {
      skill:'Graphics Designer',
      rightBoxDesc: 'Design compelling visual content for digital and print media.',
      leftBoxDesc: "5+ years design experience. Worked with several local businesses.",
      displayIcon: graphicsDesignIcon,
      icons: [illustratorIcon, photoShopIcon, canvaIcon]
    },
  ]

  const [activeSkill, setActiveSkill] = useState(skills[0])

  // Automatically change activeSkill every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill(prev => {
        const currentIndex = skills.findIndex(s => s.skill === prev.skill);
        const nextIndex = (currentIndex + 1) % skills.length;
        return skills[nextIndex];
      });
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [skills])

  return (
    <section className='scroll-mt-20 hero relative border border-transparent mb-24'>
      <div className="content">
        <div className='mt-2 md:mt-0'>
          <p className='text-center'>Hi there</p>
          <h1 style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}} id="hero-text" className='text-center font-black text-[2rem] sm:text-6xl termina leading-tight'>
            I'm Ededet John
          </h1>
          <p className='font-bold text-xl text-center text-[#aaaaaa]'>I'm a <span key={activeSkill.skill} id='skill-text' className='inline-block animate-skill-fade'>{activeSkill.skill}</span></p>
        </div>

        <div className='mx-auto relative  isolate min-w-[65%] md:h-[25.5rem]'>
          <Image
            src={heroImg}
            alt="Cyberohn image"
            className="hero-image mx-auto shadow-2xs  top-10 left-1/2  -z-20 pointer-events-none shadowbox  cursor-pointer transition-transform long-animate translate-y-[5rem] opacity-10"
          />
          <div>
            <div key={activeSkill.skill + '-0'}
              className={`skill-icon before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#FF00FF] before:blur-xl before:opacity-80 before:animate-pulse rounded-full slow-bounce absolute bottom-[20%] left-[40%]  -translate-x-1/2 cursor-pointer hover:-translate-y-4 long-animate z-10 transition-transform duration-500 animate-icon-up`}>
              <Image
                src={activeSkill.icons[0]}
                alt='icon'
                width={50}
                className='z-20'
              />
            </div>
            <div key={activeSkill.skill + '-1'}
              className={`skill-icon before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#FF00FF] before:blur-xl before:opacity-80 before:animate-pulse rounded-full slow-bounce absolute bottom-[50%] right-[15%] md:bottom-[25%] md:right-[25%]  cursor-pointer hover:-translate-y-4 long-animate z-10 transition-transform duration-500 animate-icon-up`}>
              <Image
                src={activeSkill.icons[1]}
                alt='icon'
                width={50}
                className='z-20'
              />
            </div>
            <div key={activeSkill.skill + '-2'}
              className={`skill-icon before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#FF00FF] before:blur-xl before:opacity-80 before:animate-pulse rounded-full slow-bounce absolute top-20 left-10 sm:left-[35%] cursor-pointer hover:-translate-y-4 long-animate z-10 transition-transform duration-500 animate-icon-up`}>
              <Image
                src={activeSkill.icons[2]}
                alt='icon'
                width={50}
                className='z-20'
              />
            </div>
          </div>
        </div>

        <div className=' w-full mx-auto'>
          <div className='flex items-center gap-1.5 justify-center'>
            {skills.map( (skill, index) =>
            <div
              key={skill.skill}
              onClick={() => setActiveSkill(skill)}
              className={`relative bg-gradient-to-br from-white/10 to-white/30 backdrop-blur-3xl  shadow-md p-2 rounded-xl w-3xs cursor-pointer hover:-translate-y-4 long-animate lg:h-[119px] md:h-[135px] h-[91px] isolate ${activeSkill.skill === skill.skill ? "border-2 border-[#ff00ff] " : "border border-white/20"}`}
            >
              <Image
                src={skill.displayIcon}
                width={25}
                alt='icons'
                className='mx-auto md:mx-0 mb-2 relative z-20'
              />
              <div>
                <h4 className='font-semibold text-sm text-center md:text-left'>{skill.skill}</h4>
                {<p className='hidden md:block text-[#aaaaaa] text-xs'>{skill.rightBoxDesc}</p>}
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;