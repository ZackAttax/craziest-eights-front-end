import React, { useEffect } from "react";
import { Pane, Heading } from "evergreen-ui";
import { useDispatch, useSelector } from "react-redux";
import { getPendingGames } from "../../redux/gameSlice";
import GameEntry from "./GameEntry";
import NewGame from "./NewGame";

const GameLobby = () => {
  const dispatch = useDispatch();
  const handleListGames = async () => await dispatch(getPendingGames());

  useEffect(() => {
    handleListGames();
  }, []);

  const {
    game: {
      game: {
        pending: { games, status },
      },
    },
  } = useSelector((state) => state);

  const showGames = () => {
    if (status == "finished") {
      return games.map((game) => {
        return <GameEntry key={game.id} game={game} />;
      });
    }
  };

  return (
    <Pane
      width="100%"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flex="auto"
      flexDirection="column"
      padding={50}
    >
      <Heading size={900}>Open Games</Heading>
      <Pane>{showGames()}</Pane>
      <Pane>
        <NewGame />
      </Pane>
    </Pane>
  );
};

export default GameLobby;
