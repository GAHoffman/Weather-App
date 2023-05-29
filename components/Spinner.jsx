import React from "react";
import Loading_icon from "../public/Loading_icon.gif";
import Image from "next/image";

const Spinner = () => {
  return (
    <>
      <Image
        className="w-[200px] m-auto block"
        src={Loading_icon}
        alt="loading..."
      />
    </>
  );
};

export default Spinner;
