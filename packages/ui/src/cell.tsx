import { ColorType } from "../src/colorTypes";
import img from "./assets/dark_bishop.png";

interface cellProps {
  color: ColorType;
  path: string;
}
const cell = ({ color, path }: cellProps): JSX.Element => {
  return (
    <div className={`${color} w-full h-24 flex justify-center items-center`}>
      <img src={"./assets/dark_bishop.png"}></img>
    </div>
  );
};

export default cell;
