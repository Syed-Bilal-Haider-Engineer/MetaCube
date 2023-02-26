import React from "react";
import { Button, Box } from "@mui/material";

function CustomButton() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Button
        sx={{
          background:
            " linear-gradient(90deg, rgba(110,7,199,0.9223039557619923) 37%, rgba(204,13,227,0.981127485173757) 79%)",
          border: 0,
          borderRadius: 2,
          color: "white",
          width: "100%",
          height: 30,
          padding: "18px 30px",
          fontSize: "13px",
          fontWeight: 700,
        }}
      >
        BUY NOW
      </Button>
    </Box>
  );
}

export default CustomButton;
