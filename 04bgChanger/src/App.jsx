import React, { useState } from "react";
import ColorButton from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("olive ");

  const colors = ["red", "green", "yellow", "blue", "purple", "pink", "black"];

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex-wrap flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-4 py-3 bg-white rounded-2xl shadow-lg">
          {colors.map((clr, index) => (
            <ColorButton key={index} colors={clr} setColor={setColor} className="capitalize"/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
