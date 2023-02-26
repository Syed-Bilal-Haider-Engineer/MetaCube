import { Box, Paper, Typography } from "@mui/material";
import React from "react";
export const EmptyData = ({ text }) => {
  return (
    <>
      <Box
        sx={(theme) => ({
          mx: "auto",
          mt: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light" ? "#F4F4F4" : "#3A3A3A",
          height: "300px",
          borderRadius: "10px",
      
        })}
      >
        <Typography
          textAlign="center"
          sx={{ fontSize: { xs: "20px", md: "40px ", fontWeight: "bold" } }}
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};
