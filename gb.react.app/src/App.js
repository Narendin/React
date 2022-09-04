import './App.css';
import Message from './Message/Message';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <Message text={'Message text'}/>
      </header>
    </div>
  );
}

export default App;
