import React from "react";
import { Button } from "@mui/material";
function CustomBTN(props) {
  return (
    <Button
      sx={{
        py: 1,
        fontSize: { xs: "12px", md: "15px" },
        width: "100%",
        marginTop: "10px",
        borderRadius: "10px",
        background:
            "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
        color: "white",
        fontWeight: 700,
      }}
    >
      {props.text}
    </Button>
  );
}

export default CustomBTN;
