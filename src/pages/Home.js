import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "./Exercises";
import SearchExercises from "./SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  //need to have below states in this component because changes in state are going
  //to be reflected in entire application - in this case in SearchExercises and Exercises components
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  //only two components that share the same state, if any more the context hook would be used
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
