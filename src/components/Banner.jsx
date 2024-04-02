import React from "react";
import Button from "./Button";

const Banner = (Props) => {
  return (
    <div>
      <h1 className=" text-black text-center py-3 text-3xl font-bold">
        {Props.text}
      </h1>
    </div>
  );
};

export default Banner;
