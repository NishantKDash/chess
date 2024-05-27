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
        piecePath: "light_pawn.png",
      });
    } else if (i == 1) {
      pos.push({
        x: verticalAxes[i] || "",
        y: horizontalAxes[j] || "",
        piecePath: "dark_pawn.png",
      });
    } else if (i == 7) {
      pos.push({
        x: verticalAxes[i] || "",
        y: "a",
        piecePath: "white_rook.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "b",
        piecePath: "light_knight.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "c",
        piecePath: "light_bishop.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "d",
        piecePath: "light_queen.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "e",
        piecePath: "light_king.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "f",
        piecePath: "light_knight.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "g",
        piecePath: "light_bishop.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "h",
        piecePath: "white_rook.png",
      });
    } else if (i == 0) {
      pos.push({
        x: verticalAxes[i] || "",
        y: "a",
        piecePath: "dark_rook.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "b",
        piecePath: "dark_knight.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "c",
        piecePath: "dark_bishop.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "d",
        piecePath: "dark_queen.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "e",
        piecePath: "dark_king.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "f",
        piecePath: "dark_knight.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "g",
        piecePath: "dark_bishop.png",
      });
      pos.push({
        x: verticalAxes[i] || "",
        y: "h",
        piecePath: "dark_rook.png",
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
