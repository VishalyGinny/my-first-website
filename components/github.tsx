import React from "react";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export const github = () => {
  return (
    <div className="w-10 h-10 bg-[#333] rounded-md flex items-center justify-center">
      <GithubIcon className="w-6 h-6 text-white" />
    </div>
  );
};
