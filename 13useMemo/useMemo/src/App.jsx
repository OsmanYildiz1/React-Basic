import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunc(number); // number her değiştiğinde fonksiyon çalışacak.
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <>
      <div className="App">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setDark((colorChange) => !colorChange)}>
          Temayı Değiştir
        </button>
        <div style={theme}> {doubleNumber} </div>
      </div>
    </>
  );
}
function slowFunc(num) {
  console.log("Fonksiyon çağrıldı");
  for (let i = 0; i < 1000000000; i++) {
    return num * 2;
  }
}
export default App;
