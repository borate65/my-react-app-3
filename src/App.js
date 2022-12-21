import { useState } from "react";
function App() {
  return (
    <div>
      <AppHeader />
      <AppBody />
      <AppBody />
      <AppBody />
      <AppBody />
      <AppBody />
      <AppBody />
      <AppBody />
      <AppFooter />
    </div>
  );

  function AppHeader() {
    return (
      <div className="bg-dark text-light p-3">
        <div className="fs-3">Shoping Book</div>
      </div>
    );
  }
  function AppBody() {
    let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    return (
      <div className="row">
        {list.map((item, index) => (
          <div key={index} className="col-12 col-md-3 my-2">
            <div className="card">
              <img
                src={`https://picsum.photos/${250 + index}`}
                alt=""
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-header bg-success">
                <h4>Nature</h4>
              </div>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                maxime quam atque vero molestias! Nulla, earum voluptatem culpa
                id quis deserunt eveniet modi. Inventore excepturi eaque ex
                mollitia deserunt exercitationem!
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  function AppFooter() {
    return (
      <div
        className="bg-secondary d-flex flex-column justify-content-center align-items-center"
        style={{ height: "400px" }}
      >
        <div className="text-light fs-4">Copy Right by Student Community!</div>
        <div className="text-light fs-6">Follow Us @Twitter</div>
        <div className="text-light fs-6"> Follow Us @Youtube</div>
        <div className="text-light fs-6"> Follow Us @Fb</div>
      </div>
    );
  }
}

export default App;
