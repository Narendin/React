import './Message.css'

function Message(props) {
    return ( 
    <div className="Message">
        <h3>{props.text}</h3>
    </div>
    );
}

export default Message;