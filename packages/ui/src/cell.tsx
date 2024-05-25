import { ColorType } from "../src/colorTypes";
interface cellProps {
  color: ColorType;
}
const cell = ({ color }: cellProps): JSX.Element => {
  return <div className={`bg-${color}-800`}></div>;
};

export default cell;
