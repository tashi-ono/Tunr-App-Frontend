import React, { useState, useEffect } from "react";
import Playlist from "./components/Playlist";
import FaveList from "./components/FaveList";
import SongCreate from "./components/SongCreate";
import axios from "axios";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);

  const refreshSongs = async () => {
    try {
      const allSongs = await axios.get("http://localhost:3000/songs");
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
