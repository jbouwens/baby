import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";

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
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control
          type="number"
          name="age"
          min="1"
          max="40"
          placeholder="Age in Weeks"
          value={babyInfo.age}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Go!</Button>
      </FormGroup>
    </Form>
  );
};

export default AgeForm;
