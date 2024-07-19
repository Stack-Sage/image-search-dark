
import React from "react";
import { Boxes } from "./ui/background-boxes";

const Background = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-400">
      <Boxes className="absolute inset-0" />
      

    </div>
    
  );
};

export default Background;
