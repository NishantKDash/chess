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
        <div
          className={`${!isGrabbing ? "cursor-grab" : "cursor-grabbing"} h-24 w-24 mt-2 chessPiece`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{
            backgroundImage: `url(${assetUrl + path})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "80px",
          }}
        ></div>
      )}
    </div>
  );
};

export default cell;
