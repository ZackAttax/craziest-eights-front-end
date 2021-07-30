import "./App.css";
import React from "react";
import { Joker1 } from "./Components/Card/CardFaces";
import { BrowserRouter as Router } from "react-router-dom";
import Board from "./Components/Board/Board";
import Card from "./Components/Card/Card";
const App = () => {
  return (
    <Router>
      <div className="App">
        <main className="flexbox">
          <br />
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
              <p>card one</p>
            </Card>
          </Board>

          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true">
              <p>card two</p>
            </Card>
          </Board>

          <Joker1 />
        </main>
      </div>
    </Router>
  );
};

export default App;
