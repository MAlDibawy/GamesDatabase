import React, { useState } from "react";
import Game from "../Game/Game";
import { useEffect } from "react";
export default function Home() {
  let [gamesList, setGamesList] = useState([]);

  function getGames() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "381169dcb2mshd9473408aa1c670p16ec7djsnd625737eedd0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    )
      .then((response) => response.json())
      .then((response) => setGamesList(response))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    if (gamesList.length == 0) {
      getGames();
    }
  }, [gamesList]);

  return (
    <>
      {gamesList.map((elem) => (
        <Game
          key={elem.id}
          thumb={elem.thumbnail}
          title={elem.title}
          desc={elem.short_description}
        />
      ))}
    </>
  );
}
