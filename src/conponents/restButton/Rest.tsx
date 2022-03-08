import {FC} from 'react'

interface ResetButtonProps {
    resetFun :()=> void;
}

const ResetButoon:FC<ResetButtonProps> = ( {resetFun } )=>(
    <button onClick={resetFun}> Reset </button>
);


export default ResetButoon;