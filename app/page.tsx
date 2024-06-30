import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 ">
      <div className="container px-4 md:px-6 ">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hey everyone, this is my first website!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I am a front end developer and Data Analyst. I love to build
                websites.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex gap-2"></form>
              <p className="text-xs text-muted-foreground">
                This is not working yet.{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
