import Hero from "./components/Hero";
import Services from "./components/services";

export default function Home() {
  return (
    <main className="">
      <div className="relative ">
        <div className="absolute -bottom-36 left-20  w-56 h-56 bg-[#2fa2b6] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob  "></div>
        <div className="absolute top-0 -right-4 w-56 h-56 bg-[#f4a896] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        {/* <div className="absolute  w-56 top-0  -left-4 h-56 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
        <Hero />
      </div>
      <Services />
    </main>
  );
}
