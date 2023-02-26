import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  { id: 1, itemtype: "link" },
  { id: 2, itemtype: "file" },
];
export default function SelectInputType({ fileTypeValue, fileTypeHandle }) {
  const handleChange = (event) => {
    let value = event.target.value;
    fileTypeHandle(value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          sx={{
            color: "white",
            border: " 1px solid white",
            "& .MuiOutlinedInput-input:focus": {
              outline: "none",
              outlineOffset: "none",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          displayEmpty
          value={fileTypeValue || ""}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Select file type !</em>
          </MenuItem>
          {names.map(({ itemtype }) => (
            <MenuItem key={itemtype} value={itemtype || ""}>
              {itemtype}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
