import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles.css";

function TipCalculator() {
  const [totalAmount, setTotalAmount] = useState("");
  const [percentageOfTip, setPercentageOfTip] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="myForm col-lg-6">
      <h1 className="title"> Basic Tip Calculator </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="hi">
          <Form.Label>Total Bill Amount</Form.Label>
          <Form.Control
            defaultValue="$"
            type="integer"
            className="input_fields"
            name="totalAmount"
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Please enter the percentage of tip you would like to leave
          </Form.Label>

          <Form.Control
            type="integer"
            className="input_fields"
            name="percentageOfTip"
            onChange={(e) => setPercentageOfTip(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {submitted && (
        <div>
          <p className="col-lg-6">
            Amount of tip needed: ${totalAmount * (percentageOfTip / 100)}
          </p>
        </div>
      )}
    </div>
  );
}

export default TipCalculator;
