import React from 'react';
import { useState } from "react";
import IncreaseButton from './conponents/increaseButton/Increase';
import DecreaseButton from './conponents/decreaseButton/Decrease';
import ResetButoon from './conponents/restButton/Rest';

import './App.css';
import CounterValue from './conponents/counterValue/Counter';

function App() {
 const [counter, setCounter] = useState(0);
  const increaseNum = () => {
    setCounter(counter + 1);
  };
  const decreaseNum = () => {
    setCounter(counter - 1);
  };
 

const resetNum = () => {
  setCounter(0);
};

return (
  <div>
    <CounterValue value={counter} />
    <IncreaseButton increaseFun={increaseNum} />
    <DecreaseButton decreaseFun={decreaseNum} />
    <ResetButoon resetFun={resetNum} />

  </div>
);
};

export default App;
