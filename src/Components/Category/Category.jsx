import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Game from "../Game/Game";

export default function Category({ category }) {
  const [gamesList, setGamesList] = useState([]);
  const { getGames } = useOutletContext();
  useEffect(() => {
    if (gamesList.length == 0) {
      getGames(category).then((res) => {
        setGamesList(res);
      });
    }
  }, [category]);

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
