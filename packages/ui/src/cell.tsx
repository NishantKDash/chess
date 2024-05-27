"use client";
import { ColorType } from "../src/colorTypes";
import { assetUrl } from "./config";
import { useState } from "react";

interface cellProps {
  color: ColorType;
  path?: string;
}
const cell = ({ color, path }: cellProps): JSX.Element => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };
  return (
    <div className={`${color} w-full h-24 flex justify-center items-center`}>
      {path && (
        <img
          src={assetUrl + path}
          className={`${!isGrabbing ? "cursor-grab" : "cursor-grabbing"} h-24 pt-2 w-18`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        ></img>
      )}
    </div>
  );
};

export default cell;
