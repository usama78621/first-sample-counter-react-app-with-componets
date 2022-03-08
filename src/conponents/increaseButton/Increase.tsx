

import { FC } from "react";

interface IncreaseButtonProps {
  increaseFun: () => void;
}

const IncreaseButton: FC<IncreaseButtonProps> = ({ increaseFun }) => (
  <button onClick={increaseFun}>Increase</button>
);

export default IncreaseButton;
