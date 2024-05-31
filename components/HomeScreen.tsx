import { cormorantGaramond } from "@/app/fonts";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import stamp from "../assets/stamp.png";
import { Button } from "./ui/button";
import RightArrow from "../assets/right-arrow.svg";

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-6 items-center sm: px-4">
      <Image src={stamp} alt="stamp" width={150} height={150} />
      <h2
        className={`${cormorantGaramond.className} text-6xl sm:text-7xl md:text-8xl text-center`}
      >
        {`last24hr: Your Daily News Source`}
      </h2>
      <p className="text-2xl sm:text-3xl md:text-4xl sm: px-4 text-slate-500 text-center">{`"Read the Headlines, Explore the Full Story"`}</p>
      <Button className="h-12 px-5 my-2 text-base">
        Start Exploring&nbsp;&nbsp;&nbsp;&nbsp;&#10140;
      </Button>
    </div>
  );
}
