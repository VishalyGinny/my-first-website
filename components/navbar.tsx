import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center m-2">
      <div className="flex space-x-4">
        <Button asChild variant="link">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="link">
          <Link href="/contact">Contact</Link>
        </Button>
        <Button asChild variant="link">
          <Link href="/about">About</Link>
        </Button>
      </div>
      <ModeToggle />
    </div>
  );
};
