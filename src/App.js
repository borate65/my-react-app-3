import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //data member
  let [title] = useState("API DEMO");
  let [messageList, setMessageList] = useState([]);

  //special function; Hook:: Like Construtor:: called while the componunt initilized.
  //like default construtor
  useEffect(() => {
    // console.log("i am getting called");
    getAllMessages();
  }, []);

  //member Function
  let getAllMessages = async () => {
    let url = `http://localhost:3001/messages`;
    let response = await axios.get(url);
    //console.log(response)

    messageList = [...response.data];
    setMessageList(messageList);
  };
  let createNewMessage = async () => {
    let url = `http://localhost:3001`;
    let data = {
      message: "cdac message",
      messageTime: new Date(),
      reply: true,
    };
    await axios.post(url, data);
    //to refresh the content
    getAllMessages();
  };

  return (
    <div>
      <h1>{title}</h1>

      <input
        type="button"
        value="Make Ajax/API GET Call"
        onClick={getAllMessages}
      />

      <input
        type="button"
        value="Make Ajax/API POST Call"
        onClick={createNewMessage}
      />

      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}
export default App;
