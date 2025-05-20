'use client';
import Image from 'next/image';
import heroImg from '../assets/hero-img.png';
import glowingBlob from '../assets/glowblob.png';
import arrowIcon from '../assets/arrow-up-right.svg';

// -63 and 52
const About = () => {
  return (
    <section className='relative h-full flex flex-col md:flex-row items-start justify-between gap-6 lg:gap-10 max-w-[1400px] mx-auto px-2 md:px-4 py-10 lg:py-20 isolate'>
      <div className='w-full relative isolate overflow-hidden bg-gradient-to-br from-[#00FFFF] via-[#047dce] to-[#FF00FF] bottom-0 -z-10 rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl  shadow-2xl shadow-[black]'>
        {/* <div className='bg-gradient-to-br from-[#00FFFF] via-[#047dce] to-[#FF00FF] absolute w-full h-[80%] bottom-0 -z-10 rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl  shadow-2xl shadow-[#ff00ff]'></div> */}
          <Image
            src={heroImg}
            alt="Cyberohn image"
            width={100}
            className="hero-image mx-auto w-full"
          />
      </div>
      <div className='w-full'>
        <h2 className=' bg-gradient-to-r from-[#00FFFF] to-[#490049] text-transparent bg-clip-text text-4xl md:text-6xl md:mb-6 mb-0 font-semibold'>About Me</h2>
        <p className='text-[#daa7da] font-semibold mb-6'>I'm a passionate Full Stack Web Developer with over 2+ years of experience. I have honed my skills in HTML, CSS, JAVASCRIPT, Node.Js, MongoDB including popular tools, frameworks and libraries such as Express.js, Next.js, React Js, Tailwind CSS, Gsap, Sass, and GIT/GITHUB. Aside being able to create websites with codes i've also developed skill in Wix and Webflow to help me build websites faster.</p>
        <div className=''>
          <button className='flex items-center gap-4 py-3 px-7 rounded-4xl bg-gradient-to-br from-[#008cff] to-[#b101b1] cursor-pointer shadow-2xl shadow-[#ff00ff] font-semibold group'>
            <span>Hire me</span>
          <Image
            src={arrowIcon}
            alt="arrow icon"
            width={100}
            className='w-[15px] rotate-[45deg] group-hover:rotate-2 transition duration-300'
          />
            </button>
        </div>
      </div>

      {/* <div className='before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00FFFF] before:to-[#FF00FF] before:blur-xl before:opacity-80 before:rounded-full rounded-full slow-bounce absolute left-[50%] -translate-x-1/2 opacity-30 inset-0 -z-50'>
        <Image
          src={glowingBlob}
          alt='icon'
          className='z-10 blur-2xl opacity-80 rounded-full'
        />
      </div> */}
    </section>
  )
}

export default About
