"use client";
import { IconBrowser } from "@tabler/icons-react";
import { CodeIcon } from "lucide-react";
import Link from "next/link";


import Image from "next/image";
import { Button } from "../ui/button";

export const ProjectCard = ({desc, image, livelink, repolink}: {desc: string, image: string, livelink: string, repolink: string}) => {
  return(
    <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {desc}
          </p>
          <div className="">
            <Image
              src={image}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain object-top [0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link href={livelink}><Button variant="outline"><span>Live Site</span> <IconBrowser /></Button></Link>
            <Link href={repolink}><Button>Repo <CodeIcon /> </Button></Link>
          </div>
        </div>
  )
}