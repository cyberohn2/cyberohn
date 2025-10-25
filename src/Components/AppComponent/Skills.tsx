import frontEndIcon from "@/assets/images/code-window.svg"
import backendIcon from '@/assets/images/square-terminal.svg';
import webDesignIcon from '@/assets/images/website-design.svg';
import graphicsDesignIcon from '@/assets/images/pencil-paintbrush.svg'
import { CardSpotlight } from "../ui/card-spotlight";
import Image from "next/image";

const Skills = () => {
  const Skills = [
    {
      title: "Frontend Development",
      description: "3+ years experience building responsive, user-friendly interfaces using modern frameworks and libraries. And over 20+ projects shipped.",
      icon: frontEndIcon,
    },
    {
      title: "Backend Development",
      description: "1+ year experience developing robust server-side logic, APIs, and database interaction to power web applications",
      icon: backendIcon,
    },
    {
      title: "Web Designer",
      description: "3+ years experience crafting intuitive, visually appealing website layouts focused on user experience and accessibility.",
      icon: webDesignIcon,
    },
    {
      title: "Graphics Designer",
      description: "Design compelling visual content for digital and print media. 5+ years design experience working with several local businesses.",
      icon: graphicsDesignIcon,
    },
  ]

  return (
    <section className="py-16 px-2">
      <div className="container mx-auto">
        <p className="text-muted-foreground text-sm lg:text-base">
          MY SKILLS
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">What i offer ?</h2>
        <div className="mt-7 grid gap-2 lg:mt-20 lg:grid-cols-4">
          {Skills.map( (skill,index) => 
          <CardSpotlight key={index} className="p-0">
            <div className="rounded-lg p-5 h-full z-50">
              <span className="bg-background mb-8 flex size-12 items-center justify-center rounded-full">
                <Image src={skill.icon} alt={skill.title} className="size-6" />
              </span>
              <h3 className="mb-2 text-xl font-meduim">{skill.title}</h3>
              <p className="text-muted-foreground leading-7 text-sm">
                {skill.description}
              </p>
            </div>
          </CardSpotlight>
        )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
