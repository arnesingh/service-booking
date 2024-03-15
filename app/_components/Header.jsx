"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { data } = useSession();

  useEffect(() => {}, [data]);
  return (
    <div>
      <div className="flex p-5 shadow-sm justify-between">
        <div className="flex gap-8 items-center">
          <Image
            src="/logo-no-background.svg"
            alt="logo"
            height={0}
            width={0}
            style={{ width: "120px", height: "auto" }}
          />
          <div className="md:flex items-center gap-6 hidden cursor-pointer">
            <h2 className="hover:scale-105 hover:text-primary">Home</h2>
            <h2 className="hover:scale-105 hover:text-primary">Services</h2>
            <h2 className="hover:scale-105 hover:text-primary">About</h2>
          </div>
        </div>
        <div>
          {data?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={data?.user?.image}
                  width={40}
                  height={40}
                  alt="user"
                  className="rounded-full"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>My Booking</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => signIn("descope")}>Login / Signup</Button>
          )}
        </div>
      </div>
    </div>
  );
}
