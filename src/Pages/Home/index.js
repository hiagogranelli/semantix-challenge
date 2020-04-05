import React from "react";
import Navbar from "../../components/Navbar";
import BarsChart from "../../components/BarsChart";
import PieChart from "../../components/PieChart";

import { Container, Charts } from "./styles";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Charts>
        <BarsChart />
        <PieChart />
      </Charts>
    </Container>
  );
}
