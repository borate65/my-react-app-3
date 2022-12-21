import axios from "axios";
import { useState } from "react";

function App() {
  let [title] = useState("API DEMO");
  let [messageList, setMessageList] = useState([]);

  let getAllMessages = async () => {
    //Axios is a promise-based HTTP Client for node.
    //js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
    let url = `http://localhost:3001/messages`;
    let response = await axios.get(url);
    //console.log(response);

    //getting the message list from server :: and rerendering
    messageList = [...response.data];
    setMessageList(messageList);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="button"
        value="make ajax call/api call"
        onClick={getAllMessages}
      />
      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}
export default App;
