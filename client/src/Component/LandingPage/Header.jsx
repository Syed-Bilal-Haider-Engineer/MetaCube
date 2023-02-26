import React from "react";
import { Box, Button, Container, Hidden, Switch } from "@mui/material";
import { styled } from "@mui/system";
import Drawer from "./Drawer";
import { logo } from "./Images";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Header = () => {
  const Btn = styled(Button)({
    fontFamily: "Inter",
    fontSize: "12px",
    color: "#191919",
    textTransform: "capitalize",
    "&:hover": {
      background: "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  });

  return (
    <Box background="rgba(255, 255, 255, 0.8)">
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: { xs: "9px 0px", md: "19px 0px" },
          }}
        >
          <Box>
            <img src={logo} alt="" width="100%" />
          </Box>
          <Hidden mdUp>
            <Drawer />
          </Hidden>
          <Hidden mdDown>
            <Box display="flex" alignItems="center" gap="20px">
              <Btn>Map</Btn>
              <Btn>Staking</Btn>
              <Btn>Business</Btn>
              <Btn>Faq</Btn>
              <Btn>Contacts Us</Btn>
              <Button
                sx={{
                  background:
                    "linear-gradient(145.96deg, rgba(79, 152, 208, 0) 6.11%, rgba(52, 187, 217, 0.14) 49.88%, rgba(52, 217, 177, 0) 75.89%)",
                  filter: "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.35))",
                  borderRadius: "4px",
                  border: "2px solid #3CA4D4",
                  px: "28px",
                  py: "9px",
                }}
              >
                LOGIN
              </Button>
              <Button
                sx={{
                  background:
                    "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                  boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.35)",
                  borderRadius: "4px",
                  color: "#ffff",
                  px: "40px",
                  py: "11px",
                }}
              >
                CONNECT
              </Button>
              {/* <Switch {...label} defaultChecked /> */}
            </Box>
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
