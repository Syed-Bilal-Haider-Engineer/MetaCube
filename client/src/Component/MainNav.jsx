import { Box, Hidden, IconButton, Stack, Tooltip } from "@mui/material";
import React from "react";
import GavelIcon from "@mui/icons-material/Gavel";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../images/logo1.png";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import ConnectWallet from "../ConnectButton/ConnectWallet";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../theme";
import HomeIcon from "@mui/icons-material/Home";
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
export const MainNav = () => {
  const { colorMode, mode } = React.useContext(ColorModeContext);
  const { ceilSlice } = useSelector((state) => state);
  const { userdetails } = ceilSlice;
  const theme = useTheme();
  const filterRole =
    userdetails.role && userdetails?.role.filter((role) => role !== null);
  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",
      textTransform: "capitalize",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "20px",
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
  return (
    <Hidden mdDown>
      <Box
        sx={{
          maxWidth: "xl",
          width: "100%",
          mx: "auto",

          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: "xl",
            width: "96%",
            top: "20px",
            left: "2%",
            px: 2,
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            zIndex: "1",

            backgroundColor: "background.secondary",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px  rgba(0, 0, 0, 0.25) !important",
          }}
        >
          <Hidden smDown>
            <Box sx={{}}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    srcSet="land logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                </Link>

                {array.map((item, index) => {
                  return (
                    <NavLink
                      to={item.link1}
                      key={index}
                      style={styledactivelink}
                    >
                      <Tooltip title={item.name} placement="bottom">
                        {item.icon}
                      </Tooltip>
                    </NavLink>
                  );
                })}
              </Stack>
            </Box>
          </Hidden>
          <Stack direction="row" spacing={2} alignItems="center">
            {userdetails?.id ? (
              <>
                {filterRole?.includes("user") ||
                  filterRole?.includes("admin") ? (
                  <NavLink to="/profile" style={styledactivelink}>
                    <Tooltip title="Profile" placement="bottom">
                      <PersonIcon />
                    </Tooltip>
                  </NavLink>
                ) : (
                  ""
                )}
                {filterRole?.includes("admin") ? (
                  <NavLink to="/admin" style={styledactivelink}>
                    <Tooltip title="Admin" placement="bottom">
                      <AdminPanelSettingsIcon />
                    </Tooltip>
                  </NavLink>
                ) : (
                  ""
                )}
              </>
            ) : (
              <NavLink to="/login" style={styledactivelink}>
                <Tooltip title="Login" placement="bottom">
                  <PersonIcon />
                </Tooltip>
              </NavLink>
            )}
            <Hidden mdDown>
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              {/* <ToogleButton /> */}
            </Hidden>
            <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
              <ConnectWallet />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Hidden>
  );
};
