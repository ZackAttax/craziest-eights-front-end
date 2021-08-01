import React, { useEffect } from "react";
import { Pane, Heading } from "evergreen-ui";
import { useDispatch, useSelector } from "react-redux";
import { getPendingGames } from "../../redux/gameSlice";
import GameEntry from "./GameEntry";
import NewGame from "./NewGame";
import useInterval from "../../useInterval";

const GameLobby = () => {
  const dispatch = useDispatch();
  const handleListGames = async () => await dispatch(getPendingGames());

  useEffect(() => {
    handleListGames();
  }, []);

  useInterval(handleListGames, 3000);

  const {
    game: {
      game: {
        pending: { games },
      },
    },
  } = useSelector((state) => state);

  const showGames = () =>
    games.map((game) => <GameEntry key={game.id} game={game} />);

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
