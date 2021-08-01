import "./App.css";
import React, { useState, useEffect } from "react";
//import Board from "./Components/Board/Board";
//import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import GameLobby from "./Components/Lobby/GameLobby";
//import { useDispatch } from "react-redux";
import craziestTheme from "./craziestTheme";
import { ThemeProvider } from "evergreen-ui";

const App = () => {
  useEffect(() => {
    handleLoad();
  }, []);

  const storageContents = {
    playerId: localStorage.getItem("player_id"),
    gameId: localStorage.getItem("game_id"),
    authToken: localStorage.getItem("auth_token"),
  };

  const [newVisit, setNewVisit] = useState(false);

  const handleLoad = () => {
    // check localStorage for existing game and player ids, use to determine which component to load

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
    <ThemeProvider value={craziestTheme}>
      <Navbar newVisit={newVisit} />
      {newVisit ? <GameLobby /> : <div>game board</div>}
    </ThemeProvider>

    //<Router>
    //<div className="App">
    //<main className="flexbox">
    //<br />
    //<Board id="board-1" className="board">
    //<Card
    //id="card-1"
    //className="card"
    //draggable="true"
    //suit="C"
    //rank="2"
    //scalePct="50%"
    //></Card>
    //</Board>

    //<Board id="board-2" className="board">
    //<Card
    //id="card-2"
    //className="card"
    //draggable="true"
    //specialCard="back"
    //scalePct="25%"
    //></Card>
    //</Board>
    //</main>
    //</div>
    //</Router>
  );
};

export default App;
