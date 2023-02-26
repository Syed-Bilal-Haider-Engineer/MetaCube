import { Box, Hidden } from "@mui/material";
import React from "react";
import { Sidebar } from "./sidebar";

export const Units = () => {
  return (
    <>
      <Box
        sx={{
         
          display: "flex",
          justifyContent: "space-between",
        }}
      >
       

        <Box  sx={{display:"flex"}}> 
          <Box
            sx={{ background: "linear-gradient(90deg, rgba(244,173,41,1) 17%, rgba(194,44,95,1) 58%, rgba(103,61,165,1) 79%)", width: "300px", height: "200px",  }}
          ></Box>
          <Box
            sx={{ backgroundColor: "#910de2", width: "300px", height: "200px",mx:2 }}
          ></Box>
          <Box
            sx={{ backgroundColor: "#6e07c7", width: "300px", height: "200px" }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
