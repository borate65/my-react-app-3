/** 1.example--------------------------------------- */

// import "./App.css";

// function App() {
//   let mystyle = { color: "red", background: "green" };

//   return (
//     <div>
//

/* here we have to change class into class name */

//       <h1 className="butify">dnyana !</h1>

//       <h1 style={mystyle}>hi</h1>

//       {/* we can write js in {{}} outer is for js internal is for object literal*/}

//       <h1 style={{ color: "red", backgroungColor: "purple" }}>HEllo World</h1>

//     </div>
//   );
// }
// export default App;

/** 2.example--------------------------------------- */

//import "./index.js"; this statement we write in index.js
//because it is globally access file
// function App() {
//   return (
//     <div>
//       <h1 className="butify">External CSS styling</h1>
//     </div>
//   );
// }
// export default App;

//3. example --------------------------------------

// function App() {
//   return (
//     <div>
//       <h1 className="bg-dark text-light p-3">Bootstrap Styling!</h1>

//       <h1 className="bg-success" style={{ color: "#fff" }}>
//         hello
//       </h1>
//     </div>
//   );
// }

// export default App;

//4. example --------------------------------------

import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("primary");

  // Member funcn
  let makePrimaryTheme = () => {
    theme = "primary";
    setTheme(theme);
  };

  let makeSuccessTheme = () => {
    theme = "success";
    setTheme(theme);
  };

  let makeDangerTheme = () => {
    theme = "danger";
    setTheme(theme);
  };

  return (
    <div>
      <h1 className={`bg-${theme} text-light p-3`}>
        Bootstrap Styling! {theme}
      </h1>

      <input
        className="btn btn-primary"
        type="button"
        value="Primary Theme"
        onClick={makePrimaryTheme}
      />
      <input
        className="btn btn-success"
        type="button"
        value="Success Theme"
        onClick={makeSuccessTheme}
      />
      <input
        className="btn btn-danger"
        type="button"
        value="Danger Theme"
        onClick={makeDangerTheme}
      />
    </div>
  );
}

export default App;
