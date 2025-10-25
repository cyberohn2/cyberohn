"use client";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import BentoSkeleton from "../ui/bento-skeleton";
import { ProjectCard } from "./ProjectCard";
import { Timeline } from "../ui/timeline";
import Link from "next/link";

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

export const Projects = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const projectData = data?.data.slice(0,4).map((project: Project) => ({
    title: project.title,
    content: <ProjectCard desc={project.description} image={project.image} livelink={project.site} repolink={project.repo} />
  })) || [];

  if (isLoading) {
    return <BentoSkeleton />;
  }

  if (error) {
    return <div>Error loading projects: {error.toString()}</div>;
  }

  return (
    <section id="project-gallery" className="py-10">
      <Timeline data={projectData} />
      <div className="w-fit mx-auto"><Link href="/project-gallery"><Button>See More</Button></Link></div>
    </section>
  );
};