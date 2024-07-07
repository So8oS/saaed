/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Aos from "./components/aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <link href="https://fonts.cdnfonts.com/css/dubai" rel="stylesheet" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className=" font-Dubai flex flex-col ">
        <Aos />

        <Navbar />
        <div className="px-5 md:px-8 container mx-auto max-w-6xl py-16">
          {children}
        </div>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
      <script>AOS.init();</script>
    </html>
  );
}
