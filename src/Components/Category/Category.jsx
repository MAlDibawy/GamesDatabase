import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Game from "../Game/Game";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";

export default function Category({ category }) {
  const [gamesList, setGamesList] = useState([]);
  const { getGames } = useOutletContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (gamesList.length == 0) {
      setIsLoading(true);
      getGames(category).then((res) => {
        setGamesList(res);
        setIsLoading(false);
      });
    }
  }, [category]);

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
