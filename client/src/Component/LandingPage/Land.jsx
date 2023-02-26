import React from "react";

import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

import { ellipse, userBg, userBg1, nft, user, owner } from "./Images";

const Land = () => {
  const matchesMeida = useMediaQuery("(max-width: 700px)");
  const userArray = [
    {
      img: user,
      text: "Current Users",
      number: "+ 578,789,890",
    },
    {
      img: nft,
      text: "Minted NFTs ",
      number: "+ 500,732,760",
    },
    {
      img: owner,
      text: "Land Owners",
      number: "+ 76,962",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(  ${matchesMeida ? userBg : userBg1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        py: { xs: "30px", md: "57px" },
        position: "relative",
      }}
    >
      <img
        src={ellipse}
        alt=""
        style={{
          position: "absolute",
          top: "0",
          left: "0rem",
          transform: " translateY(-50%) translateX(-10%)",
          width: "10%",
        }}
      />
      <Container maxWidth="lg">
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 3, md: 5 }}
        >
          {userArray.map(({ img, text, number }, i) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  textAlign="center"
                >
                  <img src={img} alt="" />
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: { xs: "12px", md: "22px" },
                      color: "#fff",
                      my: "10px",
                    }}
                  >
                    {text}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: { xs: "17px", md: "32px" },
                      color: "#fff",
                    }}
                  >
                    {number}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Land;
