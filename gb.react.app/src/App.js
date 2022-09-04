import './App.css';
import MessageList from './Message/Message-list';
import ChatList from './Chat/ChatList';
import {FormGroup} from "@mui/material";

function App() {
  return (
    <FormGroup row>
        <ChatList/>
        <MessageList/>
    </FormGroup>
  );
}

export default App;
