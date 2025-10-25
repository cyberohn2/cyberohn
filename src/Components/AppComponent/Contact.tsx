import { ArrowRight, MailIcon } from "lucide-react"
import { Dock, DockIcon } from "../ui/dock"
import { IconBrandGithubFilled, IconBrandTwitterFilled, IconBrandWhatsappFilled } from "@tabler/icons-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import Link from "next/link"
import { Button } from "../ui/button"


const Contact = () => {
  return (
    <section id="contact" className="relative flex flex-col items-center justify-center py-20 container mx-auto px-2">
        <div className="text-center lg:text-left">
            <h1 className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-6xl lg:text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
            Reach out to Me
            </h1>
            <p className="text-muted-foreground max-w-sm">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to get in touch!
            </p>
        </div>
        <div>
            <Dock direction="middle">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href={"https://wa.me/+2349010817543"}>
                            <DockIcon>
                                <IconBrandWhatsappFilled className="size-6" />
                            </DockIcon>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>WhatsApp</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href={"https://x.com/cyberohn"}>
                            <DockIcon>
                                <IconBrandTwitterFilled className="size-6" />
                            </DockIcon>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>Twitter</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href={"https://www.github.com/cyberohn2"}>
                            <DockIcon>
                                <IconBrandGithubFilled className="size-6" />
                            </DockIcon>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href={'mailto:edetjohn213@gmail.com'}>
                            <DockIcon>
                                <MailIcon className="size-6" />
                            </DockIcon>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>Email</TooltipContent>
                </Tooltip>
            </Dock>
        </div>
        <div className="mt-8">
            <Link target="_about" href="https://docs.google.com/document/d/1C3t_--S5N6acKBnwDxhRyJ2k33Id-qgyWNEgsfTtswM/edit?usp=sharing">
            <Button>
                Download Resume
                <ArrowRight className="size-4" />
            </Button>
            </Link>
        </div>
    </section>
  )
}

export default Contact
