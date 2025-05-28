'use client';
import Image from 'next/image';
import heroImg from '../assets/hero-img.webp';
import arrowIcon from '../assets/arrow-up-right.svg';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

// -63 and 52
const About = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      imgRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    ).fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
      '-=0.8'
    );

    const handleScroll = () => {
      const section = imgRef.current?.closest('section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        tl.play();
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // in case already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='about' className='scroll-mt-20 relative h-full flex flex-col md:flex-row items-start justify-between gap-6 lg:gap-10 max-w-[1400px] mx-auto px-2 md:px-4 py-10 lg:py-20 isolate mb-24'>
      <div className='basis-1/2 h-[400px] flex items-end relative isolate overflow-hidden bg-gradient-to-br from-[#00FFFF] via-[#047dce] to-[#FF00FF] bottom-0 -z-10 rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl  shadow-2xl shadow-[black]'>
          <Image
            ref={imgRef}
            src={heroImg}
            alt="Cyberohn image"
            className="hero-image mx-auto opacity-0"
          />
      </div>
      <div className='w-full'>
        <h2 ref={titleRef} className='termina bg-gradient-to-r from-[#00FFFF] to-[#490049] text-transparent bg-clip-text text-4xl md:text-6xl md:mb-6 mb-0 font-semibold opacity-0'>About Me</h2>
        <p className='text-[#9b859b] font-semibold mb-6'>I'm a passionate Full Stack Web Developer with over 2+ years of experience. I have honed my skills in HTML, CSS, JAVASCRIPT, Node.Js, MongoDB including popular tools, frameworks and libraries such as Express.js, Next.js, React Js, Tailwind CSS, Gsap, Sass, and GIT/GITHUB. Aside being able to create websites with codes i've also developed skill in Wix and Webflow to help me build websites faster.</p>
        <div className=''>
          <a target='_' href='https://docs.google.com/document/d/19RS54gvVGgjQm5fK_Kb9wp2G6hRZbb2m/edit?usp=drive_link&ouid=109452223560057187802&rtpof=true&sd=true' className='flex items-center gap-4 w-fit py-3 px-7 rounded-4xl bg-gradient-to-br from-[#008cff] to-[#b101b1] cursor-pointer font-semibold group hover:scale-105 transition duration-300'>
            <span>Hire me</span>
          <Image
            src={arrowIcon}
            alt="arrow icon"
            width={100}
            className='w-[15px] rotate-[45deg] group-hover:rotate-2 transition duration-300'
          />
            </a>
        </div>
      </div>
    </section>
  )
}

export default About
