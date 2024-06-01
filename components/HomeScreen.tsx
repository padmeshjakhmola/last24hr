import { cormorantGaramond } from "@/app/fonts";
import { compareAsc, format, parseISO } from "date-fns";
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
import { useQuery } from "@apollo/client";
import { topheadlines } from "@/graphql/query/topheadlines";
import defaultImage from "../assets/newspaper.jpg";
import Link from "next/link";

export default function HomeScreen() {
  const { data, loading } = useQuery(topheadlines);

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return format(date, "EEEE, MMMM do, yyyy");
  };

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
          {loading ? (
            <Button className="h-12 px-5 my-2 text-base" disabled>
              Loading News
            </Button>
          ) : (
            <Button className="h-12 px-5 my-2 text-base">
              Start Reading&nbsp;&nbsp;&nbsp;&nbsp;&#10140;
            </Button>
          )}
        </DialogTrigger>
        <Carousel>
          <DialogContent className="p-8 max-w-md md:max-w-2xl gap-6">
            <CarouselContent>
              {data?.getNews.map((item, key) => (
                //main parent elem
                <CarouselItem key={key} className="flex">
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <Image
                        src={item?.urlToImage || defaultImage}
                        alt="news-image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <DialogHeader className="gap-4 text-center h-full">
                      <DialogTitle className="text-3xl">
                        {item?.title}
                      </DialogTitle>
                      <DialogDescription className="text-xl">
                        {item?.description || (
                          <>
                            To read the full article.{" "}
                            <Link
                              href="#"
                              className="underline hover:text-blue-400"
                            >
                              Click Here
                            </Link>
                          </>
                        )}
                      </DialogDescription>
                    </DialogHeader>
                    <Link href={item?.url} className="w-full">
                      <Button className="w-full">Read More</Button>
                    </Link>
                    <div className="flex justify-between w-full">
                      <p className="text-gray-500">
                        {formatDate(item?.publishedAt)}
                      </p>
                      <p className="text-gray-500">
                        Source: {item?.source?.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:h-20 md:w-20 h-10 w-10  lg:-mx-10" />
            <CarouselNext className="md:h-20 md:w-20 h-10 w-10  lg:-mx-10" />
          </DialogContent>
        </Carousel>
      </Dialog>
    </div>
  );
}
