import { cormorantGaramond } from "@/app/fonts";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import stamp from "../assets/stamp.png";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeScreen() {
  return (
    <div className="flex flex-col gap-6 items-center sm:px-4">
      <Image src={stamp} alt="stamp" width={150} height={150} />
      <h2
        className={`${cormorantGaramond.className} text-6xl sm:text-7xl md:text-8xl text-center`}
      >
        {`last24hr: Your Daily News Source`}
      </h2>
      <p className="text-2xl sm:text-3xl md:text-4xl sm:px-4 text-slate-500 text-center">
        {`"Read the Headlines, Explore the Full Story"`}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-12 px-5 my-2 text-base">
            Start Reading&nbsp;&nbsp;&nbsp;&nbsp;&#10140;
          </Button>
        </DialogTrigger>
        <Carousel>
          <DialogContent className="p-8 max-w-md md:max-w-2xl gap-6">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col items-center gap-6">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="news-image"
                    width={600}
                    height={400}
                    className="rounded-md"
                  />
                  <DialogHeader className="gap-4 text-center">
                    <DialogTitle className="text-3xl">
                      Breakthrough in Quantum Computing: Scientists Achieve
                      Stable Qubit State at Room Temperature
                    </DialogTitle>
                    <DialogDescription className="text-xl">
                      In a monumental advancement for quantum computing,
                      researchers at the Quantum Computing Institute have
                      successfully maintained a stable qubit state at room
                      temperature. This breakthrough could significantly
                      accelerate the development and practical application of
                      quantum computers,
                    </DialogDescription>
                    <Button>Read More</Button>
                    <div className="flex justify-between w-full">
                      <p className="text-gray-500">Thursday, May 30th, 2024</p>
                      <p className="text-gray-500">Source: News 18</p>
                    </div>
                  </DialogHeader>
                </div>
              </CarouselItem>
              {/* Add more CarouselItem components here for additional slides */}
              <CarouselItem>
                <div className="flex flex-col items-center gap-6">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="news-image"
                    width={600}
                    height={400}
                    className="rounded-md"
                  />
                  <DialogHeader className="gap-4 text-center">
                    <DialogTitle className="text-3xl">
                      Breakthrough in Quantum Computing: Scientists Achieve
                      Stable Qubit State at Room Temperature
                    </DialogTitle>
                    <DialogDescription className="text-xl">
                      In a monumental advancement for quantum computing,
                      researchers at the Quantum Computing Institute have
                      successfully maintained a stable qubit state at room
                      temperature. This breakthrough could significantly
                      accelerate the development and practical application of
                      quantum computers,
                    </DialogDescription>
                    <Button>Read More</Button>
                    <div className="flex justify-between w-full">
                      <p className="text-gray-500">Thursday, May 30th, 2024</p>
                      <p className="text-gray-500">Source: News 18</p>
                    </div>
                  </DialogHeader>
                </div>
              </CarouselItem>
              {/* Add more CarouselItem components here for additional slides */}
              <CarouselItem>
                <div className="flex flex-col items-center gap-6">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="news-image"
                    width={600}
                    height={400}
                    className="rounded-md"
                  />
                  <DialogHeader className="gap-4 text-center">
                    <DialogTitle className="text-3xl">
                      Breakthrough in Quantum Computing: Scientists Achieve
                      Stable Qubit State at Room Temperature
                    </DialogTitle>
                    <DialogDescription className="text-xl">
                      In a monumental advancement for quantum computing,
                      researchers at the Quantum Computing Institute have
                      successfully maintained a stable qubit state at room
                      temperature. This breakthrough could significantly
                      accelerate the development and practical application of
                      quantum computers,
                    </DialogDescription>
                    <Button>Read More</Button>
                    <div className="flex justify-between w-full">
                      <p className="text-gray-500">Thursday, May 30th, 2024</p>
                      <p className="text-gray-500">Source: News 18</p>
                    </div>
                  </DialogHeader>
                </div>
              </CarouselItem>
              {/* Add more CarouselItem components here for additional slides */}
            </CarouselContent>
            <CarouselPrevious className="md:h-20 md:w-20 h-10 w-10  lg:-mx-10" />
            <CarouselNext className="md:h-20 md:w-20 h-10 w-10  lg:-mx-10" />
          </DialogContent>
        </Carousel>
      </Dialog>
    </div>
  );
}
