export const ROOT_URL = "http://localhost:3000";

const jsonHeaders = (authTrue) => {
  let headers = {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  // if true append auth header
  if (authTrue) {
    headers.headers.Authorization = `Bearer ${localStorage.getItem(
      "authToken",
    )}`;
  }
  return headers;
};

const postOpts = (authTrue) => {
  return { ...jsonHeaders(authTrue), method: "POST" };
};

const userApi = {
  game: {
    index: () =>
      fetch(`${ROOT_URL}/games`, {
        ...jsonHeaders(false),
      }).then((response) => response.json()),

    show: (game, player) =>
      fetch(`${ROOT_URL}/games/${game}/player/${player}`, {
        ...jsonHeaders(true),
      }).then((response) => response.json()),
    create: (name, playerName) =>
      fetch(`${ROOT_URL}/games`, {
        ...postOpts(false),
        body: JSON.stringify({
          game: {
            name: name,
          },
          player: {
            name: playerName,
            is_ai: false,
          },
        }),
      }).then((response) => response.json()),
    // player obj: player: {name: string, is_ai: boolean}
    newPlayer: (game, player) =>
      fetch(`${ROOT_URL}/games/${game}/new_player`, {
        ...postOpts(false),
        body: JSON.stringify({ player: player }),
      }).then((response) => response.json()),
    start: (game, player) =>
      fetch(`${ROOT_URL}/games/${game}/start/player/${player}`, {
        ...postOpts(true),
        body: JSON.stringify({}),
      }).then((response) => response.json()),
    finish: (game, player) =>
      fetch(`${ROOT_URL}/games/${game}/finish/player/${player}`, {
        ...postOpts(true),
        body: JSON.stringify({}),
      }).then((response) => response.json()),
    destroy: (game, player) =>
      fetch(`${ROOT_URL}/games/${game}/player/${player}`, {
        ...jsonHeaders(true),
        method: "DELETE",
      }).then((response) => response.json()),
  },

  player: {
    show: (player) =>
      fetch(`${ROOT_URL}/players/${player}`, {
        ...jsonHeaders(true),
      }).then((response) => response.json()),
    drawCard: (player) =>
      fetch(`${ROOT_URL}/players/${player}/draw`, {
        ...postOpts(true),
        body: JSON.stringify({}),
      }).then((response) => response.json()),
    playCard: (player, card) =>
      fetch(`${ROOT_URL}/players/${player}/play`, {
        ...postOpts(true),
        body: JSON.stringify({ card: card }),
      }).then((response) => response.json()),
  },
};

export default userApi;
