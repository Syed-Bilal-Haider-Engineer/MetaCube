import React from "react";

import {
  Box,
  Button,
  List,
  ListItem,
  Paper,
  SwipeableDrawer,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import { logo } from "./Images";

const Drawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        backgroundColor: "#162A32",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Box display="flex" alignItems="right" justifyContent="flex-end">
          <CloseIcon
            style={{
              fontSize: "38px",
              cursor: "pointer",
              color: "white",
            }}
          />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box mt="4rem">
            <img src={logo} alt="" />
          </Box>
          {["Map", "Staking", "BUSINESS", "FAQ", "CONTACT US"].map(
            (text, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    fontFamily: "Karla",
                    fontWeight: 700,
                    fontSize: "20px",
                    borderRadius: "12px",
                    textAlign: "center",
                    color: "white",
                    textTransform: "capitalize",
                    "&:hover": {
                      background:
                        "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                  }}
                >
                  {text}
                </Button>
              </ListItem>
            )
          )}
        </Box>
      </List>
    </Box>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ zIndex: 1 }}>
            <MenuIcon
              style={{
                fontSize: "38px",
                cursor: "pointer",
                color: "#191919",
              }}
            ></MenuIcon>
          </Button>
          <Paper style={{ background: "#0E0E23" }}>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </Paper>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Drawer;
