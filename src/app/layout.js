import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/Components";

const termina = localFont({
  src: [
    {
      path: '../assets/fonts/TerminaTest-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TerminaTest-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TerminaTest-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TerminaTest-Demi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TerminaTest-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TerminaTest-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TerminaTest-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TerminaTest-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TerminaTest-Thin.otf',
      weight: '100',
      style: 'normal',
    },
  ]
})

export const metadata = {
  title: "Cyberohn Portfolio",
  description: "John's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className=" scroll-smooth transition-all duration-500 ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
