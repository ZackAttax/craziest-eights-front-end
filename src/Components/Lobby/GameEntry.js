import React from "react";
import { Card, Heading } from "evergreen-ui";
import PropTypes from "prop-types";

const GameEntry = (props) => {
  // recieves game object in props, which we destructure
  // returns card laid out with game info
  const { game } = props;
  return (
    <Card background="tint1">
      <Heading>{game.name}</Heading>
    </Card>
  );
};

GameEntry.propTypes = {
  game: PropTypes.object,
};

export default GameEntry;
