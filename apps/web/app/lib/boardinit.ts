interface PiecePosition {
  v_x: string;
  h_y: string;
  x_idx: number;
  y_idx: number;
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
    if (i === 7) {
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "a",
        x_idx: i,
        y_idx: 0,
        piecePath: "white_rook.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "b",
        x_idx: i,
        y_idx: 1,
        piecePath: "light_knight.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "c",
        x_idx: i,
        y_idx: 2,
        piecePath: "light_bishop.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "d",
        x_idx: i,
        y_idx: 3,
        piecePath: "light_queen.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "e",
        x_idx: i,
        y_idx: 4,
        piecePath: "light_king.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "f",
        x_idx: i,
        y_idx: 5,
        piecePath: "light_bishop.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "g",
        x_idx: i,
        y_idx: 6,
        piecePath: "light_knight.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "h",
        x_idx: i,
        y_idx: 7,
        piecePath: "white_rook.png",
      });
      continue;
    } else if (i === 0) {
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "a",
        x_idx: i,
        y_idx: 0,
        piecePath: "dark_rook.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "b",
        x_idx: i,
        y_idx: 1,
        piecePath: "dark_knight.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "c",
        x_idx: i,
        y_idx: 2,
        piecePath: "dark_bishop.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "d",
        x_idx: i,
        y_idx: 3,
        piecePath: "dark_queen.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "e",
        x_idx: i,
        y_idx: 4,
        piecePath: "dark_king.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "f",
        x_idx: i,
        y_idx: 5,
        piecePath: "dark_bishop.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "g",
        x_idx: i,
        y_idx: 6,
        piecePath: "dark_knight.png",
      });
      pos.push({
        v_x: whiteVerticalAxes[i] || "",
        h_y: "h",
        x_idx: i,
        y_idx: 7,
        piecePath: "dark_rook.png",
      });
      continue;
    }
    for (let j = 0; j < whiteHorizontalAxes.length; j++) {
      if (i === 6) {
        pos.push({
          v_x: whiteVerticalAxes[i] || "",
          h_y: whiteHorizontalAxes[j] || "",
          x_idx: i,
          y_idx: j,
          piecePath: "light_pawn.png",
        });
      } else if (i === 1) {
        pos.push({
          v_x: whiteVerticalAxes[i] || "",
          h_y: whiteHorizontalAxes[j] || "",
          x_idx: i,
          y_idx: j,
          piecePath: "dark_pawn.png",
        });
      } else
        pos.push({
          v_x: whiteVerticalAxes[i] || "",
          h_y: whiteHorizontalAxes[j] || " ",
          x_idx: i,
          y_idx: j,
          piecePath: "",
        });
    }
  }
  return {
    pos: pos,
    horizontalAxes: whiteHorizontalAxes,
    verticalAxes: whiteVerticalAxes,
  };
}

function blackInit(): boardInit {
  const blackVerticalAxes = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const blackHorizontalAxes = ["h", "g", "f", "e", "d", "c", "b", "a"];
  let pos: PiecePosition[] = [];
  for (let i = 0; i < blackVerticalAxes.length; i++) {
    if (i == 7) {
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "a",
        x_idx: i,
        y_idx: 0,
        piecePath: "dark_rook.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "b",
        x_idx: i,
        y_idx: 1,
        piecePath: "dark_knight.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "c",
        x_idx: i,
        y_idx: 2,
        piecePath: "dark_bishop.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "d",
        x_idx: i,
        y_idx: 3,
        piecePath: "dark_queen.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "e",
        x_idx: i,
        y_idx: 4,
        piecePath: "dark_king.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "f",
        x_idx: i,
        y_idx: 5,
        piecePath: "dark_bishop.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "g",
        x_idx: i,
        y_idx: 6,
        piecePath: "dark_knight.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "h",
        x_idx: i,
        y_idx: 7,
        piecePath: "dark_rook.png",
      });
      continue;
    } else if (i == 0) {
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "a",
        x_idx: i,
        y_idx: 0,
        piecePath: "white_rook.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "b",
        x_idx: i,
        y_idx: 1,
        piecePath: "light_knight.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "c",
        x_idx: i,
        y_idx: 2,
        piecePath: "light_bishop.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "d",
        x_idx: i,
        y_idx: 3,
        piecePath: "light_queen.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "e",
        x_idx: i,
        y_idx: 4,
        piecePath: "light_king.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "f",
        x_idx: i,
        y_idx: 5,
        piecePath: "light_bishop.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "g",
        x_idx: i,
        y_idx: 6,
        piecePath: "light_knight.png",
      });
      pos.push({
        v_x: blackVerticalAxes[i] || "",
        h_y: "h",
        x_idx: i,
        y_idx: 7,
        piecePath: "white_rook.png",
      });
      continue;
    }
    for (let j = 0; j < blackHorizontalAxes.length; j++) {
      if (i == 6) {
        pos.push({
          v_x: blackVerticalAxes[i] || "",
          h_y: blackHorizontalAxes[j] || "",
          x_idx: i,
          y_idx: j,
          piecePath: "dark_pawn.png",
        });
      } else if (i == 1) {
        pos.push({
          v_x: blackVerticalAxes[i] || "",
          h_y: blackHorizontalAxes[j] || "",
          x_idx: i,
          y_idx: j,
          piecePath: "light_pawn.png",
        });
      } else
        pos.push({
          v_x: blackVerticalAxes[i] || "",
          h_y: blackHorizontalAxes[j] || "",
          x_idx: i,
          y_idx: j,
          piecePath: "",
        });
    }
  }
  return {
    pos: pos,
    horizontalAxes: blackHorizontalAxes,
    verticalAxes: blackVerticalAxes,
  };
}

export { whiteInit, blackInit };
