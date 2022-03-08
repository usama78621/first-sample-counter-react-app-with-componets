import {FC} from 'react';
interface DecreaseButtonProps{
    decreaseFun:() => void;
}

const DecreaseButton: FC<DecreaseButtonProps>= ( {decreaseFun} )=>(
<button onClick={ decreaseFun }>Decrease</button>
);

export default DecreaseButton;