import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Hidden } from "@mui/material";
import { MainNav } from "./MainNav";
import Header from "./navbar";
import ConnectWallet from "../ConnectButton/ConnectWallet";
export const Sidebar = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        // backgroundColor:"red"
      }}
    >
      <MainNav />
      <Hidden mdUp>
            <Header>
              <ConnectWallet />
            </Header>
          </Hidden>
      <Box sx={(theme)=>({ width: "100%",backgroundColor:theme.palette.mode === "light" ? "#ffffff":'#3A3A3Aa1',minHeight:"100vh" })}>
        <Outlet />
      </Box>
    </Box>
  );
};
