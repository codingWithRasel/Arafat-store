import React from "react";

const Banner = (Props) => {
  return (
    <h1 className="bg-black text-white text-center py-3 text-3xl font-bold">
      {Props.text}
    </h1>
  );
};

export default Banner;
