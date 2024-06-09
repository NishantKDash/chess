interface PiecePosition {
  x: string;
  y: string;
  piecePath: string;
}

interface boardInit {
  pos: PiecePosition[];
  horizontalAxes: string[];
  verticalAxes: string[];
}

function whiteInit(): boardInit {
  const whiteVerticalAxes = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const whiteHorizontalAxes = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let pos: PiecePosition[] = [];
  for (let i = 0; i < whiteVerticalAxes.length; i++) {
    for (let j = 0; j < whiteHorizontalAxes.length; j++) {
      if (i == 6) {
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: whiteHorizontalAxes[j] || "",
          piecePath: "light_pawn.png",
        });
      } else if (i == 1) {
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: whiteHorizontalAxes[j] || "",
          piecePath: "dark_pawn.png",
        });
      } else if (i == 7) {
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "a",
          piecePath: "white_rook.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "b",
          piecePath: "light_knight.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "c",
          piecePath: "light_bishop.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "d",
          piecePath: "light_queen.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "e",
          piecePath: "light_king.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "f",
          piecePath: "light_bishop.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "g",
          piecePath: "light_knight.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "h",
          piecePath: "white_rook.png",
        });
      } else if (i == 0) {
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "a",
          piecePath: "dark_rook.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "b",
          piecePath: "dark_knight.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "c",
          piecePath: "dark_bishop.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "d",
          piecePath: "dark_queen.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "e",
          piecePath: "dark_king.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "f",
          piecePath: "dark_bishop.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "g",
          piecePath: "dark_knight.png",
        });
        pos.push({
          x: whiteVerticalAxes[i] || "",
          y: "h",
          piecePath: "dark_rook.png",
        });
      }
    }
  }
  return {
    horizontalAxes: whiteHorizontalAxes,
    verticalAxes: whiteVerticalAxes,
    pos: pos,
  };
}

function blackInit(): boardInit {
  const blackVerticalAxes = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const blackHorizontalAxes = ["h", "g", "f", "e", "d", "c", "b", "a"];
  let pos: PiecePosition[] = [];
  for (let i = 0; i < blackVerticalAxes.length; i++) {
    for (let j = 0; j < blackHorizontalAxes.length; j++) {
      if (i == 6) {
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: blackHorizontalAxes[j] || "",
          piecePath: "dark_pawn.png",
        });
      } else if (i == 1) {
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: blackHorizontalAxes[j] || "",
          piecePath: "light_pawn.png",
        });
      } else if (i == 7) {
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "a",
          piecePath: "dark_rook.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "b",
          piecePath: "dark_knight.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "c",
          piecePath: "dark_bishop.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "d",
          piecePath: "dark_queen.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "e",
          piecePath: "dark_king.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "f",
          piecePath: "dark_bishop.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "g",
          piecePath: "dark_knight.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "h",
          piecePath: "dark_rook.png",
        });
      } else if (i == 0) {
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "a",
          piecePath: "white_rook.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "b",
          piecePath: "light_knight.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "c",
          piecePath: "light_bishop.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "d",
          piecePath: "light_queen.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "e",
          piecePath: "light_king.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "f",
          piecePath: "light_bishop.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "g",
          piecePath: "light_knight.png",
        });
        pos.push({
          x: blackVerticalAxes[i] || "",
          y: "h",
          piecePath: "white_rook.png",
        });
      }
    }
  }
  return {
    horizontalAxes: blackHorizontalAxes,
    verticalAxes: blackVerticalAxes,
    pos: pos,
  };
}

export { whiteInit, blackInit };
