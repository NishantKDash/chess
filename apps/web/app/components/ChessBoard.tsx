import React from "react";
import { ColorType } from "@repo/ui/colorTypes";
import Cell from "@repo/ui/cell";
const verticalAxes = ["8", "7", "6", "5", "4", "3", "2", "1"];
const horizontalAxes = ["a", "b", "c", "d", "e", "f", "g", "h"];
interface PiecePosition {
  x: string;
  y: string;
  piecePath: string;
}

let pos: PiecePosition[] = [];
for (let i = 0; i < verticalAxes.length; i++) {
  for (let j = 0; j < horizontalAxes.length; j++) {
    if (i == 6) {
      pos.push({
        x: verticalAxes[i] || "",
        y: horizontalAxes[j] || "",
        piecePath: "./assets/light_pawn.png",
      });
    } else if (i == 1) {
      pos.push({
        x: verticalAxes[i] || "",
        y: horizontalAxes[j] || "",
        piecePath: "./assets/light_pawn.png",
      });
    }
  }
}
const ChessBoard = () => {
  let board = [];

  for (let i = 0; i < verticalAxes.length; i++) {
    for (let j = 0; j < horizontalAxes.length; j++) {
      const isEvenRow = i % 2 === 0;
      const isEvenColumn = j % 2 === 0;

      const cellColor =
        (isEvenRow && isEvenColumn) || (!isEvenRow && !isEvenColumn)
          ? ColorType.AMBER
          : ColorType.LIME;

      let piecePath = "";
      for (let k = 0; k < pos.length; k++) {
        if (pos[k]?.x === verticalAxes[i] && pos[k]?.y === horizontalAxes[j]) {
          piecePath = pos[k]?.piecePath || "";
          break;
        }
      }

      board.push(
        <Cell
          key={`${verticalAxes[i]}${horizontalAxes[j]}`}
          color={cellColor}
          path={piecePath}
        ></Cell>
      );
    }
  }
  return <div className="grid grid-cols-8 w-4/5">{board}</div>;
};

export default ChessBoard;
