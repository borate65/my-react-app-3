import { useState } from "react";

function App() {
  let [theam, setTheam] = useState();

  let updateTheam = (p1 = "primary") => {
    //this is member function
    theam = p1;
    setTheam(theam);
  };

  return (
    <div>
      <h1 className={`bg-${theam} text-light p-3`}>Bootstrap styling theam</h1>
      <input
        className="btn btn-primary"
        type="button"
        value="primary"
        onClick={() => updateTheam("primary")}
      />
      <input
        className="btn btn-success"
        type="button"
        value="success"
        onClick={() => updateTheam("success")}
      />
      <input
        className="btn btn-danger"
        type="button"
        value="danger"
        onClick={() => updateTheam("danger")}
      />
    </div>
  );
}
export default App;
