"use client";
import React, { useEffect, useState } from "react";
import { ColorType } from "@repo/ui/colorTypes";
import { useRef } from "react";
import Cell from "@repo/ui/cell";
import { whiteInit, blackInit } from "../lib/boardinit";

const ChessBoard = () => {
  const [board, setBoard] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const { pos, horizontalAxes, verticalAxes } = whiteInit();
    const newBoard: JSX.Element[] = [];
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
          if (
            pos[k]?.x === verticalAxes[i] &&
            pos[k]?.y === horizontalAxes[j]
          ) {
            piecePath = pos[k]?.piecePath || "";
            break;
          }
        }
        newBoard.push(
          <Cell
            key={`${verticalAxes[i]}${horizontalAxes[j]}`}
            color={cellColor}
            path={piecePath}
          />
        );
      }
    }

    setBoard(newBoard);
  }, []);

  const boardRef = useRef<HTMLDivElement>(null);
  let activePiece: HTMLElement | null = null;
  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    if (element.classList.contains("chessPiece")) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      activePiece = element;
    }
  }

  function movePiece(e: React.MouseEvent) {
    const chessBoard = boardRef.current;
    if (activePiece && chessBoard) {
      const minX = chessBoard.offsetLeft - 50;
      const minY = chessBoard.offsetTop - 50;
      const maxX = chessBoard.offsetLeft + chessBoard.clientWidth - 50;
      const maxY = chessBoard.offsetTop + chessBoard.clientHeight - 50;
      const x =
        e.clientX - 50 >= minX
          ? e.clientX - 50 <= maxX
            ? e.clientX - 50
            : maxX
          : minX;
      const y =
        e.clientY - 50 >= minY
          ? e.clientY - 50 <= maxY
            ? e.clientY - 50
            : maxY
          : minY;
      activePiece.style.position = "absolute";
      activePiece.style.left = `${x}px`;
      activePiece.style.top = `${y}px`;
    }
  }

  function dropPiece(e: React.MouseEvent) {
    if (activePiece) {
      console.log(e);
      activePiece = null;
    }
  }

  return (
    <div
      className="grid grid-cols-8 w-4/5"
      onMouseDown={(e) => grabPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      ref={boardRef}
    >
      {board}
    </div>
  );
};

export default ChessBoard;
