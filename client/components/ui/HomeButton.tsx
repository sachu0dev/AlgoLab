"use cleint";
import React from "react";
import {useSelector} from "react-redux";
import {MoveRight, Telescope} from "lucide-react";

import {Button} from "@/components/ui/button";
import {RootState} from "@/lib/store";


const HomeButton = () => {
  const {user} = useSelector((state: RootState) => state.auth);

  return (
    <div className="flex space-x-8 mt-8">
      <Button
        className=" flex
       gap-2"
        variant="outline"
      >
        <Telescope size={20} /> {"Explore more"}
      </Button>
      {user ? (
        <Button
          className="bg-black text-white dark:bg-white dark:text-black flex gap-2"
          variant="outline"
        >
          {"Dashboard"} <MoveRight size={15} />
        </Button>
      ) : (
        <Button className="bg-black text-white dark:bg-white dark:text-black" variant="outline">
          Sign In
        </Button>
      )}
    </div>
  );
};

export default HomeButton;
