import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [osman, setOsman] = useState(0);
  const [yildiz, setYildiz] = useState(0);

  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz");
  }, []);

  useEffect(() => {
    console.log("Her zaman çalışır");
  });

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde ve osman değerinde bir değişiklik olduğunda"
    );
  }, [osman]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde ve yildiz değerinde bir değişiklik olduğunda"
    );
  }, [yildiz]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde ve  osman veya  yildiz değerinde bir değişiklik olduğunda"
    );
  }, [osman, yildiz]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setOsman(osman + 1)}>Osman ++</button>
        <div>Osman: {osman}</div>
      </div>

      <div>
        <button onClick={() => setYildiz(yildiz + 1)}>Yildiz ++</button>
        <div>Yildiz: {yildiz}</div>
      </div>
    </div>
  );
}

export default App;
