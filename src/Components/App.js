import React, { useState } from "react";

function TipCalculator() {

  const [totalAmount, setTotalAmount] = useState('');
  const [percentageOfTip, setPercentageOfTip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( "Total Amount Entered: ", totalAmount );
    console.log( "Percentage of Tip you want to give", percentageOfTip + "%" )
    console.log("The amount of tip you should give is $" + totalAmount * (percentageOfTip / 100) )
  }



    return (
      <form onSubmit={handleSubmit}>
        <label>
          Total Bill Amount
          <input
            type="integer"
            name="totalAmount"
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </label>

        <label>
          Please enter the percentage of tip you would like to leave
          <input
            type="integer"
            name="percentageOfTip"
            onChange={(e) => setPercentageOfTip(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }


export default TipCalculator;
