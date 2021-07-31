import React, { useState } from "react";
import { Pane, Dialog, Button } from "evergreen-ui";
import { useDispatch } from "react-redux";
import { newGame } from "../../redux/gameSlice";

const NewGame = () => {
  const dispatch = useDispatch();
  const handleCreateGame = async (gameName, playerName) =>
    await dispatch(newGame(gameName, playerName));
  const [showNewGame, setShowNewGame] = useState(false);

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="About"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="New Game!"
      >
        put a form to create a new game here
      </Dialog>

      <Button onClick={() => setIsShown(true)}>About</Button>
    </Pane>
  );
};

export default NewGame;
