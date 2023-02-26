import React from "react";

import { Box, Button, Container, Grid, useMediaQuery } from "@mui/material";

import {
  Launchpadimg,
  platfombutoon,
  LaunchpadBg,
  launchpadTop,
} from "./Images";

import { MainHeading, ParagraphText } from "./Metaverse";

const Launchpad = () => {
  const check = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        backgroundImage: `url(${LaunchpadBg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        // background:
        //   "linear-gradient(179.04deg, rgba(79, 152, 208, 0.2) 0.89%, rgba(52, 217, 177, 0.2) 40.03%, rgba(0, 0, 0, 0) 97.17%)",
        position: "relative",
      }}
    >
      <img
        src={launchpadTop}
        alt=""
        style={{
          position: "absolute",
          top: "0",
          left: "0rem",
          transform: " translateY(-50%) translateX(-10%)",
          width: "15%",
        }}
      />
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          py={5}
        >
          <Grid item md={6} xs={12}>
            <img src={Launchpadimg} alt="" width="100%" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <MainHeading
                sx={{
                  fontSize: { md: "55px", xs: "28px" },
                  textAlign: "start",
                }}
              >
                METACUBEZ NFT Launchpad
              </MainHeading>
              <ParagraphText
                sx={{
                  textAlign: "start",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex\
              </ParagraphText>
              <ParagraphText
                sx={{
                  textAlign: "start",
                  my: 3,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </ParagraphText>

              <Button
                sx={{
                  backgroundImage: `url(${platfombutoon})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  py: 1,
                  px: 4,
                  color: "white",
                  fontFamily: "'Roboto'",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Launchpad;
