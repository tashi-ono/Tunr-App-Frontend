import React from "react";
import SongDelete from "./SongDelete";
import axios from "axios";

const Playlist = ({ refreshSongs, songs }) => {
  // when song name is clicked, it will change isFave to true and add it to api
  const addToFaves = async (faveSong) => {
    console.log("fave song", faveSong);
    try {
      faveSong.isFave = true;
      await axios.put(`http://localhost:3000/songs/${faveSong.id}`, faveSong);
      refreshSongs();
    } catch (err) {
      console.error(err);
    }
  };

  const removeFave = async (unfavedSong) => {
    console.log("unfaved song", unfavedSong);
    try {
      unfavedSong.isFave = false;
      await axios.put(
        `http://localhost:3000/songs/${unfavedSong.id}`,
        unfavedSong
      );
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
          <span onClick={() => addToFaves(song)}>{song.title}</span>
          <span>{song.artist}</span>
          <span>{song.time}</span>
          <SongDelete songId={song.id} refreshSongs={refreshSongs} />
          {song.isFave ? (
            <span className="heart-icon" onClick={() => removeFave(song)}>
              &#128156;
            </span>
          ) : null}
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
