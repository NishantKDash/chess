import Cell from "./cell";
import { ColorType } from "../src/colorTypes";
interface rowTypes {
  size: number;
  color1: ColorType;
  color2: ColorType;
}

const row = ({ size, color1, color2 }: rowTypes): JSX.Element => {
  return <div></div>;
};

export default row;
