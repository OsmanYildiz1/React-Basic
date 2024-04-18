import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
// state, var olan state'i yeni bir state'e atayıp geriye döndürecek. Bu yeni state aşağıdaki count'ta tutulacak.
// action dispatch içerisinde tanımlanan değişken tipini tutar

function App() {
  // reducer işlem yaptığımız fonksiyon, initial value = başlangıç değeri.  dispatch, değişken tutmayı sağlar
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <div className="App">
        <div> {count}</div>
        <button onClick={() => dispatch("increment")}>Arttır</button>
        <button onClick={() => dispatch("decrement")}>Azalt</button>
        <button onClick={() => dispatch("reset")}>Sıfırla</button>
      </div>
    </>
  );
}

export default App;
