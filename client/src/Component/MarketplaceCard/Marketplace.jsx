import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import CustomButton from "./Btn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import WavesIcon from "@mui/icons-material/Waves";
import LandscapeIcon from "@mui/icons-material/Landscape";
function MarketplaceCard(props) {
  const { Image } = props;
  const iconStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "25%",
    color: "lightgray",
  };
  return (
    <Card
      sx={{
        backgroundColor: "rgb(36, 0, 81)",
        color: "white",
        height: "600px",
      }}
    >
      <CardMedia image={Image} style={{ width: "100%", height: "200px" }} />
      <CardContent sx={{ m: { md: 1, xs: 0 } }}>
        <Typography gutterBottom sx={{ pb: 2 }} variant="h5" component="h2">
          New Map cards
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "22px" }}> $ Price</Typography>
          <Typography component="p" sx={{ fontSize: "22px" }}>
            2000
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            m: 1,
          }}
        >
          <Box style={iconStyle}>
            <LocationCityIcon fontSize="large" />
            <Typography>0</Typography>
          </Box>
          <Box style={iconStyle}>
            <WavesIcon fontSize="large" />
            <Typography>1</Typography>
          </Box>
          <Box style={iconStyle}>
            <LandscapeIcon fontSize="large" />
            <Typography>2</Typography>
          </Box>
          <Box style={iconStyle}>
            <ArrowUpwardIcon sx={{ color: "green" }} fontSize="large" />
            <Typography sx={{ color: "green" }}>3</Typography>
          </Box>
        </Box>
        <CustomButton />
      </CardContent>
    </Card>
  );
}

export default MarketplaceCard;
