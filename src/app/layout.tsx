import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import Script from 'next/script'; 
import Link from "next/link"; 
import Image from "next/image"; 
import { SchoolLogo } from "@/components/Icons";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "All In One",
  description: "We are here for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <ClerkProvider> */}
      <html lang="en">
        <body className={inter.className}>
        <NextTopLoader
            height={2}
            color="#27AE60"
            easing="cubic-bezier(0.53,0.21,0,1)"
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
            <div className="h-screen flex">
              {/* Sidebar and Logo */}
              <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                <Link
                  href="/"
                  className="flex items-center justify-center lg:justify-start gap-2 mb-4" // Added margin bottom for spacing
                >
                  <SchoolLogo/>
                  <span className="hidden lg:block font-bold">School</span>
                </Link>
                <Sidebar />
              </div>
              {/* Main Content */}
               <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col">
                <Navbar />
                <div className="pt-16 flex-grow">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
      {/* </ClerkProvider> */}
    </>
  );
}
