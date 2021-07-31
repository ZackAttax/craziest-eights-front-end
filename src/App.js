import "./App.css";
import React, { useEffect } from "react";
import { Joker1 } from "./Components/Card/CardFaces";
import { BrowserRouter as Router } from "react-router-dom";
import Board from "./Components/Board/Board";
import Card from "./Components/Card/Card";
import { useDispatch } from "react-redux";

const App = () => {
  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = () => {
    // check localStorage for existing game and player ids, use to determine which component to load
    const storageContents = {
      playerId: localStorage.getItem("playerId"),
      gameId: localStorage.getItem("gameId"),
    };

    if (storageContents.playerId && storageContents.gameId) {
      // dispatch get game and get player for relevant ids
      // if game and player exist
      // render game board
      // this might be its own function
    } else {
      // render game list with about modal on
    }
  };

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
