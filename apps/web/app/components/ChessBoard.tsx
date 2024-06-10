"use client";
import React, { useEffect, useState } from "react";
import { ColorType } from "@repo/ui/colorTypes";
import { useRef } from "react";
import Cell from "@repo/ui/cell";
import { whiteInit, blackInit } from "../lib/boardinit";

const ChessBoard = () => {
  const { pos, horizontalAxes, verticalAxes } = whiteInit();
  const [positions, setPositions] = useState(pos);

  let [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const board: JSX.Element[] = [];

  for (let i = 0; i < positions.length; i++) {
    const position = positions[i];
    let cellColor = ColorType.AMBER;
    if (position && position.x_idx % 2 === 0 && position?.y_idx % 2 === 0)
      cellColor = ColorType.AMBER;
    else if (position && position.x_idx % 2 === 0 && position?.y_idx % 2 !== 0)
      cellColor = ColorType.LIME;
    else if (position && position.x_idx % 2 !== 0 && position?.y_idx % 2 === 0)
      cellColor = ColorType.LIME;
    else if (position && position.x_idx % 2 !== 0 && position?.y_idx % 2 !== 0)
      cellColor = ColorType.AMBER;

    let piecePath = position?.piecePath;
    board.push(
      <Cell
        key={`${position?.x_idx}${position?.y_idx}`}
        color={cellColor}
        path={piecePath}
      />
    );
  }

  const boardRef = useRef<HTMLDivElement>(null);

  function grabPiece(e: React.MouseEvent) {
    const chessBoard = boardRef.current;
    const element = e.target as HTMLElement;
    if (element.classList.contains("chessPiece") && chessBoard) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      const px = Math.floor((e.clientX - chessBoard.offsetLeft) / 100);
      const py = Math.floor((e.clientY - chessBoard.offsetTop - 800) / 100) + 8;
      setActivePiece(element);

      setGridX(py);
      setGridY(px);
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

  const dropPiece = (e: React.MouseEvent) => {
    const chessBoard = boardRef.current;
    if (activePiece && chessBoard) {
      const c_y = Math.floor((e.clientX - chessBoard.offsetLeft) / 100);
      const c_x =
        Math.floor((e.clientY - chessBoard.offsetTop - 800) / 100) + 8;
      const prevIndex = gridY + 8 * gridX;
      const newIndex = c_y + 8 * c_x;
      console.log(prevIndex + " " + newIndex);
      const shadowPosition = positions;
      const prevElement = shadowPosition[prevIndex];
      const newElement = shadowPosition[newIndex];
      if (prevElement !== undefined) {
        const piecePath = prevElement.piecePath;
        prevElement.piecePath = "";
        if (newElement) {
          newElement.piecePath = piecePath;
        }
      }
      setPositions(shadowPosition);
      setActivePiece(null);
    }
  };
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
