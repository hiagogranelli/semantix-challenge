import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

import { Container } from "./styles";

export default function BarsChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let value = [];
    let label = [];
    let valueTwo = [];
    let labelTwo = [];
    axios
      .get("https://private-afe609-testefront.apiary-mock.com/time-data")
      .then((res) => {
        console.log(res);
        for (const lineOne of res.data.today) {
          value.push(parseInt(lineOne.value));
          label.push(lineOne.label);
        }
        for (const lineTwo of res.data.yesterday) {
          valueTwo.push(parseInt(lineTwo.value));
          labelTwo.push(lineTwo.label);
        }
        setChartData({
          labels: label,
          datasets: [
            {
              label: "Today",
              data: value,

              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "#303F9F",
            },
            {
              label: "Yesterday",
              data: valueTwo,

              backgroundColor: "rgba(0,0,0,0)",
              borderColor: "#BF3FFF",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(value, label);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Container>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: "LINE CHART",
            display: true,
            fontColor: "#000",
            fontSize: 32,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </Container>
  );
}
