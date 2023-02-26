import React, { useEffect, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import HowToVoteOutlinedIcon from "@mui/icons-material/HowToVoteOutlined";
import BookmarkTwoToneIcon from "@mui/icons-material/BookmarkTwoTone";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { useParams } from "react-router-dom";
import {
  likeListAPi,
  likeListGetAPi,
  favoritesListAPi,
  favoritesListGetApi,
  handleViewsApi,
  handleGetViewsApi,
  handleVoteApi,
  handleGetVoteApi,
  followers,
} from "../../../Api/api.js";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AddFollows, AddFavourite } from "../../../Redux/Reducer";
import useMakeToast from "../../../hooks/makeToast.js";
export const ViewLikes = ({ ceilSlice }) => {
  const makeToast = useMakeToast();
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const [howManyLike, sethowManyLike] = useState(0);
  const [isFav, setIsFave] = useState(false);
  const [howManyFav, setHowManyFav] = useState(0);
  const [howManyViews, setHowManyViews] = useState(0);
  const [howManyVotes, setHowManyVotes] = useState(0);
  const [iCastVote, setICastVote] = useState(false);
  const [iFollows, setFollows] = useState(false);
  const [HowManyFollows, setHowManyFollows] = useState(0);
  const params = useParams();
  const createLikes = () => {
    const nftId = params.id;
    const userId = ceilSlice?.userdetails.id;
    likeListAPi({ userId, nftId }).then((el) => {
      makeToast("You Like this NFT",'success',3,"Success")
      getsLikes();
    });
  };
  const createFavorites = () => {
    const nftId = params.id;
    const userId = ceilSlice?.userdetails.id;
    favoritesListAPi({ userId, nftId }).then((el) => {
      makeToast("This NFT add in your Favorite List",'success',3,"Success")
      getsFavorites();
      dispatch(AddFavourite(nftId));
    });
  };
  const getsFavorites = () => {
    const nftId = params.id;
    const userId = ceilSlice?.userdetails.id;
    favoritesListGetApi(nftId).then((el) => {
      el.data.includes(userId) ? setIsFave(true) : setIsFave(false);
      setHowManyFav(el.data.length);
    });
  };
  const getsLikes = () => {
    const nftId = params.id;
    const userId = ceilSlice?.userdetails.id;
    likeListGetAPi(nftId).then((el) => {
      el.data.likesList.includes(userId) ? setIsLike(true) : setIsLike(false);
      sethowManyLike(el.data.likesList.length);
    });
  };

  const handleViews = () => {
    const nftId = params.id;
    const userId = ceilSlice?.userdetails.id;
    handleViewsApi({ userId, nftId }).then((_) =>
      handleGetViewsApi(nftId).then((el) => setHowManyViews(el.data))
    );
  };
  const handleVotePost = async () => {
    const status = await handleVoteApi({
      userId: ceilSlice?.userdetails.id,
      nftId: params.id,
    });
    if (status) {
      makeToast("Your vote cast for this NFT",'success',3,"Success")
      handlesVotes();
    }
  };
  const handlesVotes = async () => {
    const votes = await handleGetVoteApi(params.id);
    setHowManyVotes(votes.data.length);
    votes.data.includes(ceilSlice?.userdetails.id)
      ? setICastVote(true)
      : setICastVote(false);
  };

  const handleFollowers = async (value) => {
    const nftId = params.id;
    const userId = ceilSlice?.userdetails.id;
    const response = await followers({ userId, nftId });
    if (response) {
      makeToast("This NFT add in your Follow List",'success',3,"Success")
      getFollowers();
      dispatch(AddFollows(nftId));
    }
  };

  const getFollowers = () => {
    const nftId = params.id;
    const userId = ceilSlice?.userdetails.id;
    likeListGetAPi(nftId).then((el) => {
      el.data.follows.includes(userId) ? setFollows(true) : setFollows(false);
      setHowManyFollows(el.data.follows.length);
    });
  };

  useEffect(() => {
    (() => {
      getsLikes();
      getsFavorites();
      handleViews();
      handlesVotes();
      getFollowers();
    })();
  }, []);

  return (
    <>
      <Box
        sx={{
          color: "white",
          p: 2,
          mt: 7,
          background: "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
          borderRadius: "10px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          Attributes
        </Typography>
        <Grid item container xs={12} spacing={1} pt={2}>
          <Grid item xs={12} sm={2}>
            <Box
              p={2}
              sx={{
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Like" placement="left">
                <IconButton sx={{ color: "white" }}>
                  {isLike ? (
                    <ThumbUpIcon />
                  ) : (
                    <ThumbUpOffAltIcon onClick={createLikes} />
                  )}
                </IconButton>
              </Tooltip>
              <Typography>{howManyLike}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              p={2}
              sx={{
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Favorite" placement="left">
                <IconButton sx={{ color: "white" }}>
                  {isFav ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon onClick={createFavorites} />
                  )}
                </IconButton>
              </Tooltip>
              <Typography>{howManyFav}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              p={2}
              sx={{
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Vote" placement="left">
                <IconButton sx={{ color: "white" }}>
                  {iCastVote ? (
                    <HowToVoteIcon />
                  ) : (
                    <HowToVoteOutlinedIcon onClick={handleVotePost} />
                  )}
                </IconButton>
              </Tooltip>
              <Typography>{howManyVotes}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              p={2}
              sx={{
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Follow" placement="left">
                <IconButton sx={{ color: "white" }}>
                  {iFollows ? (
                    <BookmarkRoundedIcon />
                  ) : (
                    <BookmarkTwoToneIcon onClick={handleFollowers} />
                  )}
                </IconButton>
              </Tooltip>
              <Typography>{HowManyFollows}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              p={2}
              sx={{
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title="Views" placement="left">
                <IconButton sx={{ color: "white" }}>
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
              <Typography>{howManyViews}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
