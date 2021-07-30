export const ROOT_URL = "http://localhost:3000";

const jsonHeaders = {
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=UTF-8",
  },
};

const postOpts = {
  ...jsonHeaders,
  method: "POST",
};

const userApi = {
  game: {
    index: () => {
      fetch(`${ROOT_URL}/games`, {
        ...jsonHeaders,
      }).then((response) => response.json());
    },

    show: (game) => {
      fetch(`${ROOT_URL}/games/${game}`, {
        ...jsonHeaders,
      }).then((response) => response.json());
    },

    create: (name, playerName) => {
      fetch(`${ROOT_URL}/games`, {
        ...postOpts,
        body: JSON.stringify({
          game: {
            name: name,
          },
          player: {
            name: playerName,
            is_ai: false,
          },
        }),
      });
    },

    // player obj: player: {name: string, is_ai: boolean}
    newPlayer: (game, player) => {
      fetch(`${ROOT_URL}/games/${game}/new_player`, {
        ...postOpts,
        body: JSON.stringify({ player: player }),
      }).then((response) => response.json());
    },

    start: (game) => {
      fetch(`${ROOT_URL}/games/${game}/start`, {
        ...postOpts,
        body: JSON.stringify({}),
      }).then((response) => response.json());
    },

    finish: (game) => {
      fetch(`${ROOT_URL}/games/${game}/finish`, {
        ...postOpts,
        body: JSON.stringify({}),
      }).then((response) => response.json());
    },

    destroy: (game) => {
      fetch(`${ROOT_URL}/games/${game}`, {
        ...jsonHeaders,
        method: "DELETE",
      }).then((response) => response.json());
    },
  },

  player: {
    show: (player) => {
      fetch(`${ROOT_URL}/players/${player}`, {
        ...jsonHeaders,
      }).then((response) => response.json());
    },

    drawCard: (player) => {
      fetch(`${ROOT_URL}/players/${player}/draw`, {
        ...postOpts,
        body: JSON.stringify({}),
      }).then((response) => response.json());
    },

    playCard: (player, card) => {
      fetch(`${ROOT_URL}/players/${player}/play`, {
        ...postOpts,
        body: JSON.stringify({ card: card }),
      }).then((response) => response.json());
    },
  },
};

export default userApi;
