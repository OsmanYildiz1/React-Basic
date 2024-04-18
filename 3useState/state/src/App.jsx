import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);

  const toDark = () => setTheme();

  function Arttır() {
    setValue(value + 1);
  }

  function Azalt() {
    setValue(value - 1);
  }
  return (
    <>
      <div className="App">
        <button onClick={Arttır}>Ekle</button>
        <button onClick={Azalt}>Azalt</button>
        <p>{value}</p>
      </div>
    </>
  );
}

export default App;
