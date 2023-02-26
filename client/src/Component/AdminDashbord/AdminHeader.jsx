import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React from "react";
import { useNavigate } from "react-router-dom";
import auther from "../../images/auther.PNG";
import EditIcon from "@mui/icons-material/Edit";
import PopUp from "../userDashbord/userWallet/popup";
import EditProfile from "../userDashbord/profile/EditeProfile";
import { useSelector } from "react-redux";
import { URL } from "../../URL";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import baner from "../../images/baner.jpg";
import { width } from "@mui/system";
const bannerstyle = {
  height: "300px",
  width: "100%",
  borderRadius: "10px",
  marginTop: "20px",
  background: "cover",
  position: "center",
};

export const AdminHeader = () => {
  const [open, setOpen] = React.useState(false);
  const { ceilSlice } = useSelector((state) => state);
  const { userdetails } = ceilSlice;
  function modalClose(value) {
    setOpen(value);
  }
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
  const navigate = useNavigate();
  return (
    <>
      {open && <EditProfile open={open} modalFunc={modalClose} />}
      <Box sx={{ width: "100%", mx: "auto", mt: { xs: 1, md: 15 } }}>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          variant="outlined"
          sx={{
            ml: { xs: 2, md: 5 },
            border: "none",
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
            width: "96%",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",

            backgroundColor: "background.secondary",
            boxShadow: 2,
            borderRadius: "10px",

            mb: "160px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              position: "relative",
              backgroundImage: userdetails?.banner
                ? `url(${URL}/upload/${userdetails?.banner})`
                : `url("${baner}")`,
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "top",
              borderRadius: "10px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                color: "white",
                position: "absolute",
                top: "10px",
                left: "32px",
                fontSize: "20px",
              }}
            >
              {array.map((item, index) => {
                return (
                  <Tooltip title={item.name} placement="top" key={item?.id}>
                    <a href={item.link} target="_blank">
                      <IconButton
                        fontSize="small"
                        
                        sx={{
                          background:
                            "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                          ml: 1,
                          mb: 1,
                          borderRadius: "5px",
                          color:'white',
                          width: "35px",
                          height: "35px",
                          zIndex: "500",
                        }}
                      >
                        {item.icon}
                      </IconButton>
                    </a>
                  </Tooltip>
                );
              })}
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: { xs: "230px", md: "200px" },
                left: "32px",
                display: "flex",
                flexDirection: "column",
                maxWidth: { xs: "150px", md: "200px" },
              }}
            >
              <Box
                sx={{
                  height: { xs: "120px", md: "200px" },
                  width: { xs: "120px", md: "200px" },
                }}
              >
                <img
                  src={
                    userdetails?.profileImage
                      ? `${URL}/upload/${userdetails?.profileImage}`
                      : auther
                  }
                  alt=""
                  srcSet=""
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  width: "100%",
                  maxHeight: "50px",
                  mt: { xs: 3, sm: 1 },

                  textAlign: "center",
                }}
              >
                Jhon smith{" "}
              </Typography>
            </Box>

            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "100%", lg: "75%" },
                height: { xs: "200px", md: "300px" },
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                bottom: "-20px",
                right: "0px",
              }}
            >
              <Box sx={{ pr: 4, display: "flex", alignItems: "center" }}>
                <Tooltip title="Edit" placement="top">
                  <IconButton
                    sx={{
                      background:
                        "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                      mr: 1,
                      mt: 1,
                      borderRadius: "5px",
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
          </Box>
        </Box>
      </Box>
    </>
  );
};
