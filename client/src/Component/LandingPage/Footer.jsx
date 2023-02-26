import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { footerBg, footerLogo, footerimg } from "./Images";
import { styled } from "@mui/system";
import { ParagraphText } from "./Metaverse";

const Footer = () => {
  const Text = styled(Typography)(({ theme }) => ({
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "18px",
    color: "#FFFFFF",
    marginTop: "1px ",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginTop: "30px",
    },
  }));

  const IconStyle = styled(Box)({
    backgroundColor: "#00D2BA",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    boxShadow:
      "inset -4px 4px 4px rgba(255, 255, 255, 0.25), inset 5px -4px 4px rgba(0, 0, 0, 0.25)",
    filter: "drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.3))",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height:"40px"
  
  });
  return (
    <Box
      sx={{
        backgroundImage: `url(  ${footerimg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        py: 12,
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(179.04deg, rgba(79, 152, 208, 0.2) 0.89%, rgba(52, 217, 177, 0.2) 40.03%, rgba(0, 0, 0, 0) 97.17%)",
        }}
      ></Box>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} sm={6} md={2.7}>
            <img src={footerLogo} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", md: "flex-start" },
                flexDirection: "column",
              }}
            >
              <Text>About</Text>
              <Box
                sx={{
                  width: "55px",
                  height: "2px",
                  bgcolor: "#fff",
                  my: "17px",
                }}
              ></Box>
            </Box>

            <ParagraphText textAlign={{ xs: "center", md: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </ParagraphText>
          </Grid>
          <Grid item xs={12} sm={6} md={3.3}>
            <Text>Follow us</Text>
            <Box sx={{ display: "flex", gap: { xs: 3, md: 4 }, my: 5 }}>
              <IconStyle>
                <i
                  className="fa-brands fa-twitter"
                  style={{ fontSize: "20px", color: "#fff",paddingX:"10px" }}
                ></i>
              </IconStyle>
              <IconStyle>
                <i
                  className="fa-brands fa-discord"
                  style={{ fontSize: "20px", color: "#fff" }}
                ></i>
              </IconStyle>
              <IconStyle>
                <i
                  className="fa-brands fa-medium"
                  style={{ fontSize: "20px", color: "#fff" }}
                ></i>
              </IconStyle>
              <IconStyle>
                <i
                  className="fa-brands fa-telegram"
                  style={{ fontSize: "20px", color: "#fff" }}
                ></i>
              </IconStyle>
            </Box>
            <Text sx={{ fontSize: "14px" }}>
              All rights reserved @metacubez nft 2023
            </Text>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
