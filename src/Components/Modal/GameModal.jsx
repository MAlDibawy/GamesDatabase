import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function GameModal({ children, gId }) {
  const [game, setGame] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getDetails(gId) {
    let data = {};
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "381169dcb2mshd9473408aa1c670p16ec7djsnd625737eedd0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gId}`,
        options
      );
      data = await api.json();
      return data;
    } catch (error) {
      return error;
    }
  }
  useEffect(() => {
    if (game === null && show) {
      getDetails(gId).then((res) => {
        setGame(res);
      });
    }
  }, [show]);

  return (
    <>
      <div className="col-md-6 col-lg-3" role="button" onClick={handleShow}>
        {children}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="rounded-2 modal-lg"
      >
        <Modal.Header className="d-block">
          <Modal.Title>
            <h2 className="text-uppercase section-header text-center fw-bolder">
              {game?.title}
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center py-3">
            <img
              src={game?.thumbnail}
              alt="game poster"
              className="rounded-2"
              onClick={handleShow}
            />
          </div>
          <p className="category">
            Category: <span className="badge text-bg-info">{game?.genre}</span>
          </p>
          <p className="platform">
            Platform:{" "}
            <span className="badge text-bg-info">{game?.platform}</span>
          </p>
          <p className="status">
            Status: <span className="badge text-bg-info">{game?.status}</span>
          </p>
          <p className="small">{game?.description}</p>
          <a
            className="btn btn-primary text-white"
            target="_blank"
            href={game?.game_url}
          >
            Game Official Website
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleClose}
            className="m-auto"
            style={{ background: "#1abc9c", border: "none" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
