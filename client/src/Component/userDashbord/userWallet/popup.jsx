import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { Adduser } from "../../../Redux/Reducer";
import { useNavigate } from "react-router-dom";
export default function PopUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Logout = () => {
    localStorage.removeItem("maptoken");
    dispatch(Adduser({}));
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div>
      <Tooltip title="Setting" placement="top">
        <IconButton
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            background:
              "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
            borderRadius: "5px",
          }}
        >
          <SettingsOutlinedIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: 7 ,}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        <MenuItem
          onClick={() => {
            navigate("/userwallet");
            
          }}
  
        >
          My Account
        </MenuItem>
        <MenuItem
          onClick={() => {
            Logout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
