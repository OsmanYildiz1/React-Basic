import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NumberList from "./NumberList";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  const getItems = useCallback(
    (inc) => {
      // 2 değeri inc'e karşılık gelir
      return [number + inc, number + 1 + inc, number + 2 + inc];
    },
    [number]
  ); // number değiştiğinde render et, diğer değişiklikler olduğunda burayı calıstırma cachedekini kullan.

  return (
    <>
      <div className="App">
        <div style={theme}>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setDark((colorChange) => !colorChange)}>
            Temayı Değiştir
          </button>

          <NumberList getItems={getItems} />
        </div>
      </div>
    </>
  );
}
// function slowFunc(num) {
//   for (let i = 0; i < 1000000000; i++) {
//     return num * 2;
//   }
// }
export default App;
