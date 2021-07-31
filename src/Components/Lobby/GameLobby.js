import React, { useEffect } from "react";
import { Pane, Heading } from "evergreen-ui";
import { useDispatch, useSelector } from "react-redux";
import { getPendingGames } from "../../redux/gameSlice";

const GameLobby = () => {
  const dispatch = useDispatch();
  const handleListGames = async () => await dispatch(getPendingGames());

  useEffect(() => {
    handleListGames();
  }, []);

  const {
    game: {
      pending: { games, status },
    },
  } = useSelector((state) => state);

  const showGames = () => {
    if (status == "finished") {
      games.map((game) => {
        return <li key={game.id}>{game.name}</li>;
      });
    }
  };

  return (
    <Pane
      width="100%"
      height="70vw"
      display="flex"
      justifyContent="center"
      padding-top={50}
    >
      <Heading size={900}>Open Games</Heading>
      <ul>{showGames()}</ul>
    </Pane>
  );
};

export default GameLobby;
