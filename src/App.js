import React, { useState, useEffect } from "react";
import Playlist from "./components/Playlist/Playlist";
import FaveList from "./components/FaveList/FaveList";
import SongCreate from "./components/SongCreate/SongCreate";
import axios from "axios";
import "./App.css";
import apiUrl from "./apiConfig";

function App() {
  const [songs, setSongs] = useState([]);

  const refreshSongs = async () => {
    try {
      const allSongs = await axios.get(`${apiUrl}`);
      console.log("Playlist data", allSongs.data);
      setSongs(allSongs.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refreshSongs();
  }, []);

  return (
    <div className="App">
      <h1>TUNR.</h1>
      <h4>FOR ALL YOUR PLAYLIST NEEDS</h4>
      <Playlist refreshSongs={refreshSongs} songs={songs} />
      <FaveList songs={songs} />
      <SongCreate refreshSongs={refreshSongs} />
    </div>
  );
}

export default App;
