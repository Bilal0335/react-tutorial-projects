import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// export function MyApp() {
//   return (
//     <>
//       <h1>Custom React !</h1>
//     </>
//   );
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Gogle
//   </a>
// );

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "click google"
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <MyApp /> */}
    {/* {anotherElement} */}
    {/* {reactElement} */}
  </StrictMode>
);
