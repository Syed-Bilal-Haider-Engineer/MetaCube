import React from "react";

import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { metavrsBg, plant, metaCard } from "./Images";

import Platform from "./Platform";
import Launchpad from "./Launchpad";

export const MainHeading = styled(Typography)({
  fontFamily: "Audiowide",
  fontStyle: "normal",
  fontWeight: 400,
  color: "white",
  textAlign: "center",
});

export const ParagraphText = styled(Typography)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  color: "white",
  textAlign: "center",
});

const cardData = [
  {
    img: metaCard,
    heading: "Buy Land In Metaverse",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
  },
  {
    img: metaCard,
    heading: "Buy Land In Metaverse",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
  },
];

const Metaverse = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#162A32",
        py: 10,
        position: "relative",
      }}
    >
      <img
        src={plant}
        alt=""
        style={{
          position: "absolute",
          top: "0",
          bottom: "60%",
          right: "0",
          margin: "auto 0",
        }}
      />
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              py: 5,
            }}
          >
            <img
              src={metavrsBg}
              alt=""
              style={{
                margin: "auto",
                position: "absolute",
                top: "-60%",
                left: "10%",
                bottom: "0",
                right: "0",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                color: "white",
                textAlign: "center",
              }}
            >
              system of interconnected elements
            </Typography>
            <MainHeading sx={{ fontSize: { md: "55px", xs: "28px" } }}>
              Fair value distribution in Metaverse
            </MainHeading>
            <ParagraphText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </ParagraphText>
          </Box>
        </Container>

        {/* Card of metaverse */}

        <Grid container spacing={4} py={3}>
          {cardData.map(({ img, text, heading }, i) => {
            return (
              <Grid item md={6} xs={12} key={i}>
                <Box
                  sx={{
                    filter:
                      "drop-shadow(-3px 10px 27px rgba(35, 234, 226, 0.2))",
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: `url(${img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      fontFamily: "'Roboto'",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: { md: "28px", xs: "18px" },
                      color: "white",
                      textAlign: "center",
                      py: 4,
                    }}
                  >
                    {heading}
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "black",
                    }}
                  >
                    <ParagraphText
                      sx={{
                        p: 2,
                      }}
                    >
                      {text}
                    </ParagraphText>

                    <Box
                      sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          background:
                            "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          textFillColor: "transparent",
                          fontFamily: "'Roboto'",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "16px",
                        }}
                      >
                        Learn more
                      </Typography>
                      <ArrowRightAltIcon
                        sx={{ color: "white", fontSize: "28px" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Platform />
      <Launchpad />
    </Box>
  );
};

export default Metaverse;
