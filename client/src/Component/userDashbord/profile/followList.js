import React, { useEffect, useState, useRef } from 'react';
import { followNftOfUser } from "../../../Api/api";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import MarketplaceCard from "../../MarketplaceCard/MarketplaceCard";
import { EmptyData } from "../../AdminDashbord/EmptyData";
import Loading from "../../../Loading/Loading";
import Paginations from "../../Paginations/Paginations";
import { useDispatch } from "react-redux";
const FollowList = () => {
    const { ceilSlice } = useSelector((state) => state);
    const { userNfts, ceildetails, failsNfts, userdetails } = ceilSlice;
    const [hasMore, setHasMore] = useState(false);
    const [itemList, setItemList] = useState([]);
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = useState(false);
    const [nftmint, setNftmint] = useState(false);
    const followObserver = useRef();
    let lenOFceil = 0;
    const checker = true;
    const callApi = async () => {
        setLoading(true);
        setHasMore(false);
        const values = {
            id: userdetails.id,
            page,
        };
        const response = await followNftOfUser(values);
        if (response) {
            let more = response.data.data.length > 0 ? true : false;
            setHasMore(more);
            setItemList((prev) => {
                return [...prev, ...response.data.data];
            });

            console.log('iteeeeeee,,,,,,, faaavvvv   ', itemList)
            setTimeout(() => setLoading(false), 500);
        }
    }
    useEffect(() => {
        callApi()
    }, [page])
    const lastItemVisible = React.useCallback(
        (node) => {
            if (loading) return;
            if (followObserver.current) followObserver.current.disconnect();
            followObserver.current = new IntersectionObserver((entries) => {
                console.log("follow observer logg fff",hasMore)
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prev) => prev + 1);
                    setHasMore(false);
                }
            });
            if (node) followObserver.current.observe(node);
        },
        [hasMore, loading]
    );
    return (
        <>
            <Loading loading={loading} />
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
    )
}

export default FollowList;