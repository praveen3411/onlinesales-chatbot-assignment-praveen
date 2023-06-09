import React, { useState } from "react";
import "./App.css";
import ChatBox from "./MainData";

export default function LandingPage() {
  const [chatBoxes, setChatBoxes] = useState([]);
  const [messageList, setMessageList] = useState([]);

  const addChatBox = () => {
    const newChatBox = {
      id: chatBoxes.length + 1,
      messages: [],
    };
    setChatBoxes([...chatBoxes, newChatBox]);
  };

  const sendMessage = (chatBoxId, messageText) => {
    const newMessage = {
      text: messageText,
      isSelf: true,
    };
    const updatedChatBoxes = chatBoxes.map((chatBox) => {
      if (chatBox.id === chatBoxId) {
        return {
          ...chatBox,
          messages: [...chatBox.messages, newMessage],
        };
      }
      return chatBox;
    });
    setChatBoxes(updatedChatBoxes);
    setMessageList([...messageList, newMessage]);
  };

  const closeBox = (chatBoxId) => {
    const updatedChatBoxes = chatBoxes.filter(
      (chatBox) => chatBox.id !== chatBoxId
    );
    setChatBoxes(updatedChatBoxes);
  };

  return (
    <div>
      <div>
        {" "}
        <button className="add-btn" onClick={addChatBox}>
          Add Chat Box
        </button>
      </div>
      <div className="app">
          {chatBoxes.map((chatBox) => (
            <ChatBox
              key={chatBox.id}
              id={chatBox.id}
              messages={chatBox.messages.concat(messageList)}
              sendMessage={sendMessage}
              closeBox={closeBox}
            />
          ))}
        </div>
    </div>
  );
}
