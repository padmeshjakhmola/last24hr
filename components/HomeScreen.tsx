import { cormorantGaramond } from "@/app/fonts";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import stamp from "../assets/stamp.png";

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <Image src={stamp} alt="stamp" width={150} height={150} />
      <h2 className={`${cormorantGaramond.className} text-8xl text-center`}>
        {`last24hr: Your Daily News Source`}
      </h2>
      <p className="text-4xl text-slate-500">{`"Read the Headlines, Explore the Full Story"`}</p>
    </div>
  );
}
