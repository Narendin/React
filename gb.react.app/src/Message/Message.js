import './Message.css'
import {ListItem} from "@mui/material";

function Message({message}) {
    return ( 
    <div className="Message">
        <ListItem>{message.author} : {message.text}</ListItem>
    </div>
    );
}

export default Message;