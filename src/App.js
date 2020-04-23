import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Canvas from "./components/Canvas";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <header>
        <h1>pictionary</h1>
      </header>
      <main className="main-div">
        <Canvas />
        <Chat />
      </main>
    </div>
  );
}

export default App;
