import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const bodyPartsImageSources = {
  all: Icon,
  back: "./back.webp",
  cardio: "./cardio.jpeg",
  chest: "./chest.jpeg",
  "lower arms": "./arms.jpeg",
  "lower legs": "./legs.jpeg",
  neck: "./neck.jpeg",
  shoulders: "./shoulders.jpeg",
  "upper arms": "./arms.jpeg",
  "upper legs": "./legs.jpeg",
  waist: "./waist.jpeg",
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={bodyPartsImageSources[item]}
        alt="dumbbell"
        style={{ width: "150px", height: "150px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
