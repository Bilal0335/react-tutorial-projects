import React from "react";
import Card from "../src/components/Cars";
const App = () => {
  // let myObj = {
  //   name: "bilal",
  //   channel: "chai aur code",
  //   address: "pakistan",
  // };

  // let objArr = ["bilal", "ahmed", "khan"];
  return (
    <>
      <h1 className="text-3xl text-red-600 text-center m-auto p-8">
        Props Topic
      </h1>
      <Card username="Bilal" btnText="click me" />
      <Card username="Junaid" btnText="visited me" />
      <Card username="Junaid" />
      {/* <Card channel="chai aur code"/> */}
      {/* <Card someObj={myObj}/> */}
      {/* <Card someArr={objArr}/> */}
    </>
  );
};

export default App;
