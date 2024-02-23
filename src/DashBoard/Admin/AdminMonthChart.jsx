// AdminMonthChart.jsx

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Chart } from 'react-google-charts';



const fetchMonthlyData = async () => {
  try {
    const response = await fetch("http://localhost:5000/get/month/transaction");
    if (!response.ok) {
      throw new Error("Failed to fetch monthly data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching monthly data:", error);
    throw error;
  }
};

const AdminMonthChart = () => {
  const { data: monthlyData, error, isLoading } = useQuery({
    queryKey: "monthlyData",
    queryFn: fetchMonthlyData,
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    console.error("Error fetching monthly data:", error);
    return <p>Error fetching data</p>;
  }

  const chartData = [
    ["Month", "Total Amount", { role: "style" }], // Add an additional column for color
    ...(monthlyData || []).map((entry) => [
      entry.monthName,
      entry.totalAmount,
      getRandomColor(), // Generate a random color for each month
    ]),
  ];

  const chartOptions = {

      title: "Monthly Transaction Amounts",
      subtitle: "in BDT ",

  };

  // Check if there is data to render the chart
  if (!monthlyData || monthlyData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="lg:w-full md:w-3/4  mx-auto">
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={chartData}
        options={chartOptions}
      />



    </div>
  );
};

export default AdminMonthChart;

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
