import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

import { Container } from "./styles";

export default function BarsChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let value = [];
    let label = [];
    axios
      .get("https://private-afe609-testefront.apiary-mock.com/anual-percentage")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          value.push(parseInt(dataObj.value));
          label.push(dataObj.label);
        }
        setChartData({
          labels: label,
          datasets: [
            {
              label: "legend 1",
              data: value,
              backgroundColor: ["#DBECF8", "#2C82BE", "#32B88B"],
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
      <Pie
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: "PIE CHART",
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
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </Container>
  );
}
