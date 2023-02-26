import React from "react";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
function Comingsoon() {
  return (
    <div>
      <Box sx={{ border: "none", backgroundColor:"background.secondary" }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "280px", sm: "400px", md: "600px" },
            p: { xs: 1, sm: 2, md: 4 },
            borderRadius: "10px",
            backgroundColor:"background.secondary",
            boxShadow:2,
            // border:"2px solid white"
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            // fontWeight="bold"
            sx={{
              textAlign: "center",
              fontSize: { xs: "15px", sm: "20px", md: "40px" },
            }}
          >
          Empty Nft Market Place ...
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Comingsoon;
