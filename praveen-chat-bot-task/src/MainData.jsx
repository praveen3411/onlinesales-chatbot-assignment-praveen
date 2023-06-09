import { useState } from "react";
import "./App.css";
export default function ChatBox({ id, messages, sendMessage, closeBox }) {
  const [messageText, setMessageText] = useState("");

  const handleMessageChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      sendMessage(id, messageText);
      setMessageText("");
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-box-header">
        <h2 style={{textAlign:"center"}}>Chat Box {id}</h2>
        <button className="close-btn" onClick={() => closeBox(id)}>
          X
        </button>
      </div>
      <div className="chat-box-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isSelf ? "self" : "other"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-box-input">
        <textarea
          value={messageText}
          onChange={handleMessageChange}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
