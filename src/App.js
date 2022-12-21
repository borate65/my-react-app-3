import axios from "axios";
import { useState } from "react";

function App() {
  //this is for statefull application
  let [title] = useState("Api Demo");
  let [messageList, setMessageList] = useState([]);

  let getAllMessage = async () => {
    let url = `http://localhost:3001/message`;
    let response = await axios.get(url);

    // console.log(response);
    // getting the message from server:: And re-rendering

    messageList = [...response.data];
    setMessageList(messageList);

    // console.log(response);
    // Getting the Message From Server :: And re-rendering
  };

  let createNewMessage = async () => {
    let url = `http://localhost:3001`;
    let data = {
      message: "test Message",
      messageTime: new Date(),
      reply: true,
    };
    await axios.post(url, data);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="button"
        value="make ajax Api/Get Call"
        onClick={getAllMessage}
      />
      <input
        type="button"
        value="make ajax Api/Post Call"
        onClick={createNewMessage}
      />
      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}
export default App;
