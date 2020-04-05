import React from "react";
import Navbar from "../../components/Navbar";
import LineChart from "../../components/LineChart";

import { Container, Charts } from "./styles";

export default function PageTwo() {
  return (
    <Container>
      <Navbar />
      <Charts>
        <LineChart />
      </Charts>
    </Container>
  );
}
