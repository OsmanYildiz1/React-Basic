import { useEffect, useState, useRef } from "react";
import "./App.css";
import NumberList from "./NumberList";

function App() {
  const [name, setname] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  const inputFocus = () => {
    inputRef.current.value = "asdas";
  };
  return (
    <>
      <div className="App">
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <div> Benim adım {name}</div>
        <div>{renderCount.current} defa render oldu</div>
        <button onClick={inputFocus}>Focus</button>
      </div>
    </>
  );
}

export default App;
