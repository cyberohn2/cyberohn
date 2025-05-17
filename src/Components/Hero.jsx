'use client'
import Image from 'next/image'; 
import React, { useState } from 'react';
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
import glowingBlob from '../assets/glowblob.png';


const Hero = () => {
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

 

  return (
    <section className='hero relative border border-transparent '>
      <div className='before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#FF00FF] before:blur-xl before:opacity-80 before:rounded-full rounded-full slow-bounce absolute lg:-bottom-[80%] md:-bottom-[50%] -bottom-[25%] left-[50%] -translate-x-1/2 opacity-40'>
        <Image
          src={glowingBlob}
          alt='icon'
          className='z-10 blur-2xl opacity-80 rounded-full'
        />
      </div>
      <div className="content">
        <div className='mt-2 md:mt-0'>
          <p className='text-center'>Hi there</p>
          <h1 className='text-center font-black text-[2rem] sm:text-6xl termina leading-tight'>
            <span>I'm </span>
            <span>Ededet John</span>
          </h1>
          <p className='font-bold text-xl text-center text-[#aaaaaa]'>I'm a {activeSkill.skill}</p>
        </div>

        <div className='mx-auto relative  isolate min-w-[65%] md:h-[25.5rem]'>
          <Image
            src={heroImg}
            alt="Cyberohn image"
            className="image mx-auto shadow-2xs  top-10 left-1/2  -z-20 pointer-events-none"
          />
          <div>
            <div className='before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#FF00FF] before:blur-xl before:opacity-80 before:animate-pulse rounded-full slow-bounce absolute bottom-[20%] left-[40%]  -translate-x-1/2 cursor-pointer hover:-translate-y-4 long-animate'>
              <Image
                src={activeSkill.icons[0]}
                alt='icon'
                width={50}
                className='z-10'
              />
            </div>
            <div className='before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#FF00FF] before:blur-xl before:opacity-80 before:animate-pulse rounded-full slow-bounce absolute top-1/2 right-[15%] md:bottom-[25%] md:right-[25%] -z-30 cursor-pointer hover:-translate-y-4 long-animate'>
              <Image
                src={activeSkill.icons[1]}
                alt='icon'
                width={50}
                className='z-10'
              />
            </div>
            <div className='before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#FF00FF] before:blur-xl before:opacity-80 before:animate-pulse rounded-full slow-bounce absolute top-20 left-10 sm:left-[35%] cursor-pointer hover:-translate-y-4 long-animate'>
              <Image
                src={activeSkill.icons[2]}
                alt='icon'
                width={50}
                className='z-10'
              />
            </div>
          </div>
        </div>

        <div className='md:absolut right-0 -bottom-30 w-full mx-auto'>
          <div className='flex items-center gap-1.5 justify-center'>
            {skills.map( (skill, index) =>
            <div key={index} className={`bg-gradient-to-br from-white/10 to-white/30 backdrop-blur-3xl border border-white/20 shadow-md p-2 rounded-xl w-3xs  cursor-pointer hover:-translate-y-4 long-animate lg:h-[119px] md:h-[135px] h-[91px] `}>
              <Image
                src={skill.displayIcon}
                width={25}
                alt='icons'
                className='mx-auto md:mx-0 mb-2'
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

export default Hero


// 1. position hero image.
// 2. position left and right boxes 
// 3. ensure perfect repsonsiveness.
// 4. Change the font type.
// 5. redesign Cyberohn logo. 