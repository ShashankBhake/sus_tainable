import React, { useState, useEffect } from "react";
import { InputNumber, Radio, Button, Typography } from "antd";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Grid, Paper } from "@mui/material";
import "chart.js/auto";
import "./App.css";

const CarbonFootprintCalculator = () => {
  const [chartData, setChartData] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [electricInput, setElectricInput] = useState(0); // Initialize state variables
  const [gasInput, setGasInput] = useState(0);
  const [oilInput, setOilInput] = useState(0);
  const [carInput, setCarInput] = useState(0);
  const [flights4LessInput, setFlights4LessInput] = useState(0);
  const [flights4MoreInput, setFlights4MoreInput] = useState(0);
  const [recycleNewspaper, setRecycleNewspaper] = useState(true);
  const [recycleAlumTin, setRecycleAlumTin] = useState(true);
  const [totalScore, setTotalScore] = useState(0); // Initialize totalScore state

  const calculateScore = () => {
    // Move these calculations inside the calculateScore function
    const electricScore = electricInput * 105;
    const gasScore = gasInput * 105;
    const oilScore = oilInput * 113;
    const carScore = carInput * 0.79;
    const flights4LessScore = flights4LessInput * 1100;
    const flights4MoreScore = flights4MoreInput * 4400;
    const newspaperScore = recycleNewspaper ? 0 : 184;
    const alumTinScore = recycleAlumTin ? 0 : 166;

    const energyScore = electricScore + gasScore + oilScore;
    const travelScore = carScore + flights4LessScore + flights4MoreScore;
    const wasteScore = newspaperScore + alumTinScore;

    const total = Math.round(energyScore + travelScore + wasteScore);
    setTotalScore(total);

    // Set up Chart.js data
    const data = {
      labels: [
        "Electricity",
        "Natural Gas",
        "Heating Oil",
        "Car Emissions",
        "Flights <4 hours",
        "Flights >4 hours",
        "Newspaper",
        "Aluminum and Tin",
      ],
      datasets: [
        {
          backgroundColor: [
            "blue",
            "green",
            "orange",
            "red",
            "purple",
            "pink",
            "brown",
            "gray",
          ],
          data: [
            electricScore,
            gasScore,
            oilScore,
            carScore,
            flights4LessScore,
            flights4MoreScore,
            newspaperScore,
            alumTinScore,
          ],
        },
      ],
    };

    setChartData(data);
    setShowResults(true);
  };

  const handleRecalculate = () => {
    // Reset state for recalculation
    setTotalScore(0);
    setShowResults(false);
  };

  // Add missing chartOptions variable
  const chartOptions = {
    // Add your chart options here
  };
  const pieChartData = chartData;
  const lineChartData = chartData;
  return (
    <>
      <div className="body">
        <Grid container spacing={3}>
          {/* Input and Calculation Section */}
          <Grid item xs={12} md={6}>
            <Paper className="right">
              <h3>Enter values</h3>
              <InputNumber
                className="custom-input-number"
                value={electricInput}
                onChange={(value) => setElectricInput(value)}
              />
              <InputNumber
                className="custom-input-number"
                value={gasInput}
                onChange={(value) => setGasInput(value)}
              />
              <InputNumber
                className="custom-input-number"
                value={oilInput}
                onChange={(value) => setOilInput(value)}
              />
              <InputNumber
                className="custom-input-number"
                value={carInput}
                onChange={(value) => setCarInput(value)}
              />
              <InputNumber
                className="custom-input-number"
                value={flights4LessInput}
                onChange={(value) => setFlights4LessInput(value)}
              />
              <InputNumber
                className="custom-input-number"
                value={flights4MoreInput}
                onChange={(value) => setFlights4MoreInput(value)}
              />

              <Radio.Group
                onChange={(e) => setRecycleNewspaper(e.target.value)}
                value={recycleNewspaper}
              >
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>

              <Radio.Group
                onChange={(e) => setRecycleAlumTin(e.target.value)}
                value={recycleAlumTin}
              >
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>

              {/* Add InputNumber components for all attributes */}
              {/* ... (other InputNumber components) ... */}
              <Button
                className="custom-input-number"
                type="primary"
                onClick={calculateScore}
              >
                Calculate
              </Button>

              {showResults && (
                <div>
                  <p>Your score: {totalScore}</p>
                  <Button onClick={handleRecalculate}>Recalculate</Button>
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="left-inside">
        <Paper className="chart-container">
          <div className="chart-flex-container">
            {/* Bar Chart */}
            <Grid item xs={12} md={6} className="bar">
              {Object.keys(chartData).length > 0 && (
                <>
                  <Typography variant="h6">Bar Chart</Typography>
                  <Bar data={chartData} options={chartOptions} />
                </>
              )}
            </Grid>

            {/* Pie Chart */}
            <Grid item xs={12} md={6} className="pie">
              {Object.keys(pieChartData).length > 0 && (
                <>
                  <Typography variant="h6">Pie Chart</Typography>
                  <Pie data={pieChartData} options={chartOptions} />
                </>
              )}
            </Grid>

            {/* Line Chart */}
            <Grid item xs={12} className="line">
              {Object.keys(lineChartData).length > 0 && (
                <>
                  <Typography variant="h6">Line Chart</Typography>
                  <Line data={lineChartData} options={chartOptions} />
                </>
              )}
            </Grid>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default CarbonFootprintCalculator;
