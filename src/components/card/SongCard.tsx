import React from "react";
import { Link } from "react-router-dom";
import { SongProps } from "../home/Search";

const SongCard = ({ coverImg, songTitle, id, url, isFavourite }: SongProps) => {
  return (
    <>
      <div className="musicCard">
        <div>
          <img src={coverImg} alt="" className="card-img" />
        </div>
        <div className="cardHolder">
          <h3 className="musicTitle">{songTitle}</h3>
        </div>
      </div>
    </>
  );
};

export default SongCard;
