import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import {TextField, FormGroup, InputAdornment } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MessageList() {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const inputRef = useRef();

    const addMessage = () => {
        setMessageList(prev => [...prev, { author: "Admin", text: value }]);
        setValue("");
        inputRef.current.focus();
    }

    useEffect(() => {
        const lastMsg = messageList[messageList.length - 1];
        let timer = null;

        if (lastMsg && lastMsg.author === "Admin") {
            timer = setTimeout(() => {
                setMessageList(prev => [...prev, { author: "Bot", text: "Answer text" }]);
            }, 500);

            return () => {
                clearInterval(timer);
            }
        }
    }, [messageList]);

    const PressInput = ({ code }) => {
        if (code === "Enter") {
            addMessage();
        }
    };

    return (
        <>
            <FormGroup>
                {messageList.map((message, index) => (
                    <Message message={message} key={index}/>
                ))}
                <FormGroup row>
                    <TextField 
                        inputRef={inputRef}
                        id="outlined-basic" 
                        label="Message" 
                        variant="outlined" 
                        autoFocus
                        value={value} 
                        onChange={(e) => setValue(e.target.value)}
                        InputProps={
                            {
                                endAdornment: 
                                    <InputAdornment position="end">
                                        {value && <ArrowForwardIcon onClick={addMessage} />}
                                    </InputAdornment>
                            }
                        } 
                        onKeyPress={PressInput} />
                </FormGroup>
            </FormGroup>
        </>
    )
}

export default MessageList;