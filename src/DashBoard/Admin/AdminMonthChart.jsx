/* eslint-disable react/no-deprecated */

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';

const axiosPublic = UseAxiosPublic();
const queryClient = new QueryClient();

const AdminMonthChart = () => {
  const {
    isFetching,
    isError,
    error,
    data
  } = useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const res = await axiosPublic.get('/get/month/transaction');
      return res.data; // Assuming the response is an object with a 'data' property
    },
  });

  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'graph',
        stacked: false,
      },
      title: {
        text: 'E-Cash - Yearly Analysis (2024 - current)',
        align: 'center',
        offsetX: 110,
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB',
          },
          labels: {
            style: {
              colors: '#008FFB',
            },
          },
          title: {
            text: 'Income (thousand crores)',
            style: {
              color: '#008FFB',
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396',
          },
          labels: {
            style: {
              colors: '#00E396',
            },
          },
          title: {
            text: 'Operating Cashflow (thousand crores)',
            style: {
              color: '#00E396',
            },
          },
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FEB019',
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
          title: {
            text: 'Revenue (thousand crores)',
            style: {
              color: '#FEB019',
            },
          },
        },
      ],
      // ... (rest of your options)
    },
  });

  useEffect(() => {
    if (data) {
      const series = data?.map((item) => ({
        name: `Month ${item.month}`,
        type: 'column',
        data: [item.totalAmount],
      }));

      const categories = data?.map((item) => `Month ${item.month}`);

      setChartData((prevData) => ({
        ...prevData,
        series,
        options: { ...prevData.options, xaxis: { categories } },
      }));
    }
  }, [data]);

  if (isFetching) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-40">
        <svg
          className="animate-spin h-8 w-8 text-black mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx={12}
            cy={12}
            r={10}
            stroke="currentColor"
            strokeWidth={4}
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="text-black text-3xl font-bold">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

// Use window.onload instead of DOMContentLoaded
window.onload = () => {
  const domContainer = document.querySelector('#app');
  ReactDOM.render(
    <QueryClientProvider client={queryClient}>
      <AdminMonthChart />
    </QueryClientProvider>,
    domContainer
  );
};

export default AdminMonthChart;
