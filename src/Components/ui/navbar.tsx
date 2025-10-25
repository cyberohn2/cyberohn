"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import logo from '@/assets/images/logo.png'
import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "./rainbow-button";

const Navigation = () => {
  const navLinks = [
    {link:"#about", text: "About Me"},
    {link:"/project-gallery", text: "My Projects"},
    {link:"#contact", text: "Contact Me"},
]

  return (
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
            <Link className="flex items-center gap-2" href={'/'}>
              <Image
                src={logo}
                className="max-h-8 w-fit"
                width={100}
                alt="Cyberohn logo"
              />
            </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navLinks.map((navLink, index) => (
                <NavigationMenuItem key={index}>
                  <Link
                    href={navLink.link}
                    className={navigationMenuTriggerStyle()}
                  >
                    {navLink.text}
                  </Link>
              </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Link target="_about" href="https://wa.me/+2349010817543"><RainbowButton variant="outline">Hire Me</RainbowButton></Link>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href={'/'}>
                    <Image
                      src={logo}
                      className="max-h-8 w-fit"
                      width={100}
                      alt="Cyberohn logo"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {navLinks.map((navLink, index) => (
                  <Link key={index} href={navLink.link} className="font-medium">
                    {navLink.text}
                  </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Link target="_about" href={'https://wa.me/+2349010817543'}><RainbowButton variant="outline">Hire Me</RainbowButton></Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;