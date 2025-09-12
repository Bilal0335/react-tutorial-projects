import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [counter, setCounter] = useState(15);
  // // let counter = 7;
  // const addValue = () => {
  //   setCounter(counter + 1);
  // };
  // const resetValue = () => {
  //   setCounter(0);
  // };
  // const removeValue = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };

  // ! Exercise 2: Toggle Button (ON/OFF)
  // let [isOn, setIsOn] = useState(false);
  // const toogle = () => {
  //   setIsOn(!isOn);
  // };

  // ! Password Show/Hide
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <h1>chai aur code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <br />
      <button onClick={resetValue}>reset value</button> */}

      {/* <h2>Exercise 2: Toggle Button (ON/OFF)</h2> */}
      {/* <p>Status: {isOn ? "On" : "Off"}</p>
      <button
        onClick={toogle}
        style={{ backgroundColor: isOn ? "green" : "red", color: "white" }}
      >
        {isOn ? "Turn On" : "Turn Off"}
      </button> */}

      <h2>Password Show/Hide</h2>
      <input
        type={show ? "text" : "password"}
        value={password}
        placeholder="enter a password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setShow(!show)}>{show ? "show" : "hide"}</button>
      <p>Your Password: {password}</p>
    </>
  );
}

export default App;
