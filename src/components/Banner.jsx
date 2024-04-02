import React from "react";

const Banner = (Props) => {
  return (
    <div>
      <h1 className=" text-slate-50 bg-black text-center py-3 text-3xl font-bold">
        {Props.text}
      </h1>
    </div>
  );
};

export default Banner;
