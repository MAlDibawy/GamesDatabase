import React, { useState } from "react";
import Game from "../Game/Game";
import { useEffect } from "react";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";
export default function Home() {
  let [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function getGames() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "381169dcb2mshd9473408aa1c670p16ec7djsnd625737eedd0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    setIsLoading(true);
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setGamesList(response);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    if (gamesList.length == 0) {
      getGames();
    }
  }, [gamesList]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        gamesList.map((elem) => (
          <Game
            key={elem.id}
            gId={elem.id}
            thumb={elem.thumbnail}
            title={elem.title}
            desc={elem.short_description}
          />
        ))
      )}
    </>
  );
}
