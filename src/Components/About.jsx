'use client';
import Image from 'next/image';
import heroImg from '../assets/hero-img.png';
import arrowIcon from '../assets/arrow-up-right.svg';

// -63 and 52
const About = () => {
  return (
    <section className='relative h-full flex flex-col md:flex-row items-start justify-between gap-6 lg:gap-10 max-w-[1400px] mx-auto px-2 md:px-4 py-10 lg:py-20 isolate mb-24'>
      <div className='basis-1/2 h-[400px] flex items-end relative isolate overflow-hidden bg-gradient-to-br from-[#00FFFF] via-[#047dce] to-[#FF00FF] bottom-0 -z-10 rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl  shadow-2xl shadow-[black]'>
          <Image
            src={heroImg}
            alt="Cyberohn image"
            className="hero-image mx-auto "
          />
      </div>
      <div className='w-full'>
        <h2 className=' bg-gradient-to-r from-[#00FFFF] to-[#490049] text-transparent bg-clip-text text-4xl md:text-6xl md:mb-6 mb-0 font-semibold'>About Me</h2>
        <p className='text-[#9b859b] font-semibold mb-6'>I'm a passionate Full Stack Web Developer with over 2+ years of experience. I have honed my skills in HTML, CSS, JAVASCRIPT, Node.Js, MongoDB including popular tools, frameworks and libraries such as Express.js, Next.js, React Js, Tailwind CSS, Gsap, Sass, and GIT/GITHUB. Aside being able to create websites with codes i've also developed skill in Wix and Webflow to help me build websites faster.</p>
        <div className=''>
          <button className='flex items-center gap-4 py-3 px-7 rounded-4xl bg-gradient-to-br from-[#008cff] to-[#b101b1] cursor-pointer font-semibold group hover:scale-105 transition duration-300'>
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
    </section>
  )
}

export default About
