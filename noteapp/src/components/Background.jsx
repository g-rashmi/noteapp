import React from "react";

function Background() {
  return (
    <div className="fixed z-[1] w-full h-screen ">
      {" "}
      <div className="absolute top-[5%] text-zinc-400 w-full py-10 flex justify-center font-semibold text-xl">
        documents.
      </div>
      <h1
        className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-200 text-[12vw] leading-none tracking-tighter 
   font-semibold "
      >
        DOCS.
      </h1>
    </div>
  );
}

export default Background;
