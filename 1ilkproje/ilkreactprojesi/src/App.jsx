import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const nameSurname = "Osman Yıldız";
  const students = 43000;
  const dogruMU = false;
  const date = "date";
  const url = "https://picsum.photos/250/250";
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <h1>İsim Soyisim: {nameSurname}</h1>
        <p>Öğrenci sayısı: {students}</p>
        <p>Doğru mu?: {dogruMU}</p>
        <input type="text" />

        {dogruMU ? <p>Öğrenci sayısı</p> : <p>Kurs Sayısı</p>}

        <input type={date} />
        <img src={url} alt="" />
      </div> */}

      <div className="box"></div>
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "black",
          marginTop: "10px",
        }}
      ></div>
    </>
  );
}

export default App;
