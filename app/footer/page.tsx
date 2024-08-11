import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MountainIcon,
  TwitterIcon,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="text-xl font-bold">Acme Inc</span>
          </Link>
          <p className="text-muted-foreground">
            Beautifully designed components that you can copy and paste into
            your apps.
          </p>
        </div>
        <nav className="grid gap-2">
          <h4 className="text-lg font-semibold">Navigation</h4>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            <Button asChild variant="link">
              <Link href="/">Home</Link>
            </Button>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            <Button asChild variant="link">
              <Link href="/work">Work</Link>
            </Button>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            <Button asChild variant="link">
              <Link href="/about">About</Link>
            </Button>
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:underline"
            prefetch={false}
          >
            <Button asChild variant="link">
              <Link href="/contact">Contact</Link>
            </Button>
          </Link>
        </nav>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="text-muted-foreground">
            123 Main St, Anytown USA
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@acme.com
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-2">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
