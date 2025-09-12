import Chai from "./Chai";

function App() {
  const username = "chai aur code";
  return (
    <>
      {/* fragment return <></> */}
      {/* <h1>Hello Vite Reactjs</h1> */}
      {/* React (aur JSX) me {} ko “evaluated expression” ya “JSX expression container” kehte hain. */}
      <h1>testing work</h1>
      <Chai />
      <p>evalueted expression {username}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
        incidunt consectetur nemo quis quidem non saepe, quia culpa commodi at
        officiis sunt? Quas vitae, quam quidem a ad obcaecati neque?
      </p>
    </>
  );
}

export default App;
