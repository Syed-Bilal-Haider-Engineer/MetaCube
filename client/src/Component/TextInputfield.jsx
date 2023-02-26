import { styled } from "@mui/styles";
import { InputBase } from "@mui/material";
const TextInputfield = styled(InputBase)({
  "& .MuiInputBase-input": {
    position: "relative",
    color: "white",
    padding: "15px 25px",
    // marginTop: "10px",
    textAlign: "center",
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
});
export default TextInputfield;
