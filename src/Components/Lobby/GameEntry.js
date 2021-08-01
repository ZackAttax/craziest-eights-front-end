import React, { useState } from "react";
import { Card, Heading } from "evergreen-ui";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { joinGame } from "../../redux/gameSlice";

const GameEntry = (props) => {
  const dispatch = useDispatch();
  const { game } = props;
  const [showJoin, setShowJoin] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const handleJoinGame = async () => dispatch(joinGame(game.id, playerName));

  const sendJoinGame = () => {};

  return (
    <Pane margin={10} padding={5}>
      <Dialog
        isShown={showJoin}
        title={`Join ${game.name}`}
        oncCloseComplete={() => setShowJoin(false)}
      ></Dialog>
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
