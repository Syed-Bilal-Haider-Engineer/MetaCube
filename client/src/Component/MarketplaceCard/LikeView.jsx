import React from "react";
import { iconStyle } from "../MarketplaceCard/Likeviewstyle";
import { Box, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
function LikeView({ userlikeviews, howManyViews }) {
  let like = userlikeviews?.likesList?.length;
  let view = userlikeviews?.favoritesList?.length;
  let views = howManyViews?.length;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        my: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack spacing={1} direction="row">
          <Box style={iconStyle}>
            <ThumbUpIcon fontSize="small" />
            <Typography fontSize="small" sx={{ ml: 0.5 }}>
              {like > 0 ? like : 0}
            </Typography>
          </Box>
          <Box style={iconStyle}>
            <FavoriteIcon fontSize="small" sx={{ ml: 1 }} />
            <Typography fontSize="small" sx={{ ml: 0.5 }}>
              {" "}
              {view ? view : 0}
            </Typography>
          </Box>

          {/* <Box style={iconStyle}>
            <VisibilityIcon fontSize="small" sx={{ ml: 1 }} />
            <Typography fontSize="small" sx={{ ml: 0.5 }}>
              {views ? views : 0}
            </Typography>
          </Box> */}
        </Stack>
      </Box>
    </Box>
  );
}

export default LikeView;
