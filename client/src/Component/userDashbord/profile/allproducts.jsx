import * as React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import MarketplaceCard from "../../MarketplaceCard/MarketplaceCard";
import { EmptyData } from "../../AdminDashbord/EmptyData";
import { useEffect, useState, useRef } from "react";
import { allNftsOfUser } from "../../../Api/api";
import Loading from "../../../Loading/Loading";
import Paginations from "../../Paginations/Paginations";
import { useDispatch } from "react-redux";
import { AdduserNfts } from "../../../Redux/Reducer";
import axios from "axios";
export default function AllProducts({
  Nfts,
  AllNfts,
  faildNFT,
  favourite,
  follow,
}) {
  let dispatch = useDispatch();
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState();
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = useState(false);
  const [Nftsrecord, setRecord] = useState([]);
  const { ceilSlice } = useSelector((state) => state);
  const { userNfts, ceildetails, failsNfts, userdetails } = ceilSlice;
  const [nftmint, setNftmint] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [itemList, setItemList] = useState([]);
  const observer = useRef();
  let lenOFceil = 0;
  const checker = true;
  const callApi = async () => {
    setLoading(true);
    setHasMore(false);
    const values = {
      id: userdetails.id,
      page,
    };
    let response = await allNftsOfUser(values);
    if (response) {
      let more = response.data.data.length > 0 ? true : false;
      setHasMore(more);
      setItemList((prev) => {
        return [...prev, ...response.data.data];
      });
      setTimeout(() => setLoading(false), 500);
    }
  };
  useEffect(() => {
    callApi();
  }, [page]);
  const lastItemVisible = React.useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
          setHasMore(false);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loading]
  );
  return (
    <>
      <Box sx={{ width: "100%", mx: "auto" }}>
        <Grid container my={2}>
          {itemList?.length > lenOFceil ? (
            itemList?.map(
              (
                {
                  address,
                  _id,
                  name,
                  lang,
                  long,
                  filelink,
                  capturesImage,
                  file,
                  productTotalPrice,
                  user,
                  favoritesList,
                  likesList,
                  howManyViews,
                  paidStatusContract,
                },
                index
              ) => {
                if (itemList.length == index + 1) {
                  return (
                    <>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        xl={3}
                        p={2}
                        key={index + _id}
                        ref={lastItemVisible}
                      >
                        <MarketplaceCard
                          address={address}
                          locations={{ lang, long }}
                          id={_id}
                          name={name}
                          Image={capturesImage}
                          user={user}
                          filelink={filelink}
                          file={file}
                          productTotalPrice={productTotalPrice}
                          checker={checker}
                          userlikeviews={{ likesList, favoritesList }}
                          howManyViews={howManyViews}
                          paidStatusContract={paidStatusContract}
                          failedNftmint={setNftmint}
                        />
                      </Grid>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        xl={3}
                        p={2}
                        key={index + _id}
                      >
                        <MarketplaceCard
                          address={address}
                          locations={{ lang, long }}
                          id={_id}
                          name={name}
                          Image={capturesImage}
                          user={user}
                          filelink={filelink}
                          file={file}
                          productTotalPrice={productTotalPrice}
                          checker={checker}
                          userlikeviews={{ likesList, favoritesList }}
                          howManyViews={howManyViews}
                          paidStatusContract={paidStatusContract}
                          failedNftmint={setNftmint}
                        />
                      </Grid>
                    </>
                  );
                }
              }
            )
          ) : (
            <EmptyData text=" Empty  NFTs ...." />
          )}
        </Grid>
      </Box>
    </>
  );
}
