import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Hint from "./components/Hint";
import Canvas from "./components/Canvas";
import Chat from "./components/Chat";
import QuestionSelection from "./components/QuestionSelection";

function App() {
  return (
    <div className="App">
      <header>
        {/* <h1>pictionary</h1> */}
        <Hint />
      </header>
      <main className="main-div">
        <Canvas />
        <Chat />
      </main>
      <footer>
        <QuestionSelection />
      </footer>
    </div>
  );
}

export default App;
