import React from "react";
import GameModal from "./../Modal/GameModal";

export default function Game({ gId, thumb, title, desc }) {
  // console.log(id);
  return (
    <GameModal gId={gId}>
      <div>
        <div className="gameContent bg-secondary p-2 rounded">
          <img src={thumb} alt="test" className="w-100" />
          <h4 className="py-2">{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </GameModal>
  );
}
