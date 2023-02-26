import React from "react";
import { Button } from "@mui/material";
function DetailButton(props) {
  return (
    <Button
    sx={{
        py: 1,
        fontSize: { xs: "12px", md: "15px" },
        width: "100%",
        marginTop: "30px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "00px",

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

export default DetailButton;
