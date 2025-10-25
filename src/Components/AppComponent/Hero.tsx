

import { ContainerTextFlip } from "@/Components/ui/container-text-flip";
import { OrbitingCircles } from "../ui/orbiting-circles";
import nextjsIcon from '@/assets/images/nextjs-icon-svgrepo-com.svg';
import tailwindIcon from '@/assets/images/tailwind-svgrepo-com.svg';
import reactIcon from '@/assets/images/react-svgrepo-com.svg';
import nodejsIcon from '@/assets/images/node-js-svgrepo-com.svg';
import expressIcon from '@/assets/images/Express.svg';
import mongoDbIcon from '@/assets/images/mongo-svgrepo-com.svg';
import figmaIcon from '@/assets/images/figma-svgrepo-com.svg';
import wordpressIcon from '@/assets/images/wordpress-svgrepo-com.svg';
import canvaIcon from '@/assets/images/canva-svgrepo-com.svg';
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-full w-full overflow-hidden pt-8 pb-22 relative border-b">
      <div className="container mx-auto">
        <div className="relative flex h-[500px] flex-col items-center justify-center">
              <div className="relative flex w-full max-w-5xl flex-col justify-start  px-5 py-12 md:items-center md:justify-center lg:mx-auto z-10 ">
                  <p className="text-muted-foreground flex items-center justify-center gap-3 text-sm text-center">
                    <span className="inline-block size-2 rounded bg-green-500" />
                    Hi There!
                  </p>
                  <div className="mb-7 mt-3 w-full text-2xl md:text-5xl font-semibold tracking-tighter text-center">
                    <h1 className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
                      <span>I'm Ededet John,</span>
                    </h1>
                    <span>A </span>
                    <ContainerTextFlip
                      className="text-red-500 font-semibold tracking-tighter"
                      words={["Front-End Developer", "Back-End Developer", "Web Designer", "Graphics Designer"]}
                    />
                  </div>
                  <div className="flex items-center gap-4 justify-center">
                    <Link href={'https://wa.me/+2349010817543'}><Button variant="secondary">Hire Me</Button></Link>
                    <Link href={'https://docs.google.com/document/d/1C3t_--S5N6acKBnwDxhRyJ2k33Id-qgyWNEgsfTtswM/edit?usp=sharing'}><Button variant="outline">My Resume</Button></Link>
                  </div>
                </div>

            <OrbitingCircles iconSize={40} radius={250}>
                <Image src={tailwindIcon} alt="Tailwind CSS" width={40} height={40} />
                <Image src={reactIcon} alt="React" width={40} height={40} />
                <Image src={nodejsIcon} alt="Node.js" width={40} height={40} />
            </OrbitingCircles>

            <OrbitingCircles iconSize={30} radius={150} reverse speed={2}>
                <Image src={mongoDbIcon} alt="MongoDB" width={40} height={40} />
                <Image src={figmaIcon} alt="Figma" width={40} height={40} />
                <Image src={wordpressIcon} alt="WordPress" width={40} height={40} />
            </OrbitingCircles>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// change text effect to typewriter effect