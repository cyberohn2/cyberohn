import { ArrowRight } from "lucide-react";

import { Button } from "@/Components/ui/button";
import myPic from '@/assets/images/myPic.png';
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="px-2">
      <div className="container mx-auto">
        <div className="flex gap-4 flex-col-reverse lg:flex-row items-end lg:items-center">
          <div className="w-full flex flex-col items-center p-8 text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              About Me
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl">
              I'm a passionate Full Stack Web Developer with over 2+ years of experience. I have honed my skills in HTML, CSS, JAVASCRIPT, Node.Js, MongoDB including popular tools, frameworks and libraries such as Express.js, Next.js, React Js, Tailwind CSS, Gsap, Sass, and GIT/GITHUB. Aside being able to create websites with codes i've also developed skill in Wix and Webflow to help me build websites faster.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link target="_about" href="https://docs.google.com/document/d/1C3t_--S5N6acKBnwDxhRyJ2k33Id-qgyWNEgsfTtswM/edit?usp=sharing">
                <Button>
                  Download Resume
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className='basis-1/4 lg:basis-1/2 w-fit h-[200px] flex items-end justify-center relative isolate bg-accent -z-10 rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl  shadow-2xl shadow-[black] mt-40 mx-auto'>
            <Image
              src={myPic}
              alt="Cyberohn image"
              className="hero-image mx-auto object-contain object-top h-[calc(200px*2)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


// 672 X 853