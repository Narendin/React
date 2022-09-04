import { useState } from "react";
import {List, ListItem, ListItemText } from "@mui/material";

function ChatList(){

    const [chatList, setChatList] = useState(['Chat1', 'Chat2', 'Chat3'])

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360}}>
                {chatList.map((chat) => (
                    <ListItem>
                        <ListItemText primary={chat}/>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default ChatList;