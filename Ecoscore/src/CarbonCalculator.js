import React, { useState } from "react";
import { Chart } from "chart.js/auto";

const CarbonCalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const calculateAndDisplayScore = () => {
    // get input values
    const electricInput =
      parseFloat(document.getElementById("electric").value) || 0;
    const gasInput = parseFloat(document.getElementById("gas").value) || 0;
    const oilInput = parseFloat(document.getElementById("oil").value) || 0;
    const carInput = parseFloat(document.getElementById("car").value) || 0;
    const flights4LessInput =
      parseFloat(document.getElementById("flights-4-less").value) || 0;
    const flights4MoreInput =
      parseFloat(document.getElementById("flights-4-more").value) || 0;

    // Your existing score calculation logic goes here
    const electricScore = electricInput * 105;
    const gasScore = gasInput * 105;
    const oilScore = oilInput * 113;
    const carScore = carInput * 0.79;
    const flights4LessScore = flights4LessInput * 1100;
    const flights4MoreScore = flights4MoreInput * 4400;

    // calculate scores for each category
    const energyScore = electricScore + gasScore + oilScore;
    const travelScore = carScore + flights4LessScore + flights4MoreScore;

    // calculate total score and round to the nearest whole integer
    const totalScore = Math.round(energyScore + travelScore);

    // set the state to update the UI
    setScore(totalScore);
    setShowResults(true);

    // Create a data array for the Chart.js chart
    const chartData = {
      labels: [
        "Electricity",
        "Natural Gas",
        "Heating Oil",
        "Car Emissions",
        "Flights <4 hours",
        "Flights >4 hours",
      ],
      datasets: [
        {
          backgroundColor: ["blue", "green", "orange", "red", "purple", "pink"],
          data: [
            electricScore,
            gasScore,
            oilScore,
            carScore,
            flights4LessScore,
            flights4MoreScore,
          ],
        },
      ],
    };

    // Set up Chart.js options
    const chartOptions = {
      scales: {
        y: { beginAtZero: true },
      },
    };

    // Get the canvas element and create a chart
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, { type: "bar", data: chartData, options: chartOptions });
  };

  const handleRecalculate = () => {
    // Reset state to default values
    setScore(0);
    setShowResults(false);

    // Additional logic for any other state variables or components that need to be reset
  };

  return (
    <div className="container-fluid">
      {/* Your React components for the calculator UI go here */}
      {/* Example: <ElectricInput onChange={handleElectricChange} /> */}

      <button onClick={calculateAndDisplayScore}>Calculate</button>

      {showResults && (
        <div className="text-center">
          <h1>Score: {score}</h1>
          {/* Display other result information */}
          <button onClick={handleRecalculate}>Recalculate</button>
        </div>
      )}

      {/* Chart component */}
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default CarbonCalculator;
