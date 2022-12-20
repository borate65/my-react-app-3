import { useState } from "react";
function App() {
  let list = ["mumbai", "delhi", "pune", "satara"];
  return (
    <div>
      <h1>Map Demo</h1>
      {list.map((item) => (
        <div className="alert alert-primary my-3">{item}</div>
      ))}
    </div>
  );
}
export default App;
