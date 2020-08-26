import React from "react";
import "./FaveList.css";

const FaveList = ({ songs }) => {
  const faveSongs = songs
    .filter((song) => song.isFave)
    .map((song) => {
      return (
        <div className="fave-song" key={song.id}>
          <span className="song">{song.title}</span>
          <span className="artist">{song.artist}</span>
          <span className="time">{song.time}</span>
        </div>
      );
    });
  return (
    <>
      <h2>Favorite Songs List</h2>
      <div className="fave-list-container">
        <div className="fave-list-headers">
          <span className="song-header">Song</span>
          <span className="artist-header">Artist</span>
          <span className="time-header">Time</span>
        </div>
        <div className="fave-list">{faveSongs}</div>
      </div>
    </>
  );
};

export default FaveList;
