import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

import { Container } from "./styles";

export default function BarsChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let value = [];
    let months = [];
    axios
      .get("https://private-afe609-testefront.apiary-mock.com/anual-result")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          value.push(parseInt(dataObj.value));
          months.push(dataObj.label);
        }
        const colors = res.data.map((element) => "#03A9F4");

        setChartData({
          labels: months,
          datasets: [
            {
              label: "legend 1",
              data: value,
              backgroundColor: colors,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Container>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: "BARS CHART",
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
