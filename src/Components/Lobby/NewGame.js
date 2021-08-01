import React, { useState } from "react";
import { Pane, Dialog, Button, TextInput, Heading } from "evergreen-ui";
import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../../redux/gameSlice";

const NewGame = () => {
  const dispatch = useDispatch();
  const [showNewGame, setShowNewGame] = useState(false);
  const [gameName, setGameName] = useState("");
  const [playerName, setPlayerName] = useState("");

  const handleCreateGame = async () =>
    await dispatch(newGame(gameName, playerName));

  const {
    game: {
      game: {
        client: { player_id, game_id, auth_token },
      },
    },
  } = useSelector((state) => state);

  const sendNewGame = () => {
    if (gameName !== "" && playerName !== "") {
      handleCreateGame().then(() => {
        localStorage.setItem("playerId", player_id);
        localStorage.setItem("gameId", game_id);
        localStorage.setItem("authToken", auth_token);
      });
    }
  };

  return (
    <Pane>
      <Dialog
        isShown={showNewGame}
        title="New Game"
        onCloseComplete={() => setShowNewGame(false)}
        onConfirm={() => sendNewGame()}
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
