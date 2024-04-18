import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <PersonalInfo />
      </div>
    </>
  );
}

export default App;
