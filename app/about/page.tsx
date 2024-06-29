import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Vishaly Ginny
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I am a passionate web developer with a strong background in
                front-end technologies. I love building beautiful and functional
                websites that provide a great user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter">Skills</h2>
            <div className="grid gap-4 pt-6">
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">Front-end Development</h3>
                <p className="text-muted-foreground">
                  HTML, CSS, JavaScript, React, Next.js
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">Back-end Development</h3>
                <p className="text-muted-foreground">
                  Node.js, Express, PHP, Ruby on Rails
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">Design</h3>
                <p className="text-muted-foreground">
                  Figma, Adobe Creative Suite, Sketch
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tighter">
              Work Experience
            </h2>
            <div className="grid gap-4 pt-6">
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">
                  Front-end Developer, Acme Inc.
                </h3>
                <p className="text-muted-foreground">June 2024 - Present</p>
                <p className="text-muted-foreground">
                  Developed and maintained responsive, high-performance web
                  applications using React and Tailwind CSS.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">
                  Intern, XYZ Corporation
                </h3>
                <p className="text-muted-foreground">May 2019 - August 2019</p>
                <p className="text-muted-foreground">
                  Assisted in the development and deployment of a new company
                  website using WordPress and WooCommerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter">Education</h2>
            <div className="grid gap-4 pt-6">
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-muted-foreground">
                  University of Example, 2016 - 2020
                </p>
                <p className="text-muted-foreground">Graduated with Honors</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">High School Diploma</h3>
                <p className="text-muted-foreground">
                  Ho Lap College, 2018 - 2024
                </p>
                <p className="text-muted-foreground">
                  Graduated with Distinction
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tighter">
              Certifications
            </h2>
            <div className="grid gap-4 pt-6">
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">
                  Certified Front-end Developer
                </h3>
                <p className="text-muted-foreground">
                  Issued by Example Academy, 2021
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">Certified in React.js</h3>
                <p className="text-muted-foreground">
                  Issued by Example University, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
