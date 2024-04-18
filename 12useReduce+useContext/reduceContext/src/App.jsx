import React, { createContext, useEffect, useReducer } from "react";
import "./App.css";
import Calculate from "./Calculate";

export const NumberContext = createContext();

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
      break;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    // state her değiştiğinde render edilsin
    console.log("render oldu");
  }, [state]);

  return (
    <>
      <div className="App">
        {/* NumberContext'e Calculate componenti erişebilsin. value'da tanımlanan tüm proplara calculate componentinden erişebiliriz. */}
        <NumberContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Calculate />
        </NumberContext.Provider>
      </div>
    </>
  );
}

export default App;
