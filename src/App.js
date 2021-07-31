import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Board from "./Components/Board/Board";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";
//import { useDispatch } from "react-redux";

const App = () => {
  useEffect(() => {
    handleLoad();
  }, []);

  const [newVisit, setNewVisit] = useState(false);

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
      setNewVisit(false);
    } else {
      // render game list with about modal on
      setNewVisit(true);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar newVisit={newVisit} />
        <main className="flexbox">
          <br />
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true"></Card>
          </Board>

          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true">
              <p>card two</p>
            </Card>
          </Board>
        </main>
      </div>
    </Router>
  );
};

export default App;
