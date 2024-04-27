import React, { useState } from "react";
import { IoEnterOutline } from "react-icons/io5";

function Chatbot() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const getResponse = async () => {
    try {
      setMessages([...messages, { author: text, bot: "Thinking..." }]);

      const response = await fetch(
        `http://uetbackend-4beea4e39ced.herokuapp.com/chatbot/prompt/${text}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setMessages([
        ...messages.slice(0, -1),
        {
          author: data.messages[0].content,
          bot: data.candidates[0].content,
        },
      ]);

      setText("");
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      <div className="chat-bot">
        <div className="chat-header">
          <div className="info-container">
            <h3>Chatbot</h3>
          </div>
        </div>
        <div className="feed">
          {messages?.map((message, index) => (
            <div
              key={index}
              className={`chat ${
                index === 0
                  ? "chat-start"
                  : index === messages.length - 1
                  ? "chat-end"
                  : ""
              }`}
            >
              <div className="chat-bubble">{message.author}</div>
              <div className="chat-bubble">{message.bot}</div>
            </div>
          ))}
        </div>
        <div className="chat-input" style={{ display: "flex", alignItems: "center", gap:'2vw' }}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message here..."
            className="input"
            style={{
              paddingRight: "15vw",
              minHeight: "50px",
              maxHeight: "150px",
              resize: "vertical",
              marginTop: "5vw",
              borderColor: "green",
            }}
          ></textarea>
          <button
            onClick={getResponse}
            className="btn"
            style={{ marginTop: "5vw" }}
          >
            <IoEnterOutline style={{width:'1.6vw', height:'1.6vw'}} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
