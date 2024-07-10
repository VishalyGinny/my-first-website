import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import page from "../about/page";
import { projects } from "@/lib/projects";
const Page = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <header className=" py-2 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            My Lastest Projects
          </h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Page;
