import { styled } from "@mui/styles";
import TextField from '@mui/material/TextField';
export const TextInputfield = styled(TextField)({
  "& .MuiInputBase-input": {
    position: "relative",
    borderRadius: "5px",
    color: "white",

    fontSize: "15px",
    padding: "15px 25px",
    // marginTop: "10px",
    textAlign: "start",
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