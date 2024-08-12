import Image from "next/image";
import Link from "next/link";
import whiteforest from "../public/white-forest.jpg";
import chamelion from "../public/chamelion.avif";
import { Button } from "@/components/ui/button";
import { MailIcon, SearchIcon } from "lucide-react";
import { Card } from "@/components/ui/card-hover-effect";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { PhoneIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";

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
        <div className="w-full max-w-6x2 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center justify-center mb-14 pt-4">
            <h1 className="text-4xl font-bold">Skills and Work</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-md shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground mb-4">
                Professional web development skills with React, Tailwind, and
                Next JS.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Web Design</h3>
              <p className="text-muted-foreground mb-4">
                Professional web designing skills. Able to apply UI/UX.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground mb-4">
                Knowledge of both categorical and regression in supervised
                machine learning.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Professional accounting services to manage your finances.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Expert legal advice and representation for your business.
              </p>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>
            <div className="bg-background rounded-md shadow-lg p-4">
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
      <div className="bg-muted container mx-auto px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 py-3">Education</h2>
        <div className="grid gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-muted-foreground mb-3">
              University of Example, 2024 - 2028
            </p>
            <p className="text-muted-foreground">
              Graduated with a GPA of 4.0.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Coursera Online Courses</h3>
            <p className="text-muted-foreground mb-3">2019 - 2021</p>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Full-Stack Web Development with React Specialization</li>
              <li>Machine Learning Specialization</li>
              <li>Cybersecurity Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-10"></section>
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <form className="grid gap-4">
              <Input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Textarea
                placeholder="Message"
                className="w-full px-4 py-2 rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Find Me</h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <MailIcon className="w-6 h-6 text-muted-foreground" />
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                >
                  vishalyginny@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-muted-foreground" />
                <a href="#" className="text-muted-foreground hover:underline">
                  +852 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-6 h-6 text-muted-foreground" />
                <a
                  href="https://www.linkedin.com/feed/"
                  className="text-muted-foreground hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-6 h-6 text-muted-foreground" />
                <a
                  href="https://github.com/VishalyGinny"
                  className="text-muted-foreground hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
