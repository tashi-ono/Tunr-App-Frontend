import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

const SongCreate = ({ refreshSongs }) => {
  // take in user input
  const [userInput, setUserInput] = useState({
    title: "",
    artist: "",
    time: "",
  });

  // handle change to set each form input into our object

  const handleChange = (event) => {
    console.log("handling change", event.target.value);
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createSong(userInput);
    setUserInput({ title: "", artist: "", time: "" });
  };

  const createSong = async (newSongObj) => {
    try {
      await axios.post(`http://localhost:3000/songs`, newSongObj);
      refreshSongs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      userInput={userInput}
    />
  );
};

export default SongCreate;
