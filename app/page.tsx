import Image from "next/image";
import Link from "next/link";
import whiteforest from "../public/white-forest.jpg";
import chamelion from "../public/chamelion.avif";

export default function Home() {
  return (
    <section className="w-full min-h-screen pt-6 md:pt-12 lg:pt-20 xl:pt-18 pb-12 md:pb-24 lg:pb-32 xl:pb-48">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 items-start">
            <div className="space-y-2 text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Hey everyone, this is my first website!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I am a front end developer and Data Analyst. I love to build
                websites.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Image
              src="/chameleon.avif"
              alt="Description of the image"
              width={500}
              height={300}
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
