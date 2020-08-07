import React from "react";
import axios from "axios";
import "./SongDelete.css";

const SongDelete = ({ songId, refreshSongs }) => {
  const deleteSong = async () => {
    try {
      await axios.delete(`http://localhost:3000/songs/${songId}`);
      refreshSongs();
    } catch (err) {
      console.error(err);
    }
  };

  return <span onClick={deleteSong}>X</span>;
};

export default SongDelete;
