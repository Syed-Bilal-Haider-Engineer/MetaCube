import React from "react";

import { Box, Button, Container, useMediaQuery } from "@mui/material";

import { heroBg, btn, heroSecCard } from "./Images";

import { MainHeading, ParagraphText } from "./Metaverse";

const HeroSection = () => {
  const matchesMeida = useMediaQuery("(max-width: 700px)");

  return (
    <Box
      sx={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        py: { xs: "18px", md: "120px" },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundImage: `url(${heroSecCard})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            p: { xs: "23px 19px", md: "70px 50px" },
            mt: "20px",
            opacity: "1.5",
          }}
        >
          <ParagraphText
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              textAlign: "left",
            }}
          >
            Enter a New Reality:
          </ParagraphText>
          <MainHeading
            sx={{
              fontSize: { xs: "28px", md: "55px" },
              color: "#FFFFFF",
              my: "10px",
              textAlign: "start",
            }}
          >
            Explore the {!matchesMeida ? <br /> : ""} Boundless Possibilities of
            Our Metaverse
          </MainHeading>

          <ParagraphText
            sx={{
              textAlign: "left",
              width: !matchesMeida ? "90%" : "100%",
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </ParagraphText>
          <Button
            sx={{
              backgroundImage: `url(${btn})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%  100%",
              fontWeight: 600,
              fontSize: { xs: "12px", md: "16px" },
              color: "#FFFFFF",
              px: 5,
              py: 1,
              mt: "2rem",
            }}
          >
            Get a quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
