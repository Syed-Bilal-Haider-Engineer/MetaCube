import React from "react";

import { Box, Button, Container, Grid, useMediaQuery } from "@mui/material";

import { MainHeading, ParagraphText } from "./Metaverse";

import { Isolation, Platformimg, platfombutoon } from "./Images";

// import MainHeading from "."

const Platform = () => {
  const check = useMediaQuery("(max-width:900px)");

  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item md={6} xs={12}>
            <Box>
              {check ? (
                ""
              ) : (
                <img
                  src={Isolation}
                  alt=""
                  style={{
                    marginBottom: "-85px",
                    marginLeft: "-70px",
                  }}
                />
              )}

              <Box
                sx={{
                  color: "white",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                }}
              >
                PAAS
              </Box>
              <MainHeading
                sx={{
                  fontSize: { md: "55px", xs: "28px" },
                  my: { md: 1, xs: 2 },
                }}
              >
                Service Platform
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
                  my: 2,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex\
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
          <Grid item md={6} xs={12}>
            <img src={Platformimg} alt="" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Platform;
