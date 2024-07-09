import React from "react";
import Link from "next/link";
import { Label } from "@radix-ui/react-dropdown-menu";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const page = () => {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Get in Touch
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  You can find my contact information below.
                </p>
              </div>
              <p className="text-muted-foreground">
                I am always happy to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Get in touch with us for more information or to discuss your
                project.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-lg p-6 md:p-8 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-muted-foreground">
                  123 Main St, Anytown USA 12345
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-muted-foreground">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
