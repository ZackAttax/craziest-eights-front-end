import React, { useState } from "react";
import { Pane, Dialog, Button, TextInput, Heading } from "evergreen-ui";
import { useDispatch } from "react-redux";
import { newGame } from "../../redux/gameSlice";

const NewGame = () => {
  const dispatch = useDispatch();
  const [showNewGame, setShowNewGame] = useState(false);
  const [gameName, setGameName] = useState("");
  const [playerName, setPlayerName] = useState("");

  const handleCreateGame = async () =>
    await dispatch(newGame(gameName, playerName));

  const newGameClick = () => {
    if (gameName !== "" && playerName !== "") {
      handleCreateGame();
    }
  };

  return (
    <Pane>
      <Dialog
        isShown={showNewGame}
        title="New Game"
        onCloseComplete={() => setShowNewGame(false)}
        onConfirm={() => newGameClick()}
        confirmLabel="Create New Game"
      >
        <Heading>put a form to create a new game here</Heading>
        <TextInput
          placeholder="Player Name"
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
        />
        <TextInput
          placeholder="Game Name"
          onChange={(e) => setGameName(e.target.value)}
          value={gameName}
        />
      </Dialog>

      <Button onClick={() => setShowNewGame(true)}>New Game</Button>
    </Pane>
  );
};

export default NewGame;
