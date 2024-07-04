import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Navbar = () => {
  return (
    <div className="w-full h-13 background flex items-center justify-between px-4">
      <div className="flex justify-between items-center m-2">
        <div className="flex space-x-4">
          <Button asChild variant="link">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/work">Work</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Link rel="stylesheet" href="https://github.com/VishalyGinny">
          <GitHubLogoIcon className="w-7 h-7" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};
