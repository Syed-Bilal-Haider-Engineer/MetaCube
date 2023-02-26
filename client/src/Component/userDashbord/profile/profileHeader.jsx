import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import profile from "../../../images/auther.PNG";
import userProfile from "../../../images/userProfile.png";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditeProfile";
import { useSelector } from "react-redux";
import { URL } from "../../../URL";
import PopUp from "../userWallet/popup";
import { profilestyle } from "./Profilecss/Customstyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import banner from "../../../images/baner2.png";

export const ProfileHeader = () => {
  const { ceilSlice } = useSelector((state) => state);
  const { userdetails } = ceilSlice;
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const array = [
    {
      name: "Facebook",
      link: userdetails?.facebook,
      icon: <FacebookIcon />,
      id: 1,
    },
    {
      name: "Instagram",
      link: userdetails?.instagram,
      icon: <InstagramIcon />,
      id: 2,
    },
    {
      name: "Twitter",
      link: userdetails?.twitter,
      icon: <TwitterIcon />,
      id: 3,
    },
    {
      name: "LinkedIn",
      link: userdetails?.linkdin,
      icon: <LinkedInIcon />,
      id: 4,
    },
  ];
  function modalClose(value) {
    setOpen(value);
  }

  return (
    <>
      {open && <EditProfile open={open} modalFunc={modalClose} />}
      <Box sx={{ width: "100%", mx: "auto", mt: { xs: 1, md: 10 } }}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant="outlined"
          sx={{
            border: "none",
            ml: 5,
            mb: 1,
            color: "white",
            background:
              " linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
          }}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Go back
        </Button>
        <Box
          sx={{
            maxWidth: "96%",
            mx: "auto",
            // border:"2px solid white",
            borderRadius: "20px",
            mt: 3,
            "& .css-46bh2p-MuiCardContent-root": { padding: 0 },

            // boxShadow: 3,
            height: { xs: "450px", md: "450px" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              backgroundImage: userdetails?.banner
                ? `url(${URL}/upload/${userdetails?.banner})`
                : `url("${banner}")`,
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "-80px",
                textAlign: "center",
                left: "32px",
              }}
            >
              <Box
                sx={{
                  width: "176px",
                  height: "176px",
                  padding: "2px",
                  borderRadius: "18px",

                  background:
                    "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                }}
              >
                {userdetails?.profileImage ? (
                  <img
                    src={
                      userdetails?.profileImage
                        ? `${URL}/upload/${userdetails?.profileImage}`
                        : profile
                    }
                    alt=""
                    style={profilestyle}
                  />
                ) : (
                  <img src={profile} style={profilestyle} alt="" />
                )}
              </Box>

              {/* <Typography
                sx={{
                  fontSize: "15px",
                }}
              >
                {userdetails?.name ? userdetails?.name : "user name"}
              </Typography> */}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: "25px",
                bottom: "-80px",
              }}
            >
              <Tooltip title="Edit" placement="top">
                <IconButton
                  sx={{
                    borderRadius: "5px",
                    background:
                      "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                    mr: 1,
                    mt: 1.5,
                  }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <EditIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <PopUp />
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "200px", md: "500px" },
              mt: { xs: 12, md: 3 },
              ml: { xs: "32px", md: "270px" },
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {userdetails?.name ? userdetails?.name : "user name"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
