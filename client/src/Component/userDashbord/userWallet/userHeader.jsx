import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import auther from "../../../images/auther.PNG";
import PopUp from "./popup";

export const UserHeader = () => {
  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        mt: 10,
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "space-between",
        mx: "auto",
        px: 1,

        border: { xs: "none", md: "2px solid gray" },
        borderRadius: "20px",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          mt: { xs: 1, md: 0 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Wallet
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", md: "15%" },
          display: "flex",
          justifyContent: {
            xs: "space-between",
          },
          mx: { xs: "auto", md: "0px" },
          alignItems: "center",
        }}
      >
        <PopUp />
        <Box
          sx={{
            ml: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

          }}
        >
          <Box sx={{ mr: 1 }}>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              Join Smith
            </Typography>
            <Typography
              sx={{ fontSize: "12px", color: "gray", textAlign: "right" }}
            >
              Auther
            </Typography>
          </Box>
          <img
            src={auther}
            alt=""
            style={{ width: "30px", borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
