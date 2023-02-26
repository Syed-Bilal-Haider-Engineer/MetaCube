import React from "react";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { IconButton, Paper, Typography } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToogleButton } from "./CustomButton/ToogleButton";
import { useTheme } from "@emotion/react";
import HomeIcon from "@mui/icons-material/Home";
import { ColorModeContext } from "../theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
const array = [
  {
    name: "Home",
    link1: "/",
    icon: <HomeIcon />,
  },
  {
    name: "MAP",
    link1: "/Bmap",
    icon: <LocationOnIcon />,
  },
  // {
  //   name: "MARKETPLACE",
  //   link1: "/marketplace",
  //   icon: <GavelIcon />,
  // },
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000000 !important",
    justifyContent: "flex-start",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header({ children }) {
  const { colorMode, mode } = React.useContext(ColorModeContext);
  const theme = useTheme();
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });
  const { ceilSlice } = useSelector((state) => state);
  const { userdetails } = ceilSlice;
  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",
      textTransform: "capitalize",
      padding: "10px",
      borderRadius: "5px",
      width: "45px",
      fontSize: "20px",
      marginLeft: "10px",
      color: isActive
        ? "#ffffff"
        : theme.palette.mode === "light"
          ? "#000000"
          : "#ffffff",

      display: "flex",
      gap: "20px",
      alignItems: "center",
      background: isActive
        ? "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"
        : "",
    };
  };

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
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
      <br />

      <List sx={{ mt: 5 }}>
        {array.map(({ icon, link1, name }, index) => {
          return (
            <>
              <NavLink to={link1} key={index} style={styledactivelink}>
                {icon}

                <Typography
                  sx={(theme) => ({
                    color: theme.palette.mode === "light" ? "#000" : "#ffffff",
                  })}
                >
                  {name}
                </Typography>
              </NavLink>
            </>
          );
        })}
      </List>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        // height="55px"
        width="100%"
        mt="0px"
        sx={{
          backgroundColor: "background.secondary",

        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="0px"
            backgroundColor="red"
            sx={{
              backgroundColor: "background.secondary",
              boxShadow: "0px 0px 7px  rgba(0, 0, 0, 0.25)",
            }}
          >
            <Hidden mdUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        sx={(theme) => ({
                          fontSize: "25px",
                          cursor: "pointer",
                          // border:"1px solid red",
                          mr: 3,

                          color:
                            theme.palette.mode === "light" ? "#000" : "#ffffff",
                        })}
                      />
                    </Button>
                    <Box sx={{}}>
                      <IconButton
                        onClick={colorMode.toggleColorMode}
                        color="inherit"
                      >
                        {theme.palette.mode === "dark" ? (
                          <Brightness7Icon />
                        ) : (
                          <Brightness4Icon />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                  <Paper>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}

                      <Box sx={{ mb: 2 }}>
                        {userdetails?.id && userdetails?.role === "user" ? (
                          <NavLink to="/profile" style={styledactivelink}>
                            <PersonIcon />
                            <Typography
                              sx={(theme) => ({
                                color:
                                  theme.palette.mode === "light"
                                    ? "#000"
                                    : "#ffffff",
                              })}
                            >
                              Profile
                            </Typography>
                          </NavLink>
                        ) : (
                          <NavLink to="/login" style={styledactivelink}>
                            <PersonIcon />
                            <Typography
                              sx={(theme) => ({
                                color:
                                  theme.palette.mode === "light"
                                    ? "#000"
                                    : "#ffffff",
                              })}
                            >
                              login
                            </Typography>
                          </NavLink>
                        )}
                      </Box>
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
}
