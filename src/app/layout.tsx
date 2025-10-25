import type { Metadata } from "next";
import { Figtree } from 'next/font/google';
import "./globals.css";
import Header from "@/Components/AppComponent/Header";
import Footer from "@/Components/AppComponent/Footer";
import QueryProvider from "@/contexts/QueryProvider";
import { ThemeProvider } from "@/Components/ui/theme-provider"


const figtree = Figtree({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Cyberohn Portfolio",
  description: "John's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased ${figtree.className} `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Header />
            {children}
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
