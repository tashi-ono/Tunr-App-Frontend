import React from "react";
import "./Form.css";

// will need to add a value
const Form = ({ handleChange, handleSubmit, userInput }) => {
  return (
    <div className="form">
      <h2>ADD A NEW SONG</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          name="title"
          placeholder="add title"
          onChange={handleChange}
          value={userInput.title}
        />
        <label htmlFor="artist">Artist: </label>
        <input
          name="artist"
          placeholder="add name"
          onChange={handleChange}
          value={userInput.artist}
        />
        <label htmlFor="time">Time: </label>
        <input
          name="time"
          placeholder="00:00"
          onChange={handleChange}
          value={userInput.time}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
