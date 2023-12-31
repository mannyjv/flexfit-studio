import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/flexfit-log.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="230px" height="55px" />
        <Typography variant="h6" pb="40px">
          Made by Emmanuel Vazquez
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
