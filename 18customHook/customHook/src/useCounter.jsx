import React from "react";
import { useState } from "react";

function useCounter() {
  const [num, setNum] = useState(0);
  const increment = () => {
    setNum((prevNum) => prevNum + 1); // prevnum simdiki değere eşittir bir arttırıp yolluyoruz.
  };
  const decrement = () => {
    setNum((prevNum) => prevNum - 1);
  };
  const reset = () => {
    setNum(0);
  };

  return [num, increment, decrement, reset]; // dizi ile geriye döndürdük
}

export default useCounter;
