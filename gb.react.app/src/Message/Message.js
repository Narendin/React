import './Message.css'

function Message({message}) {
    return ( 
    <div className="Message">
        <h3>{message.author} : {message.text}</h3>
    </div>
    );
}

export default Message;