import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
// import nft from "../../images/nft.PNG";
import { IconButton, Stack, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import DetailButton from "../CustomButton/DetailButton";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../URL";
import { ViewLikes } from "../userDashbord/profile/ViewLikes";
import { getNftdetails } from "../../Api/api";
import { AddNftsDetails } from "../../Redux/Reducer";
import Loading from "../../Loading/Loading";

export default function NftMarketPlace() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const videoType = ["mov", "mp4", "avi", "wmf", "flv", "webm"];
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  React.useEffect(() => {
    (async function () {
      if (params) {
        const data = await getNftdetails(params?.id);
        dispatch(AddNftsDetails(data));
      }
    })();
  }, []);
  const { ceilSlice } = useSelector((state) => state);
  const { nftdetails: detailsNfts } = ceilSlice;
  // destucturing here......
  const result = detailsNfts?.file?.split(".");
  let fileType = result?.pop();
  let imageURL =
    detailsNfts?.file || detailsNfts?.filelink
      ? detailsNfts?.filelink
        ? detailsNfts?.filelink
        : detailsNfts?.file
      : detailsNfts?.capturesImage;

  return (
    <Container maxWidth="lg" sx={{ pt: 14 }}>
      <Paper
        sx={{
          display: "flex ",
          alignItems: "center",
          p: 2,

          boxShadow: 1,
        }}
      >
        <Grid container spacing={5} p={3}>
          <Grid item xs={12} md={5.5}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                padding: "2px",
                borderRadius: "30px",
                background:
                  " linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: "500px",
                  backgroundImage: `url(${URL}/upload/${imageURL})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: "30px",
                }}
              />
              {videoType?.includes(fileType) ? (
                <video
                  src={`${URL}/upload/${detailsNfts?.file}`}
                  width="500"
                  height="260"
                  marginRight="50px"
                  controls="controls"
                  autoPlay={false}
                />
              ) : null}
            </Box>
          </Grid>
          <Grid item xs={12} md={6.5}>
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box
                  sx={{
                    background:
                      " linear-gradient(10.09deg, #C90EE0 12.4%, #6809BB 94.89%)",
                    padding: "2px",
                    borderRadius: "50%",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      navigate(-1);
                    }}
                    sx={(theme) => ({
                      backgroundColor:
                        theme.palette.mode === "light" ? "#ffffff" : "#000000",
                      "&:hover": {
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? "#ffffff"
                            : "#000000",
                      },
                    })}
                  >
                    <ArrowBackIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    background:
                      " linear-gradient(10.09deg, #C90EE0 12.4%, #6809BB 94.89%)",
                    padding: "2px",
                    borderRadius: "50%",
                  }}
                >
                  <IconButton
                    sx={(theme) => ({
                      backgroundColor:
                        theme.palette.mode === "light" ? "#ffffff" : "#000000",
                      "&:hover": {
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? "#ffffff"
                            : "#000000",
                      },
                    })}
                  >
                    <ShareIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Stack>
              <Typography variant="h3" py={3}>
                <span style={{ textDecoration: "underline" }}>
                  {detailsNfts?.name}
                </span>{" "}
              </Typography>
              <Typography color="text.secondary" variant="body2" py={3}>
                {detailsNfts?.description}
              </Typography>
              <Box
                sx={{
                  py: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "25px" }}>
                    Current Price
                  </Typography>
                  <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                    {detailsNfts?.productTotalPrice
                      ? detailsNfts?.productTotalPrice + "$"
                      : "0 $"}
                  </Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <DetailButton text="Buy now" />
                </Box>
              </Box>
            </Box>

            <ViewLikes ceilSlice={ceilSlice} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
