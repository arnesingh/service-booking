import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex p-5 shadow-sm justify-between">
        <div className="flex gap-8 items-center">
          <Image
            src="/logo-no-background.svg"
            alt="logo"
            height={100}
            width={120}
          />
          <div className="md:flex items-center gap-6 hidden cursor-pointer">
            <h2 className="hover:scale-105 hover:text-primary">Home</h2>
            <h2 className="hover:scale-105 hover:text-primary">Services</h2>
            <h2 className="hover:scale-105 hover:text-primary">About</h2>
          </div>
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
