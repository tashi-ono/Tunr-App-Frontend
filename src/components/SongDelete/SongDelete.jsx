import React from "react";
import axios from "axios";
import "./SongDelete.css";
import apiUrl from "../../apiConfig";

const SongDelete = ({ songId, refreshSongs }) => {
  const deleteSong = async () => {
    try {
      await axios.delete(`${apiUrl}/${songId}`);
      refreshSongs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <span className="delete-button" onClick={deleteSong}>
      X
    </span>
  );
};

export default SongDelete;
