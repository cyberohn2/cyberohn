'use client'
import logo from "../assets/logo.png"
import fbIcon from "../assets/icon-facebook.svg"
import igIcon from "../assets/icon-instagram.svg"
import ttIcon from "../assets/icon-twitter.svg"
import WhatsappIcon from "../assets/whatsapp.svg"
import gitbubIcon from "../assets/github.svg"
import mailIcon from "../assets/mail-icon.svg"
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="bg-black">
      <div className=" py-4 px-8 text-white min-w-[95%] md:max-w-[1400px] p-4 mx-auto">
           <div className="flex md:items-center flex-col md:flex-row justify-between">
           <a  href="/"><Image width={100} className="mx-auto md:mx-0 mb-4 md:m-0" src={logo} alt="cyberohn logo" /></a>
             <ul className="flex items-center gap-4 flex-col md:flex-row pb-8 mb-4 md:m-0 md:p-0 text-[#cac5d8]">
                {["About", "Contact", "Portfolio"].map( (navItem, index) => <li className="cursor-pointer hover:font-bold transition-all w-[93px] text-center md:text-left" key={index}><a href={`/${navItem.toLowerCase().replace(/\s+/g, "-")}` }>{navItem}</a></li>)}
              </ul>
              <div className="flex items-center gap-8 justify-center pb-8 mb-4 md:m-0 md:p-0 border-b border-white md:border-none ">
                <a target="_" href="https://www.github.com/cyberohn2"><Image width={20} src={gitbubIcon} alt="" /></a>
                <a target="_" href="https://x.com/cyberohn"><Image src={ttIcon} alt="" /></a>
                <a target="_" href="mailto:edetjohn213@gmail.com"><Image width={20} src={mailIcon} alt="" /></a>
                <a target="_" href="https://wa.me/+2349010817543"><Image width={20} src={WhatsappIcon} alt="" /></a>
                <a target="_" href="https://www.instagram.com/cyberohn.codes/"><Image src={igIcon} alt="" /></a>
              </div>
           </div>
          <p className="text-center text-[#cac5d8]">&copy; Cyberohn 2025</p>
      </div>
    </footer>
  )
}

export default Footer
