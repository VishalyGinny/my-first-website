import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-3xl font-bold">Hello Home!</div>
      <div className="text-xl font-medium ">This is line two.</div>
    </div>
  );
}
