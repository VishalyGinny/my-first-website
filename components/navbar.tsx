import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <Button asChild variant="link">
        <Link href="/">Home</Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/contact" className="">
          Contact
        </Link>
      </Button>
      <Button asChild variant="link">
        <Link href="/about">About</Link>
      </Button>
    </div>
  );
};
