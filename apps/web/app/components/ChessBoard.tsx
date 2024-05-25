import React from "react";
import Row from "@repo/ui/row";
import { ColorType } from "@repo/ui/colorTypes";

const ChessBoard = () => {
  return (
    <div className="" id="chessboard">
      <Row size={8} color1={ColorType.gray} color2={ColorType.neutral}></Row>
    </div>
  );
};

export default ChessBoard;
