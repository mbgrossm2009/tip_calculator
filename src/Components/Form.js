import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles.css";
import Alert from "react-bootstrap/Alert";

function TipCalculator() {
  const [totalAmount, setTotalAmount] = useState("$");
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [reset, setReset] = useState("");
  const [error, setError] = useState("");
  const [customTip, setCustomTip] = useState("");

  const handleReset = () => {
    setTotalAmount("$");
    setSelectedOption("");
    setSubmitted(false);
    setReset(true);
    setError("");
    setCustomTip("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      totalAmount === "$" ||
      (selectedOption === "other" && customTip === "")
    ) {
      setError("Please fill out all fields.");
    } else {
      setSubmitted(true);
      setError("");
    }
  };
  return (
    <div className="Container tip_calculator">
      <div className="myForm col-lg-6">
        <h1 className="title"> Basic Tip Calculator </h1>
        <Form className="col-lg-12" onSubmit={handleSubmit}>
          <Form.Group>
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
              <option value="other">Other</option>
              )}
            </Form.Select>
          </Form.Group>
          {selectedOption === "other" && (
            <Form.Group>
              <Form.Control
                type="text"
                className="input_fields"
                name="customTip"
                placeholder="Enter custom tip amount"
                value={customTip}
                onChange={(e) => setCustomTip(e.target.value)}
              />
            </Form.Group>
          )}

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" onClick={handleReset}>
            Reset
          </Button>
        </Form>

        {error && (
          <Alert variant="danger">
            {" "}
            <p className="error">{error}</p>
          </Alert>
        )}

        {submitted && !error && (
          <div>
            <p className="col-lg-6">
              Amount of tip needed: $
              {(() => {
                const amount = parseFloat(totalAmount.replace("$", ""));
                if (selectedOption === "other") {
                  const tipAmount = amount * (parseFloat(customTip) / 100);
                  return tipAmount.toFixed(2);
                } else {
                  const tipAmount = amount * (parseFloat(selectedOption) / 100);
                  return tipAmount.toFixed(2);
                }
              })()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TipCalculator;
