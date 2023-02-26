import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import WalletIcon from "@mui/icons-material/Wallet";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import logo from "../../images/userlogo.png";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
export const UserSiderbar = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          position: "fixed",
          backgroundColor: "#24293D",
          width: { md: "15%", xl: "13%" },
          borderRight: "1px solid gray",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            color: "white",
            ml: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            <Box
              sx={{
                mx: "auto",
                width: "100px",
                height: "100px",
                mx: "auto",
                paddingTop: "30px",
              }}
            >
              <img
                src={logo}
                alt="logo"
                srcSet="land logo"
                style={{ width: "100px", height: "100px" }}
              />
            </Box>
          </Link>
          <Link
            to="/profile"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <AssignmentIndIcon
                style={{
                  fontSize: "25px",
                  backgroundColor: "#6e07c7",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
              <Typography sx={{ ml: 2 }}>Profile</Typography>
            </Box>
          </Link>
          <Link to="/user" style={{ color: "white", textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <GridViewRoundedIcon
                style={{
                  fontSize: "25px",
                  backgroundColor: "#6e07c7",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
              <Typography sx={{ ml: 2 }}>Dashboard</Typography>
            </Box>
          </Link>
          <Link to="/user" style={{ color: "white", textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FavoriteBorderIcon
                style={{
                  fontSize: "25px",
                  backgroundColor: "#6e07c7",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
              <Typography sx={{ ml: 2 }}>Save</Typography>
            </Box>
          </Link>{" "}
          <Link
            to="/userwallet"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <WalletIcon
                style={{
                  fontSize: "25px",
                  backgroundColor: "#6e07c7",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
              <Typography sx={{ ml: 2 }}>Wallet</Typography>
            </Box>
          </Link>
        </Stack>
      </Box>
    </>
  );
};
