import React from "react";
import SongDelete from "../SongDelete/SongDelete";
import axios from "axios";
import "./Playlist.css";
import apiUrl from "../../apiConfig";

const Playlist = ({ refreshSongs, songs }) => {
  // when song name is clicked, it will change isFave to true and add it to api
  const addToFaves = async (faveSong) => {
    console.log("fave song", faveSong);
    try {
      faveSong.isFave = true;
      await axios.put(`${apiUrl}/${faveSong.id}`, faveSong);
      refreshSongs();
    } catch (err) {
      console.error(err);
    }
  };

  const removeFave = async (unfavedSong) => {
    console.log("unfaved song", unfavedSong);
    try {
      unfavedSong.isFave = false;
      await axios.put(`${apiUrl}/${unfavedSong.id}`, unfavedSong);
      refreshSongs();
    } catch (err) {
      console.error(err);
    }
  };

  let displaySongs = <h2>Loading...</h2>;
  if (songs[0]) {
    displaySongs = songs.map((song) => {
      return (
        <div className="song" key={song.id}>
          <div className="right-details">
            <p onClick={() => addToFaves(song)}>{song.title}</p>
            <p>{song.artist}</p>
          </div>
          <div className="left-details">
            <span>{song.time} </span>
            <SongDelete songId={song.id} refreshSongs={refreshSongs} />
            {song.isFave ? (
              <span
                className="heart-icon"
                role="img"
                aria-label="heart"
                onClick={() => removeFave(song)}
              >
                &#128156;
              </span>
            ) : null}
          </div>
        </div>
      );
    });
  }

  return (
    <div className="playlist-container">
      <h2>PLAYLIST 1</h2>
      {displaySongs}
    </div>
  );
};

export default Playlist;
