import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  async function getGames(category) {
    let data = [];
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "381169dcb2mshd9473408aa1c670p16ec7djsnd625737eedd0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );
      data = await api.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <Header />
      <div className="text-white container my-5 ">
        <div className="row g-4">
          <Outlet context={{ getGames }} />
        </div>
      </div>
    </>
  );
}
