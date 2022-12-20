import { useState } from "react";

function App() {
  let [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  let [theam, setTheam] = useState("primary");

  //member Function
  let makePrimaryTheam = () => {
    theam = "primary";
    setTheam(theam);
  };
  let makeSuccessTheam = () => {
    theam = "success";
    setTheam(theam);
  };
  let makeDangerTheam = () => {
    theam = "danger";
    setTheam(theam);
  };

  return (
    <div>
      <div>
        <h1 className={`bg-${theam} text-light p-3`}>BootStrap Styling!!</h1>
        <input
          className="btn btn-primary"
          type="button"
          value=""
          onClick={makePrimaryTheam}
        />
        <input
          className="btn btn-success"
          type="button"
          value=""
          onClick={makeSuccessTheam}
        />
        <input
          className="btn btn-danger"
          type="button"
          value=""
          onClick={makeDangerTheam}
        />
      </div>
      {list.map((item) => (
        <div className={`alert alert-${theam} m-4`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          corrupti commodi assumenda nam ipsam nobis, quis neque nihil magnam
          deserunt iste. Atque consectetur doloremque tenetur, fugiat accusamus
          magni aliquid dolorem.
        </div>
      ))}
      ;
    </div>
  );
}
export default App;
