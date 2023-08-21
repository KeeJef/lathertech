import React, { useState } from "react";
import Rotate from "./rotateArea";

function SoapBox({title, description, ingredients, folderName}) {
  return (
    <div className="flex-row border-b-2 border-double border-white lg:flex">
      <div className="flex flex-col justify-between flex-grow border-b-2 border-double border-white font-mono p-4 w-full lg:w-1/3 lg:border-r-2 lg:border-b-0">
        <div className="text-xl font-bold pb-5 italic">{title}</div>
        <div className="text-xl font-light pb-5">
          {description}
        </div>
        <div className="items-end">
          {ingredients}
        </div>
      </div>
      <div className="flex justify-center items-center p-2 h-[270px]">
        <Rotate 
        folderName={folderName}
        />
      </div>
    </div>
  );
}

export default SoapBox;
