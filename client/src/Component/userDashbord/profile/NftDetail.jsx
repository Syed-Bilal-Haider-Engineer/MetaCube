import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate, useParams } from "react-router-dom";
import DetailButton from "../../CustomButton/DetailButton";
import EditProduct from "./EditProduct";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../../URL";
import { ViewLikes } from "./ViewLikes";
import { getNftdetails } from "../../../Api/api";
import { AddNftsDetails } from "../../../Redux/Reducer";
import bloctech from "../../../images/bloctech.jpg";
import Loading from "../../../Loading/Loading";
import defaultimg from '../../../images/Default.png'

export default function NftDetail() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const { ceilSlice } = useSelector((state) => state);
  const { nftdetails: detailsNfts, userdetails } = ceilSlice;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const videoType = ["mov", "mp4", "avi", "wmf", "flv", "webm"];
  const fetchNftdetails = async () => {
    if (params) {
      setLoading(true);
      const data = await getNftdetails(params?.id);
      dispatch(AddNftsDetails(data));
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchNftdetails();
  }, []);
  function modalClose(value) {
    setOpen(value);
    fetchNftdetails();
  }
  const result = detailsNfts?.file?.split(".");
  let fileType = result?.pop();
  let imageURL =
    detailsNfts?.file || detailsNfts?.filelink
      ? detailsNfts?.filelink
        ? detailsNfts?.filelink
        : detailsNfts?.file
      : detailsNfts?.capturesImage;
  return (
    <>
      <Loading loading={loading} />
      <Container maxWidth="lg" sx={{ pt: 14 }}>
        {open && (
          <EditProduct
            open={open}
            modalFunc={modalClose}
            nftsDetails={detailsNfts}
          />
        )}
        <Box
          sx={{
            display: "flex ",
            alignItems: "center",
            p: 2,
            boxShadow: 1,
            backgroundColor: "background.secondary",
          }}
        >
          <Grid container spacing={5} p={3}>
            <Grid item xs={12} md={5.5}>
              <Box
                sx={{
                  width: "100%",
                  padding: "2px",
                  borderRadius: "10px",
                  background: !fileType
                    ? " linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"
                    : "",

                }}
              >
                {!videoType?.includes(fileType) ? (
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: "300px", md: "500px" },
                      borderRadius: "30px",

                    }}
                  >
                    <img src={imageURL ? `${URL}/upload/${imageURL}` : defaultimg} alt="" style={{ height: "100%", width: "100%", borderRadius: '10px', objectFit: "cover" }} />
                  </Box>
                ) : (
                  ""

                )}
                {videoType?.includes(fileType) ? (
                  <Box sx={{ borderRadius: "5px", overflow: "hidden", height: { xs: "300px", md: "500px" } }}>
                    <video
                      src={`${URL}/upload/${detailsNfts?.file}`}
                      width="100%"
                      border="2px solid blue"
                      controls="controls"
                      autoPlay={false}
                      style={{ width: '100%', height: "100%" }}
                    />
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6.5} >
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"

                  spacing={2}
                >
                  <Box>
                    <Tooltip title="Back" placement="top">
                      <IconButton
                        onClick={() => {
                          navigate(-1);
                        }}
                        sx={{
                          background:
                            "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                          "&:hover": {
                            background:
                              "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                          },
                        }}
                      >
                        <ArrowBackIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box>
                    <Tooltip title="Share" placement="top">
                      <IconButton
                        sx={{
                          background:
                            "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                          "&:hover": {
                            background:
                              "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                          },
                        }}
                      >
                        <ShareIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Stack>
                <Box className="scroolbox"
                  sx={{
                    height: { xs: "100px", md: "190px" },
                    overflowY: "scroll",

                  }}
                >

                  <Typography variant="h6" py={2}>

                    {detailsNfts?.name}


                  </Typography>
                  <Typography color="text.secondary" variant="body2" py={2}>
                    {detailsNfts?.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    py: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: { xs: "15px", md: "25px" } }}>
                      Current Price
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "15px", md: "25px" }, fontWeight: "600" }}>
                      {detailsNfts?.productTotalPrice
                        ? detailsNfts?.productTotalPrice + "$"
                        : "0 $"}
                    </Typography>
                  </Box>
                  {userdetails?.id === detailsNfts?.user ? (
                    <Box
                      onClick={() => {
                        setOpen(true);
                      }}
                      sx={{ width: "50%" }}
                    >
                      <DetailButton text="Edit" />
                    </Box>
                  ) : (
                    <Box sx={{ width: "50%" }}>
                      <DetailButton text="Buy now" />
                    </Box>
                  )}
                </Box>
                <ViewLikes ceilSlice={ceilSlice} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
