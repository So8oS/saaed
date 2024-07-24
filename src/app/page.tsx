import Hero from "./components/Hero";
import Services from "./components/services";
import WhyUs from "./components/whyUs";
import StillConfused from "./components/stillConfused";
import Nums from "./components/nums";
import Sectors from "./components/sectors";

export default function Home() {
  return (
    <main className="">
      <div className="relative ">
        <div className="absolute -bottom-36 left-20  w-56 h-56 bg-[#2fa2b6] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob  "></div>
        <div className="absolute top-0 -right-4 w-56 h-56 bg-[#f4a896] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <Hero />
      </div>
      <Services />
      <WhyUs />
      <Nums />
      <Sectors />
      <StillConfused />
    </main>
  );
}
