import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles.css";

function TipCalculator() {
  const [totalAmount, setTotalAmount] = useState("$");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [reset, setReset] = useState("");

  const handleReset = () => {
    setTotalAmount("$");
    setSelectedOption("");
    setSubmitted(false);
    setReset(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="Container">
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
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Please select the percentage of tip you would like to leave
            </Form.Label>

            <Form.Select
              aria-label="Default select example"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option>Select Tip Amount</option>
              <option value="15">15%</option>
              <option value="18">18%</option>
              <option value="20">20%</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" onClick={handleReset}>
            Reset
          </Button>
        </Form>

        {submitted && (
          <div>
            <p className="col-lg-6">
              Amount of tip needed: $
              {totalAmount.replace("$", "") * (parseInt(selectedOption) / 100)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TipCalculator;
