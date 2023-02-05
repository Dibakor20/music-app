import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SongProps } from "../home/Search";

const SongCard = ({ coverImg, songTitle, id, url, isFavourite }: SongProps) => {
  const [playing, setPlaying] = useState(false);
    const togglePlaying = () => setPlaying(!playing);
    
  return (
    <>
      <div className="musicCard">
        <div>
          <img src={coverImg} alt="" className="card-img" />
        </div>
        <div className="cardHolder">
          <h3 className="musicTitle">{songTitle}</h3>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary mt-2">
              Add to playlist
            </button>
            <div className="song-icon">
              <i className="fa-solid fa-star mx-2"></i>
            </div>
          </div>

          <div className="mt-3">
            <audio
              src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a"
              controls={true}
              onPlay={togglePlaying}
              onPause={togglePlaying}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SongCard;
