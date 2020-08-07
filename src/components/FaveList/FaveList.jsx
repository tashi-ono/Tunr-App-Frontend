import React from "react";
import "./FaveList.css";

const FaveList = ({ songs }) => {
  const faveSongs = songs
    .filter((song) => song.isFave)
    .map((song) => {
      return (
        <div key={song.id}>
          <span>{song.title}</span>
          <span>{song.artist}</span>
          <span>{song.time}</span>
        </div>
      );
    });
  return (
    <div className="fave-list">
      <h2>Favorite Songs List</h2>
      <div className="fave-list-headers">
        <span>Song</span>
        <span>Artist</span>
        <span>Time</span>
      </div>
      <div className="fave-song">{faveSongs}</div>
    </div>
  );
};

export default FaveList;
