import React from "react";
import { CardContent, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { URL } from "../../URL.js";
import CustomBTN from "../CustomButton/CustomBTN";
import LikeView from "../MarketplaceCard/LikeView.jsx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const MapModal = ({ filterState, modalC }) => {
  const handleClose = () => {
    modalC(false);
  };
  let likesList = filterState?.likesList;
  let favoritesList = filterState?.favoritesList;
  const fileType = filterState?.file.split(".").pop();
  let imageName = "";
  if (fileType == "png") {
    imageName = filterState?.file
      ? filterState?.file
      : filterState?.capturesImage;
  }
  return (
    <>
      <Box
        sx={{
          height: { xs: "425px", md: "490px" },
          width: { xs: "290px", md: "365px" },
          borderRadius: "15px",
          position: "absolute",
          backgroundColor: "background.secondary",
          top: "0px",
          right: { xs: "0%", md: "0%" },
          pr: 0.5,
        }}
      >
        <Box sx={{ position: "relative", borderRadius: "15px", p: 0.4 }}>
          <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
            <IconButton onClick={handleClose}>
              <CloseIcon
                sx={{
                  fontSize: "30px",
                  color: "white",
                  background:
                    "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                  "&:hover": {
                    background:
                      "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                  },
                  opacity: "",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              />
            </IconButton>
          </Box>
          <Box sx={{ p: 0.7 }}>
            {fileType == "mp4" ? (
              <Box
                sx={{
                  borderRadius: "10px 10px 0px 0px",
                  overflow: "hidden",
                  width: "100%",
                  height: "200px",
                  borderRadius: "10px",
                }}
              >
                <video
                  src={`${URL}/upload/${filterState.file}`}
                  width="100%"
                  margin="0px"
                  controls="controls"
                  autoPlay={false}
                  style={{ minHeight: "200px", borderRadius: "10px" }}
                />
              </Box>
            ) : (
              <Box
                sx={(theme) => ({
                  boxShadow: "inset 0px 4px 34px #60BFEE",
                  backgroundImage: `url(${URL}/upload/${
                    filterState?.file
                      ? filterState?.file
                      : filterState?.capturesImage
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  height: { xs: "160px", md: "215px" },
                  width: "100%",
                })}
              ></Box>
            )}
            {/*  */}
          </Box>
        </Box>

        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography gutterBottom sx={{ pb: 2, fontSize: { xs: "15px" } }}>
              {filterState?.name.slice(0, 13) + "..."}
            </Typography>
            <Box style={{ marginBottom: "0.8rem" }}>
              <LikeView
                userlikeviews={{ likesList, favoritesList }}
                howManyViews={filterState?.howManyViews}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: { xs: "15px" } }}> Price</Typography>
            <Typography component="p" sx={{ fontSize: { xs: "15px" } }}>
              {filterState?.productTotalPrice + "$"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: { xs: "15px" } }}> Address</Typography>
            <Typography component="p" sx={{ fontSize: { xs: "15px" } }}>
              {filterState?.mapaddress !== ""
                ? filterState?.mapaddress.slice(0, 16) + "...."
                : "Dubhai Matacubes"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "1rem" }}>User</Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "gray",
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: "10px",
                  mr: 1,
                  maxWidth: "120px",
                  overflow: "hidden",
                }}
              >
                {filterState?.user?.username
                  ? filterState?.user?.username
                  : "Joy Root"}
              </Typography>

              <Box>
                {filterState?.user?.profileImage !== "" ? (
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                    src={`${URL}/upload/${filterState?.user?.profileImage}`}
                    alt=""
                  />
                ) : (
                  <AccountCircleIcon
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography component="p" sx={{ fontSize: "1rem", color: "gray" }}>
              status
            </Typography>
            <Typography
              color={filterState?.paidStatusContract ? "green" : "red"}
              component="p"
              sx={{ fontSize: "12px", ml: 1, mt: 1 }}
            >
              {filterState?.paidStatusContract ? "Mint succes" : "pending"}
            </Typography>
          </Box>
          <br />
          <Link
            to={`/nftDetail/${filterState?._id}`}
            style={{ textDecoration: "none", marginBottom: "5px" }}
          >
            <CustomBTN text="View Details" />
          </Link>
        </CardContent>
      </Box>
    </>
  );
};

export default React.memo(MapModal);
