import { cormorantGaramond } from "@/app/fonts";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import stamp from "../assets/stamp.png";
import { Button } from "./ui/button";

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen  sm: px-4">
      <Image src={stamp} alt="stamp" width={150} height={150} />
      <h2
        className={`${cormorantGaramond.className} text-6xl sm:text-7xl md:text-8xl text-center`}
      >
        {`last24hr: Your Daily News Source`}
      </h2>
      <p className="text-2xl sm:text-3xl md:text-4xl sm: px-4 text-slate-500 text-center">{`"Read the Headlines, Explore the Full Story"`}</p>
      <Button className="w-32 h-12 my-2 text-base">Read</Button>
      {/* <Button className="w-32 h-12 my-2 bg-gray-800 text-white font-bold py-2 px-4 rounded relative overflow-hidden group">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative">Explore</span>
      </Button> */}
    </div>
  );
}
