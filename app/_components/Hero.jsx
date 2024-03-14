import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <div>
      <div className="flex items-center gap-3 flex-col pt-14 pb-7">
        <h2 className="font-bold text-[45px] text-center">
          Find Home <span className="text-primary">Service/Repair</span>{" "}
          <br></br>Near You
        </h2>
        <h2 className="text-center text-gray-400">
          Explore Best Home Service & Repair Near You
        </h2>
        <div className="mt-4 flex items-center gap-4">
          <Input placeholder="Search..." className="rounded-full w-[300px]" />
          <Button className="rounded-full md:h-[45px]">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
