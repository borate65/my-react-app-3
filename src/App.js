import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={HandleError}>
      <HelloWorld />
    </ErrorBoundary>
  );

  function HandleError({ error }) {
    console.log("This error occured", error);
    return (
      <div>
        <h1>An Error occured</h1>
      </div>
    );
  }

  function HelloWorld() {
    let [user] = useState({ id: 1, name: "dnyaneshawar" });
    return (
      <div>
        <h1>Hello World</h1>
        <h1>{user}</h1>
      </div>
    );
  }
}
export default App;
