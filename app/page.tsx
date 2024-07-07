import Image from "next/image";
import Link from "next/link";
import whiteforest from "../public/white-forest.jpg";
import chamelion from "../public/chamelion.avif";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

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
        <div className="w-full max-w-6x2 mx-auto px-4 sm:px-6 lg:px-5 py-20">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Skills and Work</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-md shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground mb-4">
                Professional web design services for businesses of all sizes.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-2">Web Design</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive digital marketing solutions to grow your business.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground mb-4">
                Reliable and efficient IT support for your business needs.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Professional accounting services to manage your finances.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Expert legal advice and representation for your business.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-2">
                Programming Languages
              </h3>
              <p className="text-muted-foreground mb-4">
                Expert in python, javascript, react, nextjs, tailwindcss and
                typescript.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
