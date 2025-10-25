"use client";
import {
  GitBranch,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/Components/ui/card";
import { IconBrowser } from "@tabler/icons-react";
import Link from "next/link";


import { useQuery } from "@tanstack/react-query";
import BentoSkeleton from "@/Components/ui/bento-skeleton";
import { Button } from "@/Components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  repo: string;
  site: string;
}

const fetchProjects = async (): Promise<{ data: Project[] }> => {
  const response = await fetch("/projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

const ProjectCard = ({title, desc, image, livelink, repolink}: {title: string, desc: string, image: string, livelink: string, repolink: string}) => {
  return(
    <Card>
      <CardHeader className="pb-1 flex items-center gap-4">
        <Link href={livelink}>
          <Button>
            <IconBrowser className="size-4" strokeWidth={1} />
          </Button>
        </Link>
        <Link href={repolink}>
          <Button variant="secondary">
            <GitBranch className="size-4" strokeWidth={1} />
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="text-left">
        <h2 className="mb-1 text-lg font-semibold">{title}</h2>
        <p className="text-muted-foreground leading-snug line-clamp-3">
          {desc}
        </p>
      </CardContent>
      <CardFooter className="justify-end pb-0 pr-0">
        <img
          className="h-40 w-full rounded-tl-md object-cover object-center"
          src={image}
          alt={title}
        />
      </CardFooter>
    </Card>
  )
}

const ProjectGallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });


  if (isLoading) {
    return <BentoSkeleton />;
  }

  if (error) {
    return <div>Error loading projects: {error.toString()}</div>;
  }


  return (
    <section className="py-32 px-2">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-6xl lg:text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
            My Projects
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          A selection of my recent work showcasing my skills and experience in
          web development and design.
        </p>

          <div className="mt-10 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data?.data.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.description}
                image={project.image}
                livelink={project.site}
                repolink={project.repo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
