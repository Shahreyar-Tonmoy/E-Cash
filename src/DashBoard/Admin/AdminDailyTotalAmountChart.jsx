// src/components/AdminDailyTotalAmountChart.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Chart } from 'react-google-charts';

const fetchDailyTotalAmount = async () => {
  try {
    const response = await fetch("http://localhost:5000/get/daily/totalAmount");
    if (!response.ok) {
      throw new Error("Failed to fetch daily total amount data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching daily total amount data:", error);
    throw error;
  }
};

const AdminDailyTotalAmountChart = () => {
  const { data: dailyTotalAmountData, error, isLoading } = useQuery({
    queryKey: "dailyTotalAmountData",
    queryFn: fetchDailyTotalAmount,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error("Error fetching daily total amount data:", error);
    return <p>Error fetching data</p>;
  }

  const chartData = [
    ["Date", "Total Amount", { role: "style" }], // Add an additional column for color
    ...(dailyTotalAmountData || []).map((entry) => [
      entry.date,
      entry.totalAmount,
      getRandomColor(), // Generate a random color for each day
    ]),
  ];

  const chartOptions = {
    title: "Daily Transaction Amounts", // Move title outside the chart object
    subtitle: "in BDT",

  };

  // Check if there is data to render the chart
  if (!dailyTotalAmountData || dailyTotalAmountData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="lg:w-full md:w-3/4 mx-auto">
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default AdminDailyTotalAmountChart;

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
