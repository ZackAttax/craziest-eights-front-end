import React from "react";
import { Card, Heading } from "evergreen-ui";
import PropTypes from "prop-types";

const GameEntry = (props) => {
  const { game } = props;

  const handleJoinGameClick = () => {
    // take
    console.log(game.id);
  };

  return (
    <Card
      background="tint1"
      margin={10}
      padding={5}
      onClick={handleJoinGameClick}
    >
      <Heading>{game.name}</Heading>
      <Heading>
        {game.player_count == 1
          ? `${game.player_count} Player`
          : `${game.player_count} Players`}
      </Heading>
    </Card>
  );
};

GameEntry.propTypes = {
  game: PropTypes.object,
};

export default GameEntry;
