import React from "react";
import { Line } from "@ant-design/plots";

const MultiLineChart = () => {
  const data = [
    {
      name: "Total Deposit",
      month: "Jan",
      amount: 200,
    },
    {
      name: "Total Deposit",
      month: "Feb",
      amount: 250,
    },
    {
      name: "Total Deposit",
      month: "Mar",
      amount: 200,
    },
    {
      name: "Total Deposit",
      month: "Apr",
      amount: 180,
    },
    {
      name: "Total Deposit",
      month: "May",
      amount: 200,
    },
    {
      name: "Total Deposit",
      month: "Jun",
      amount: 300,
    },
    {
      name: "Total Deposit",
      month: "Jul",
      amount: 220,
    },
    {
      name: "Total Deposit",
      month: "Aug",
      amount: 200,
    },
    {
      name: "Total Deposit",
      month: "Sep",
      amount: 250,
    },
    {
      name: "Total Deposit",
      month: "Oct",
      amount: 300,
    },
    {
      name: "Total Deposit",
      month: "Nov",
      amount: 180,
    },
    {
      name: "Total Deposit",
      month: "Dec",
      amount: 240,
    },
    {
      name: "Total Withdraw",
      month: "Jan",
      amount: 180,
    },
    {
      name: "Total Withdraw",
      month: "Feb",
      amount: 170,
    },
    {
      name: "Total Withdraw",
      month: "Mar",
      amount: 110,
    },
    {
      name: "Total Withdraw",
      month: "Apr",
      amount: 156,
    },
    {
      name: "Total Withdraw",
      month: "May",
      amount: 170,
    },
    {
      name: "Total Withdraw",
      month: "Jun",
      amount: 180,
    },
    {
      name: "Total Withdraw",
      month: "Jul",
      amount: 70,
    },
    {
      name: "Total Withdraw",
      month: "Aug",
      amount: 190,
    },
    {
      name: "Total Withdraw",
      month: "Sep",
      amount: 100,
    },
    {
      name: "Total Withdraw",
      month: "Oct",
      amount: 200,
    },
    {
      name: "Total Withdraw",
      month: "Nov",
      amount: 250,
    },
    {
      name: "Total Withdraw",
      month: "Dec",
      amount: 170,
    },
  ];
  const config = {
    data,
    xField: "month",
    yField: "amount",
    seriesField: "name",
    // yAxis: {
    //   label: {
    //     formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
    //   },
    // },
    legend: {
      position: "top",
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };
  return (
    <div>
      <Line {...config} />
    </div>
  );
};

export default MultiLineChart;
