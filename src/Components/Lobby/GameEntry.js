import React, { useState } from "react";
import { Card, Heading, Pane, Dialog, TextInput } from "evergreen-ui";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { joinGame } from "../../redux/gameSlice";

const GameEntry = (props) => {
  const dispatch = useDispatch();
  const { game } = props;
  const [showJoin, setShowJoin] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const handleJoinGame = async (player) =>
    await dispatch(joinGame(game.id, player));

  const {
    game: {
      game: {
        client: { player_id, game_id, auth_token },
      },
    },
  } = useSelector((state) => state);

  const sendJoinGame = () => {
    if (playerName !== "") {
      console.log(playerName);
      handleJoinGame(playerName).then(() => {
        localStorage.setItem("playerId", player_id);
        localStorage.setItem("gameId", game_id);
        localStorage.setItem("authToken", auth_token);
      });
    }
  };

  return (
    <Pane margin={10} padding={5}>
      <Dialog
        isShown={showJoin}
        title={`Join ${game.name}`}
        onCloseComplete={() => setShowJoin(false)}
        onConfirm={sendJoinGame}
        confirmLabel="Join Game"
      >
        <Heading>{game.name}</Heading>
        <Heading>
          {game.player_count == 1
            ? `${game.player_count} Player`
            : `${game.player_count} Players`}
        </Heading>
        <TextInput
          placeholder="Player Name"
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
        />
      </Dialog>
      <Card background="tint1" onClick={() => setShowJoin(true)}>
        <Heading>{game.name}</Heading>
        <Heading>
          {game.player_count == 1
            ? `${game.player_count} Player`
            : `${game.player_count} Players`}
        </Heading>
      </Card>
    </Pane>
  );
};

GameEntry.propTypes = {
  game: PropTypes.object,
};

export default GameEntry;
