/** 1.example--------------------------------------- */

import "./App.css";
function App() {
  let mystyle = { color: "red", background: "green" };

  return (
    <div>
      {/*here we have to change class into class name */}

      <h1 className="beautify">dnyana !</h1>

      <h1 style={mystyle}>hi</h1>

      {/* we can write js in {{}} outer is for js internal is for object literal*/}

      <h1 style={{ color: "red", backgroungColor: "purple" }}>
        Jai Maharashtra
      </h1>
    </div>
  );
}
export default App;
