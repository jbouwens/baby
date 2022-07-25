import React from "react";
import { useState } from "react";

const AgeForm = ({ addAge }) => {
  const [babyInfo, setBabyInfo] = useState({
    age: "",
  });

  const handleChange = (event) => {
    setBabyInfo({ ...babyInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAge(babyInfo);
    setBabyInfo({ age: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="age"
          min="1"
          max="40"
          placeholder="Age in Weeks"
          value={babyInfo.age}
          onChange={handleChange}
        ></input>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
};

export default AgeForm;
