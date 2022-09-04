import React, { useState, useEffect } from "react";
import Message from "./Message";

function MessageList() {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");

    const addMessage = () => {
        setMessageList(prev => [...prev, { author: "Admin", text: value }]);
        setValue("");
    }

    useEffect(() => {
        const lastMsg = messageList[messageList.length - 1];
        let timer = null;

        if (lastMsg && lastMsg.author === "Admin") {
            timer = setTimeout(() => {
                setMessageList(prev => [...prev, { author: "Bot", text: "Answer text" }]);
            }, 1500);

            return () => {
                clearInterval(timer);
            }
        }
    }, [messageList]);

    return (
        <>
            <div> 
                {messageList.map((message, index) => (
                    <Message message={message} key={index}/>
                ))}
            </div>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <button className="counter-button" onClick={addMessage}>Click!</button>
            </div>
        </>
    )
}

export default MessageList;