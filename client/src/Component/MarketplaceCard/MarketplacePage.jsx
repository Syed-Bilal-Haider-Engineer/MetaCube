import React from "react";
import { Box, Grid } from "@mui/material";
import MarketplaceCard from "./MarketplaceCard";
import { useDispatch, useSelector } from "react-redux";
import { getBuyCells } from "../../Api/api";
import { AddCeil, AddfailNfts } from "../../Redux/Reducer";
import Loading from "../../Loading/Loading";
import Comingsoon from "../modal/Comingsoon";
function MarketplacePage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const init = React.useCallback(() => {
    (async function () {
      setLoading(true);
      let buyceilValue = await getBuyCells();
      dispatch(AddCeil(buyceilValue?.nfts));
      dispatch(AddfailNfts(buyceilValue?.failedNfts));
      setLoading(false);
    })();
  }, [dispatch]);
  const { ceilSlice } = useSelector((state) => state);
  const { ceildetails } = ceilSlice;
  React.useEffect(() => {
    init();
  }, [dispatch, init]);

  return (
    <>
      {loading && <Loading loading={loading} />}
      <Grid
        container
        alignItems="center"
        justifyContent="center !important"
        sx={{ width: "100vw",}}
      >
        <Grid
          container
          spacing={2}
          p={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100vw",
            // backgroundColor: "green",
            mt: "0px",
            // backgroundColor: { md: "cyan" },
            mt: { md: "80px" },
            justifyContent: { sm: "start" },
          
          }}
        >
          {ceildetails?.length > 0 ? (
            ceildetails?.map(
              (
                {
                  _id,
                  lang,
                  long,
                  name,
                  filelink,
                  file,
                  capturesImage,
                  productTotalPrice,
                  user,
                  likesList,
                  favoritesList,
                  howManyViews,
                  paidStatusContract,
                },
                index
              ) => (
                <>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={_id + index}
                    // sx={{ backgroundColor: "blue" }}
                    mt={4}
                  >
                    <Box
                      sx={{
                        // backgroundColor: "yellow",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <MarketplaceCard
                        locations={{ lang, long }}
                        id={_id}
                        name={name}
                        Image={capturesImage}
                        user={user}
                        filelink={filelink}
                        file={file}
                        productTotalPrice={productTotalPrice}
                        userlikeviews={{ likesList, favoritesList }}
                        howManyViews={howManyViews}
                        paidStatusContract={paidStatusContract}
                      />
                    </Box>
                  </Grid>
                </>
              )
            )
          ) : (
            <Box sx={{ mx: "auto", mt: 30 }}>
              <Comingsoon />
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default MarketplacePage;
