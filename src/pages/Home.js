import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "./Exercises";
import SearchExercises from "./SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  // const [data, setData] = useState(second);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
