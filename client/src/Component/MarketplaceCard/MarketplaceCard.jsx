import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Link } from "react-router-dom";
import { useState } from "react";
import { URL } from "../../URL";
import CustomBTN from "../CustomButton/CustomBTN";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LikeView from "./LikeView";
import axios from "axios";
import Loading from "../../Loading/Loading";
import { AddCeil, AddfailNfts } from "../../Redux/Reducer";
import { useDispatch, useSelector } from "react-redux";
import bloctech from "../../images/bloctech.jpg";
import useMakeToast from "../../hooks/makeToast";
function MarketplaceCard(props) {
  const makeToast = useMakeToast();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = (_id) => {
    setOpen(true);
  };
  const { ceilSlice } = useSelector((state) => state);
  const { userdetails } = ceilSlice;
  const filterRole =
    userdetails.role && userdetails?.role.filter((role) => role !== null);
  const videoType = ["mov", "mp4", "avi", "wmf", "flv", "webm"];
  const {
    address,
    locations,
    id,
    name,
    filelink,
    Image,
    file,
    user,
    productTotalPrice,
    userlikeviews,
    howManyViews,
    paidStatusContract,
    failedNftmint,
    failedNfts,
  } = props;
  const result = file?.split(".");
  let fileType = result?.pop();
  const mintFaildNFT = async (_id, address) => {
    try {
      setLoading(true);
      let mintNft = { _id, address };
      const { data } = await axios.post(`${URL}/mintfailedNft`, mintNft);
      if (data?.data === true) {
        dispatch(AddCeil(data?.nftes?.nfts));
        dispatch(AddfailNfts(data?.nftes?.failedNfts));
        makeToast(`${data?.message}`, "success", 3, "Success");
        props.remover(_id);
      }
      data?.data === false &&
        makeToast(`${data?.message}`, "error", 3, "Failed");
      setLoading(false);
    } catch (error) {
      console.log("Nft mint failed error ");
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loading loading={Loading} />}
      <Card
        sx={{
          backgroundColor: "background.secondary",
          borderRadius: "16px",
          p: 1.5,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          width: "100% !important",
          maxWidth: "340px !important",
        }}
      >
        <Box sx={{ position: "relative", minHeight: "200px" }}>
          {!videoType?.includes(fileType) ? (
            <Box
              sx={(theme) => ({
                boxShadow: "inset 0px 4px 34px #60BFEE",
                backgroundImage:
                  file || filelink
                    ? `url(${URL}/upload/${file})` || `url(${filelink})`
                    : Image
                    ? `url(${URL}/upload/${Image})`
                    : `url(${bloctech})`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "200px",
                width: "100%",
                borderRadius: "10px",
              })}
            ></Box>
          ) : (
            <>
              {videoType?.includes(fileType) ? (
                <Box
                  sx={{
                    borderRadius: "10px 10px 0px 0px",
                    overflow: "hidden",
                    width: "100%",
                    height: "200px",
                  }}
                >
                  <video
                    src={`${URL}/upload/${file}`}
                    width="100%"
                    margin="0px"
                    controls="controls"
                    autoPlay={false}
                    style={{ minHeight: "200px", borderRadius: "10px" }}
                  />
                </Box>
              ) : null}
            </>
          )}
        </Box>
        <Box sx={{ py: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                maxWidth: "250px",
                textOverflow: "ellipsis",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              component="h2"
            >
              {/* {name} */}
              {name ? name.slice(0, 13) + "..." : " Land Nft"}
            </Typography>
            <LikeView
              userlikeviews={userlikeviews}
              howManyViews={howManyViews}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}> Price</Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  backgroundColor: "background.buttonBg",
                  px: 1,
                  py: "5px",
                  borderRadius: "7px",
                }}
              >
                {productTotalPrice ? +" " + productTotalPrice + "$" : " 0"}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "centers",
            }}
          >
            <Typography
              component="p"
              sx={{ fontSize: "1rem", fontWeight: 700 }}
            >
              status
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              {filterRole.includes("admin") && failedNfts ? (
                <Button
                  sx={{
                    backgroundColor: "#EB455F",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#EB455F",
                    },
                  }}
                  onClick={() => mintFaildNFT(id, address)}
                >
                  Mint Again
                </Button>
              ) : (
                ""
              )}

              <Typography
                color={paidStatusContract ? "green" : "red"}
                component="p"
                sx={{
                  fontSize: "12px",
                  ml: 1,
                  mt: 1,
                  fontWeight: 700,
                  textAlign: "right",
                }}
              >
                {paidStatusContract ? "Mint succes" : "pending"}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 1,
            }}
          >
            <Typography sx={{ fontSize: "15px" }}> Location</Typography>
            <Box
              sx={{
                zIndex: 1,

                cursor: "pointer",
              }}
            >
              <Link
                to={`/Bmap/${locations?.lang}/${locations?.long}`}
                style={{ color: "white" }}
              >
                <MyLocationIcon
                  sx={{
                    fontSize: "35px",
                    backgroundColor: "#3ACAB8",
                    opacity: "",
                    padding: "8px",
                    borderRadius: "10px",
                  }}
                />
              </Link>
            </Box>
          </Box>

          <Link to={`/nftDetail/${id}`} style={{ textDecoration: "none" }}>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <Button
                sx={{
                  clipPath:
                    "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                  background:
                    "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                  fontFamily: "'Poppins'",
                  fontWeight: 700,
                  fontSize: "12px",
                  py: 2,
                  px: 3,

                  color: "black",
                  width: "70%",

                  mx: "auto",
                }}
              >
                View Details
              </Button>
            </Box>
          </Link>
        </Box>
      </Card>
    </>
  );
}
export default MarketplaceCard;
