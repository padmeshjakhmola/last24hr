import { cormorantGaramond } from "@/app/fonts";
import { Navbar } from "@/components/navbar";

export default function HomeScreen() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className={`${cormorantGaramond.className} text-8xl text-center`}>
        {`last24hr: Your Daily News Source`}
      </h2>
    </div>
  );
}
