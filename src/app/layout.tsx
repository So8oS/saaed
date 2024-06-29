/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";




export const metadata: Metadata = {
  title: "SAAED",
  description: "Coaching Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/LogoIcon.ico" sizes="any" />
      <link href="https://fonts.cdnfonts.com/css/dubai" rel="stylesheet"/>
                
      </head>
      <body className=' font-Dubai flex flex-col '>
        <Navbar />
        <div className="px-8 container mx-auto max-w-6xl">
          {children}
        </div>
          <footer className="border-y border-slate-300 p-10 ">
          <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row lg:justify-between  items-center lg:items-start gap-5 ">
            <div className="flex items-center gap-9 flex-col lg:flex-row ">
              <img className="w-24" src="logo.png" alt="" />
              <p className="max-w-lg text-lg text-center lg:text-start">SAAED is a coaching and consulting firm based in Saudi Arabia, dedicated to empowering organizations and individuals through expert guidance and support. Our team of certified coaches, recognized by the International Coaching Federation (ICF), offers a comprehensive suite of services tailored to meet diverse needs of businesses and governmental agencies.</p>
            </div>
            <div className="flex flex-col gap-5 pt-4 justify-center items-center lg:justify-start lg:items-start">
              
              <div  className="flex gap-1">
              <MdEmail className='w-5 h-5'/>
              <h1 className="flex flex-col ">info@saaed.com</h1>
              </div>
              <div className="flex gap-1">
                <FaPhoneAlt className='w-5 h-5' />
                <h1 className="flex flex-col  ">+971 55 678 5698</h1>

              </div>
              <div className="flex  gap-2">
              <FaLocationDot className='w-5 h-5' />

                <h1 className="text-center  ">12329 Laysen Valley ,Riyadh , Kingdom of Saudi Arabia</h1>
              </div>
              <a href="https://www.linkedin.com/company/saaed-%D8%B3%D8%A7%D8%B9%D8%AF/?viewAsMember=true" target="_blank">
                <FaLinkedin className="w-6 h-6" />
              </a>

            </div>
           
          </div>
          </footer>
      </body>
    </html>
  );
}
