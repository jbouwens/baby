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
    const age = event.target.value;
    setBabyInfo({ ...babyInfo, [event.target.name]: age });
  };

  const handleSubmit = (event) => {
    if (babyInfo.age < 1 || babyInfo.age > 40) return;

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
          minLength={1}
          max="40"
          placeholder="Age in Weeks (1 to 40)"
          value={babyInfo.age}
          onChange={handleChange}
        />
        <div class="input-group-append">
          <Button onClick={handleSubmit}>Go!</Button>
        </div>
      </FormGroup>
    </Form>
  );
};

export default AgeForm;
