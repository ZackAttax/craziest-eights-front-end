import React from "react";
import { Header, Pane } from "element-ui";

const JoinGame = () => {
  const isCreator = () => {
    // checks game info to see if player id is same as game.players[0]
  };

  return (
    <Pane>
      <Header>Joining Game</Header>
      <Header>{isCreator() ? "You created it!" : "Thanks for joining!"}</Header>
    </Pane>
  );
};

export default JoinGame;
