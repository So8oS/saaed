import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/services";

export default function Home() {
  return (
    <main className="">
      {/* <div className="relative ">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-[#2fa2b6] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob "></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-[#f4a896] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
    
      <Hero/>
  {/* </div> */}
      <Services/>
 </main>
  );
}
