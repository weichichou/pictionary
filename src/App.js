import React from "react";
import io from "socket.io-client";
//import logo from './logo.svg';
import "./App.css";
import Hint from "./components/Hint";
import Canvas from "./components/Canvas";
import Chat from "./components/Chat";
import QuestionSelection from "./components/QuestionSelection";

class App extends React.Component {
  // componentDidMount = () => {
  //   const socket = io("http://localhost:3001/");
  // };

  render() {
    const socket = io("http://localhost:3001/");
    return (
      <div>
        <div className="App">
          <header>
            {/* <h1>pictionary</h1> */}
            <Hint />
          </header>
          <main className="main-div">
            <Canvas socket={socket} />
            <Chat socket={socket} />
          </main>
          <footer>
            <QuestionSelection socket={socket} />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
