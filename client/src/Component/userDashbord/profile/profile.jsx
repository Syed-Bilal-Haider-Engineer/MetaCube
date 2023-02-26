import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import meta from "../../../images/meta.png";
import React from "react";
import { ProfileHeader } from "./profileHeader";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ProfileTabs from "./profileTabs";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Profile = () => {
  const { ceilSlice } = useSelector((state) => state);
  const { userdetails } = ceilSlice;
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
  const [textcopy, setTextCopy] = React.useState({
    value: userdetails?.walletAddress,
    copied: false,
  });
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          alignItems: "start",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "100%" },
            display: "flex",
            flexDirection: "column",
            fontSize: "70px",
          }}
        >
          <ProfileHeader />
          <Box
            sx={{
              width: "96%",
              mx: "auto",

              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "30%", lg: "20%" },
                pb: 5,
              }}
            >
              <Stack spacing={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      sm: "space-between",
                      md: "center",
                    },
                    alignItems: "center",
                    order: { xs: 2, md: 1 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "flex-start",

                        md: "center",
                      },
                      alignItems: {
                        xs: "flex-start",

                        md: "center",
                      },
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "15px",
                          md: "25px",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      Metacubez
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Joined Feb 2023{" "}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={meta}
                        alt="meta"
                        srcset={meta}
                        style={{ width: "30px", height: "30px" }}
                      />

                      <CopyToClipboard
                        style={{ width: "100%" }}
                        text={textcopy.value}
                        onCopy={() => setTextCopy({ copied: true })}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: { xs: "column-reverse", sm: "row" },
                            justifyContent: "space-between",
                            alignItems: { xs: "start", sm: "center" },
                            p: { xs: 1, md: 2 },
                          }}
                        >
                          <Typography>
                            {textcopy?.value
                              ? textcopy?.value?.slice(0, 4) +
                                "..." +
                                textcopy?.value?.slice(-4)
                              : userdetails?.walletAddress?.slice(0, 4) +
                                "..." +
                                userdetails?.walletAddress?.slice(-4)}
                          </Typography>
                          <IconButton>
                            <ContentCopyIcon />
                          </IconButton>
                        </Box>
                      </CopyToClipboard>

                      {textcopy.copied ? (
                        <span style={{ color: "red", fontSize: "0.5rem" }}>
                          Copied.
                        </span>
                      ) : null}
                    </Box>
                    <Typography>{userdetails?.email}</Typography>
                  </Box>
                </Box>
                {/* <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textAlign: { xs: "left", md: "center" },
                    order: 2,
                    p:"1px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                
                </Typography> */}

                <Box
                  sx={{
                    order: { xs: 1, md: 3 },
                    display: "flex",
                    color: "white",
                    justifyContent: {
                      xs: "flex-end",
                      sm: "flex-end",
                      md: "center",
                    },
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
                              borderRadius: "50%",
                              width: "35px",
                              height: "35px",
                              color: "white",
                            }}
                          >
                            {item.icon}
                          </IconButton>
                        </a>
                      </Tooltip>
                    );
                  })}
                </Box>
              </Stack>
            </Box>

            <ProfileTabs />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
