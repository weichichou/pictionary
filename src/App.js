import React from "react";
import io from "socket.io-client";
//import logo from './logo.svg';
import "./App.css";
import Hint from "./components/Hint";
import Canvas from "./components/Canvas";
import Chat from "./components/Chat";
import QuestionSelection from "./components/QuestionSelection";

class App extends React.Component {
  state = {
    socket: io("http://localhost:3001/"),
    username: null,
  };

  registerUsername = () => {
    let userInput = window.prompt("What is your name?", "");
    this.setState({ username: userInput });
  };

  render() {
    if (this.state.username === null) {
      this.registerUsername();
    }

    return (
      <div>
        <div className="App">
          <header>
            <Hint />
          </header>
          <main className="main-div">
            <Canvas socket={this.state.socket} />
            <Chat socket={this.state.socket} username={this.state.username} />
          </main>
          <footer>
            <QuestionSelection socket={this.state.socket} />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
