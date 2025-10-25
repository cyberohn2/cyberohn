"use client";
import { cn } from "@/lib/utils";
import { IconBrowser } from "@tabler/icons-react";
import { CodeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  livelink,
  repolink,
}: {
  className: string;
  title: string ;
  description: string;
  header: string;
  livelink: string;
  repolink: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/20 dark:bg-black dark:shadow-none",
        className,
      )}
    >
      <Image className="w-full h-full min-h-24 rounded-xl" width={100} height={100} src={header} alt={title}/>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div>
          <Link href={repolink}>
            <CodeIcon />
          </Link>
          <Link href={livelink}>
            <IconBrowser />
          </Link>
        </div>
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
