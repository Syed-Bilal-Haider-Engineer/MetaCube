import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import * as MaplibreGrid from "maplibre-grid";
import "maplibre-gl/dist/maplibre-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import LanguageIcon from "@mui/icons-material/Language";
import mapboxgl from "mapbox-gl";
import { getBuyCells, payWithWallet, getSinglePromo } from "../Api/api";
import CustomBTN from "./CustomButton/CustomBTN";
import { useParams } from "react-router-dom";
import "./Bmap.css";
import {
  Box,
  Stack,
  Typography,
  Paper,
  InputBase,
  Button,
} from "@mui/material";
import styles from "./Search.module.css";
import CloseIcon from "@mui/icons-material/Close";
import cardbg from "../images/cardbg.png";
import cardbgDark from "../images/cardbgDark.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import {
  useSendTransaction,
  usePrepareSendTransaction,
  useContractRead,
  useBalance,
} from "wagmi";
import { parseUnits } from "@ethersproject/units";
import MapModal from "./modal/MapModal";
//.....Redux react.. .......
//
import { AddCeil } from "../Redux/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Checkout from "../stripe/stripe";
import usdAbi from "../Connectivityas/ABI/ContractABI.json";
import { CallContract } from "../Connectivityas/Environement";
import Loading from "../Loading/Loading";
import { useAccount } from "wagmi";
import AdminModal from "../Component/modal/adminMint";
import useMakeToast from "../hooks/makeToast";
import axios from "axios";
import { ColorModeContext } from "../theme";
// import Timer from "./Timer/Timer";
function Bmap() {
  var mapGrid;
  const makeToast = useMakeToast();
  const params = useParams();
  const usenavigate = useNavigate();
  const dispatch = useDispatch();
  const { ceilSlice } = useSelector((state) => state);
  const { userdetails } = ceilSlice;
  const { address } = useAccount();
  const [dataValue, setData] = useState(0);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [toggleMap, setMapToggle] = useState(true);
  const [dataLenght, setDataLenght] = useState(0);
  const [tilePrice, setTilePrice] = useState(1);
  const [totalCeil, setTotalCeil] = useState([]);
  const [modalvalue, setModalValue] = useState(false);
  const [filterState, setFilterstate] = useState("");
  const [paymentCard, setpaymentCard] = useState(true);
  const [paymentWallet, setpaymentWallet] = useState(true);
  const [cardBtn, setCardBtn] = useState(false);
  const [ceilDetailsstate, setCeilDetailState] = useState("");
  const [open, setOpen] = useState(false);
  const [bLoading, setBLoading] = useState(false);
  const [removeCurrentCeil, setRemoveceil] = useState(false);
  const [loadCeil, setLoadCeil] = useState("");
  const [discountValue, setDiscountValue] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [backbtn, setBackBtn] = useState(false);
  const [mapaddress, setMapaddress] = useState("");
  let accessToken = process.env.REACT_APP_ACCESSTOKEN;
  const [boxCenter, setBoxCenter] = useState([
    73.1083603962225, 31.42117432409888,
  ]);
  const manageHeight = useRef();
  const [promoValue, setPromoValue] = useState("");
  const filterRole =
    userdetails.role && userdetails?.role.filter((role) => role !== null);
  let lat, lng;
  let select = false;
  let selectedCells = [];
  let fixedDataValue = parseFloat(dataValue).toFixed(6);
  const parseValue = parseUnits(fixedDataValue.toString(), 6);
  const {
    data: newData,
    isError: readEror,
    isLoading: loadingBnb,
  } = useContractRead({
    address: CallContract,
    abi: usdAbi,
    functionName: "usdtToBNB",
    args: [parseValue],
  });
  const { data: get_balance } = useBalance({
    address: address,
  });
  let balance = get_balance && +get_balance?.formatted;
  const { config } = usePrepareSendTransaction({
    request: {
      to: "0xbb17CDC95b626c76E934Df7bF05fEaEFcEa9C61E",
      value: newData,
    },
    onError(data) {
      setBLoading(false);
    },
  });
  const { data, isLoading, isError, isSuccess, sendTransaction } =
    useSendTransaction(config);
  const init = React.useCallback(async () => {
    if (data && !openModal) {
      payWithWallet(data, isError, ceilDetailsstate, +parseValue, setBLoading);
    }
  }, [data, isLoading, isError, isSuccess]);
  React.useEffect(() => {
    init();
    // document.querySelector(".geocoder input").addEventListener("click",() =>{
    //   alert("Hello i am here")

    // })
  }, [init]);

  //......end contract here........
  const closehandleClick = () => {
    setDataLenght(0);
    setRemoveceil(!removeCurrentCeil);
    manageHeight.current.style.height = "";
  };
  useEffect(() => {
    let len = totalCeil.length;
    if (len) {
      setModalValue(false);
    }
    const totalPrice = len * tilePrice;
    setDataLenght(len);
    setData(totalPrice);
  }, [totalCeil]);
  //...........> end the fetching data <............

  const mapMethod = () => {
    console.log("map click.......>");
    selectedCells = [];
    mapboxgl.accessToken = accessToken;
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [55.266833632327774, 25.20345319338018],
      zoom: 16.5,
      scrollZoom: true,
      preserveDrawingBuffer: true,
      cooperativeGestures: true,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });
    document
      .getElementById("geocoder")
      .appendChild(geocoder.onAdd(map.current));
    map.current.on("load", () => {
      const grid1 = new MaplibreGrid.Grid({
        gridWidth: 0.02,
        gridHeight: 0.02,
        units: "kilometers",
        minZoom: 15.5,
        maxZoom: 22,
        active: false,
        paint: {
          "line-opacity": 0.5,
          "line-color": "white",
        },
      });

      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
      map.current.addControl(
        new maplibregl.NavigationControl({
          showZoom: true,
        })
      );
      map.current.addControl(grid1);
      // --------------------> Map handler  function <-----------------

      const maploadHandle = async () => {
        const selectedCellsId = "selected-cells";
        map.current.addSource(selectedCellsId, {
          type: "geojson",
          data: { type: "FeatureCollection", features: selectedCells },
        });
        //------------------------> add layer 1 <---------------------------
        map.current.addLayer({
          id: selectedCellsId,
          source: selectedCellsId,
          active: true,
          type: "fill",
          paint: {
            "fill-color": "#0000ff",
            "fill-opacity": 0.2,
            "fill-outline-color": "red",
          },
        });
        let verticalBox = 0;
        let horizontalBox = 0;
        let boxLimit = 0.003;
        //---------------> Get selected ceill  & Data <-----------------

        map.current.on(MaplibreGrid.GRID_CLICK_EVENT, async (event) => {
          const bbox = event.bbox;
          console.log("bbox automatic click", bbox);
          try {
            const { data } = await axios.get(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${bbox[0]},${bbox[1]}.json?&access_token=${accessToken}`
            );
            setMapaddress(data?.features[0]?.place_name);
          } catch (error) {
            console.log("error get the address", error);
          }

          const cellIndex = selectedCells.findIndex(
            (x) => x.geometry.bbox.toString() === bbox.toString()
          );
          if (cellIndex === -1 && select !== true) {
            manageHeight.current.style.height = "70%";
            const coordinates = [
              [
                [bbox[0], bbox[1]],
                [bbox[2], bbox[1]],
                [bbox[2], bbox[3]],
                [bbox[0], bbox[3]],
                [bbox[0], bbox[1]],
              ],
            ];
            let allowToBuyCell = false;
            let currentFirst = coordinates[0][0][0].toFixed(3);
            let currentSecond = coordinates[0][0][1].toFixed(3);
            if (verticalBox === 0 && horizontalBox === 0) {
              verticalBox = coordinates[0][0][0].toFixed(3);
              horizontalBox = coordinates[0][0][1].toFixed(3);
              allowToBuyCell = true;
            } else {
              let verticalLineChecker = verticalBox - currentFirst;
              let horizontalLineChecker = horizontalBox - currentSecond;
              if (
                verticalLineChecker.toFixed(3) <= boxLimit &&
                verticalLineChecker.toFixed(3) >= -boxLimit &&
                horizontalLineChecker.toFixed(3) <= boxLimit &&
                horizontalLineChecker.toFixed(3) >= -boxLimit
              ) {
                allowToBuyCell = true;
              } else {
                makeToast(
                  "You Can't select out of Limits!",
                  "warn",
                  3,
                  "Alert"
                );
                manageHeight.current.style.height = "";
              }
            }
            const cell = {
              type: "Feature",
              geometry: { type: "Polygon", bbox, coordinates },
            };
            if (allowToBuyCell) {
              selectedCells.push(cell);
              setTotalCeil((totalCeil) => [...totalCeil, cell]);
            }
          } else {
            if (!select) {
              selectedCells.splice(cellIndex, 1);
              setTotalCeil((totalCeil) =>
                totalCeil.filter((item, i) => i !== cellIndex)
              );
            } else {
              // toast.error("This land is already selected !");
              manageHeight.current.style.height = "80%";
              setModalValue(true);
            }
          }
          const source = map.current.getSource(selectedCellsId);
          source.setData({
            type: "FeatureCollection",
            features: selectedCells,
          });

          setLoadCeil("");
        });
        //------------------------> 2nd layer <----------------------
        setBLoading(true);
        const selectedCellsOldId = "selected-Oldcells";
        let buyceilValue = await getBuyCells();
        dispatch(AddCeil(buyceilValue?.nfts));
        buyceilValue = buyceilValue?.nfts;
        setBLoading(false);
        let allUserData = [];
        for (let i = 0; i < buyceilValue?.length; i++) {
          for (let j = 0; j < buyceilValue[i]?.attributes.length; j++) {
            allUserData.push(buyceilValue[i]?.attributes[j]);
          }
        }
        //.....filter map ceil ...........
        map.current.on("grid.click", (event) => {
          const bbox = event.bbox;
          let result = buyceilValue?.find((element) => {
            return element?.attributes.find((item) => {
              return (
                JSON.stringify(bbox) === JSON.stringify(item.geometry.bbox)
              );
            });
          });

          if (result !== "") {
            setFilterstate(result);
          }
        });

        map.current.on("grid.click", () => {
          setCardBtn(false);
        });
        //........All filter data end.........
        map.current.addSource(selectedCellsOldId, {
          type: "geojson",
          data: { type: "FeatureCollection", features: allUserData },
        });
        map.current.addLayer({
          id: "selectedCellsOldId",
          source: selectedCellsOldId,
          active: true,
          type: "fill",
          paint: {
            "fill-color": "white",
            "fill-opacity": 0.5,
            "fill-outline-color": "blue",
          },
        });
      };

      map.current.on("mousemove", function (e) {
        // console.log("click here");
        // document.getElementById("mapBox").click();
        let lngLat = e.lngLat;
        let cellSize = 512;
        // var bbox = [
        //   [lngLat.lng - cellSize / 2, lngLat.lat - cellSize / 2],
        //   [lngLat.lng + cellSize / 2, lngLat.lat + cellSize / 2],
        // ];
        // console.log(bbox, "bbox..........>");
      });
      map.current.on("load", maploadHandle());
      map.current.on("mouseenter", "selectedCellsOldId", () => {
        select = true;
        map.current.getCanvas().style.cursor = "not-allowed";
      });
      map.current.on("mouseleave", "selectedCellsOldId", () => {
        select = false;
        map.current.getCanvas().style.cursor = "";
      });
      const grid1GuiConfig = { enabled: true };
      const updateGrid = (grid, gridGuiConfig) => {
        if (gridGuiConfig.enabled) {
          if (!map.current.hasControl(grid)) {
            map.addControl(grid);
          } else {
            grid.update();
          }
        } else {
          if (map.current.hasControl(grid)) {
            map.current.removeControl(grid);
          }
        }
      };
      updateGrid(grid1, grid1GuiConfig);
    });
  };

  useEffect(() => {
    mapMethod();
  }, [boxCenter, removeCurrentCeil]);

  useEffect(() => {
    if (!!params?.lang && !!params?.long) {
      map.current.flyTo({
        center: [params?.long, params?.lang],
      });
    }
  }, [params]);
  // .............Buy Now handler..............
  const zoomsetting = async () => {
    const mediumCeil = totalCeil.length / 2;
    const getMediumCeilNumber = Math.floor(mediumCeil);
    lat = totalCeil[getMediumCeilNumber]?.geometry?.bbox[0];
    lng = totalCeil[getMediumCeilNumber]?.geometry?.bbox[1];
    if (totalCeil.length < 30) {
      await map.current.flyTo({
        center: [lat, lng],
        zoom:
          totalCeil?.length > 9
            ? totalCeil?.length < 18
              ? 17
              : totalCeil?.length < 25
              ? 16.7
              : 16.5
            : 18,
      });
    }
  };
  const zoomOutHandle = async () => {
    await map.current.flyTo({ zoom: 16.5 });
  };
  const buyMap = async () => {
    try {
      if (address && userdetails?.id) {
        zoomsetting();
        setOpen(true);
        setTimeout(() => {
          var snapshot = document.querySelector("#snapshot");
          var ctx = snapshot.getContext("2d");
          var png = map.current.getCanvas().toDataURL();
          var scale = window.devicePixelRatio;
          var halfWidth = window.innerWidth * scale;
          var windowHeight = window.innerHeight * scale;
          // resize canvas after iframe is loaded and account for device pixel ratio
          snapshot.height = windowHeight;
          snapshot.width = halfWidth;
          var copy = new Image();
          copy.src = png;
          copy.onload = function () {
            ctx.drawImage(copy, 0, 0);
          };
          const obj = {
            totalceil: totalCeil,
            snapshot: png,
            user: userdetails?.id,
            tilePrice: tilePrice,
            address: address,
            lang: lng,
            long: lat,
            discounted: discountValue,
            mapaddress: mapaddress,
          };

          setCeilDetailState(obj);
          setLoadCeil(obj);
          zoomOutHandle();
        }, 2000);
      } else {
        makeToast("Please connect Wallet!", "error", 3, "Failed");
      }
    } catch (e) {
      console.log("Error In buyCell process ", e);
    }
  };

  //...........Modal close ............
  const modalHandle = (value) => {
    manageHeight.current.style.height = "";
    setModalValue(value);
  };
  const applyPromosDiscount = async () => {
    if (promoValue) {
      const res = await getSinglePromo(promoValue);
      const data = res?.data?.data;
      if (data) {
        const discount = Number(data.offers);
        // const discountedValue = Math.round((dataValue / 100) * discount);
        const discountedValue = (dataValue / 100) * discount;
        setData(dataValue - discountedValue);
        setDiscountValue(discountedValue);
        return makeToast("Discount Code applied!", "success", 3, "Success");
      } else {
        return makeToast("This Promo is not working", "error", 3, "Failed");
      }
    } else {
      return makeToast("Please Provide Valid Promo Code", "error", 3, "Failed");
    }
  };
  const handleChange = (e) => {
    setPromoValue(e.target.value);
  };

  const openLandModal = async () => {
    buyMap();
    setOpenModal(true);
  };
  // clear
  function clearMapHandle() {
    window.location.reload();
    // if (map.current.getLayer("selected-cells")) {
    //   // Remove layer
    //   map.current.removeLayer("selected-cells");
    //   map.current.removeSource("selected-cells");
    // } else {
    //   // Add layer
    //   map.current.addSource("selected-cells", {
    //     type: "geojson",
    //     data: { type: "FeatureCollection", features: [] },
    //   });
    //   //------------------------> add layer 1 <---------------------------
    //   map.current.addLayer({
    //     id: "selected-cells",
    //     source: "selected-cells",
    //     active: true,
    //     type: "fill",
    //     paint: {
    //       "fill-color": "#0000ff",
    //       "fill-opacity": 0.2,
    //       "fill-outline-color": "red",
    //     },
    //   });
    // }
    // map.current.on("click", mapMethod());
  }

  return (
    <>
      <Loading loading={bLoading} />
      {ceilDetailsstate && openModal ? (
        <AdminModal
          handleClose={setOpenModal}
          openModal={openModal}
          ceilDetailsstate={ceilDetailsstate}
          setBLoading={setBLoading}
          dataValue={dataValue}
        />
      ) : (
        ""
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "xl",
        }}
      >
        <Box>
          <Paper>
            <Box
              sx={{
                p: 1,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                zIndex: "1",
                position: "absolute",
                top: { xs: "60px", md: "100px" },
                // zIndex: "100",
                right: { xs: "15%", md: "10%" },
                minWidth: { xs: "300px", md: "350px" },
                backgroundColor: "background.secondary",
                borderRadius: "10px",
              }}
            >
              <div id="geocoder"></div>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <LanguageIcon />
              </Stack>
            </Box>
          </Paper>
        </Box>
        <Box
          onClick={mapMethod}
          // id="btnDrag"
          id="mapBox"
          sx={{
            height: "100vh",

            marginRight: "0px",
            mt: 0,
            position: "relative",
          }}
          ref={mapContainer}
        >
          <Box
            className="ScrolStyle showDetailsOFBox"
            ref={manageHeight}
            sx={{
              position: "absolute",
              top: { xs: "90px", md: "170px" },
              zIndex: "1",
              right: { xs: "15%", md: "10%" },
              minWidth: { xs: "300px", md: "350px" },
              width: { xs: "18rem", md: "25rem" },
              borderRadius: "15px",
              padding: { xs: "0px 0px", md: "4px 8px" },
              overflow: "scroll",
            }}
          >
            {dataLenght && !modalvalue ? (
              <Box
                width="100%"
                position="absolute"
                className="mapcontainer"
                id="PaymentBox"
                sx={(theme) => ({
                  backgroundImage:
                    theme.palette.mode === "light"
                      ? `url(${cardbg})`
                      : `url(${cardbgDark})`,
                  backgroundSize: "100% 100%",
                  position: "absolute",
                  left: { xs: "0%", md: "0" },
                  zIndex: " -0.9",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "15px",
                  display: dataLenght ? "block" : "none",
                  p: { md: 1.2, xs: 0.3 },
                  my: 1,
                })}
              >
                <Box p={2} ml={3}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",

                      py: 1.5,
                    }}
                  >
                    <Button
                      onClick={() => {
                        setCardBtn(false);
                        setpaymentWallet(true);
                        setpaymentCard(true);
                      }}
                      // variant="outlined"
                      sx={{
                        border: "none",

                        fontSize: "12px",
                        color: "text.primery",
                        mb: 1,
                      }}
                      startIcon={<KeyboardBackspaceIcon />}
                    >
                      Back
                    </Button>
                    <Box>
                      <CloseIcon
                        onClick={closehandleClick}
                        sx={{
                          fontSize: { xs: "25px", md: "30px" },
                          color: "white",
                          cursor: "pointer",
                          background:
                            "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                          padding: { xs: "4px", md: "6px" },
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "10px",
                      backgroundColor: "background.inputbg",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          backgroundImage:
                            "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                          backgroundClip: "text",
                          color: "transparent",
                          xs: "15px",
                          md: "25px",
                          fontWeight: "bold",
                          textAlign: "center",
                        },
                      }}
                    >
                      MetaCubes
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        my: 1,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        ml={0.4}
                      >
                        <DomainAddIcon sx={{ color: "text.secondary" }} />
                        <Typography sx={{ ml: 1, fontSize: "12px" }}>
                          {dataLenght} Cubes selected
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        sx={{
                          fontSize: "12px",
                          px: 2,
                          color: "red",
                          borderRadius: "10px",
                          backgroundColor: "background.buttonBg",
                        }}
                        onClick={() => {
                          clearMapHandle();
                        }}
                      >
                        Clear Selection
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "background.inputbg",
                      p: 1.5,
                      mt: 1,
                      borderRadius: "10px",
                    }}
                  >
                    <Stack spacing={1} sx={{ mt: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: "#848484",
                        }}
                      >
                        <Typography
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "10px", md: "12px" },
                          }}
                        >
                          Original price per cube
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontSize: { xs: "10px", md: "12px" },
                            color: "text.secondary",
                          }}
                        >
                          $1
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: "#848484",
                        }}
                      >
                        <Typography
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "10px", md: "12px" },
                          }}
                        >
                          Current price per cube
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            fontSize: { xs: "10px", md: "12px" },
                            color: "text.secondary",
                          }}
                        >
                          ${Math.abs(1 - +discountValue).toFixed(2)}
                        </Typography>
                      </Box>
                      <hr />
                      <Box>
                        <Typography
                          component="h2"
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: { xs: "12px", md: "20px" },
                            alignItems: "center",
                          }}
                        >
                          Total Price
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "12px",
                                md: "16px",
                              },
                              borderRadius: "15px",
                              px: 1,
                              backgroundColor: "background.buttonBg",
                            }}
                          >
                            {" "}
                            ${dataValue?.toFixed(1)}
                          </Typography>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: "2px solid #34D9B1",
                          borderRadius: "5px",
                          width: "100%",
                          display: "flex",
                        }}
                      >
                        {/* added somting */}
                        <InputBase
                          placeholder="promo"
                          type="text"
                          onChange={handleChange}
                          sx={{
                            backgroundColor: "background.inputbg",
                            color: "gray",
                            width: "100%",
                            borderRadius: "5px",
                            px: 2,
                            py: 0.5,
                            height: "30px",
                          }}
                        />
                        <Button
                          sx={{
                            height: "100%",
                            width: "100%",
                            background:
                              "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "none",
                            fontSize: { xs: "10px", md: "12px" },
                            color: "white",
                            fontWeight: 500,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (!address) {
                              return makeToast(
                                "Please connect with wallet !",
                                "error",
                                3,
                                "Failed"
                              );
                            }
                            if (!userdetails?.id) {
                              usenavigate("/login");
                              return false;
                            }
                            applyPromosDiscount();
                          }}
                        >
                          Add Promo
                        </Button>
                      </Box>
                      {filterRole?.includes("admin") ? (
                        <Box
                          onClick={openLandModal}
                          sx={{
                            display: "inline-block",
                            color: "#fff",
                            fontSize: { xs: "10px", md: "11px" },
                            fontWeight: "bold",
                            textAlign: "center",
                            mt: 2,
                            // marginBottom: "10px",
                            background:
                              "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                            padding: "10px 10px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            letterSpacing: "1px",
                          }}
                          className="promoInputField"
                        >
                          Mint Nft to Specific
                        </Box>
                      ) : (
                        ""
                      )}
                    </Stack>
                  </Box>

                  <Box>
                    {paymentWallet ? (
                      <>
                        <Box
                          sx={{ width: "92%", mx: "auto" }}
                          onClick={async () => {
                            if (!address) {
                              return makeToast(
                                "Please connect with wallet !",
                                "error",
                                3,
                                "Failed"
                              );
                            }
                            if (!userdetails?.id) {
                              usenavigate("/login");
                              return false;
                            }
                            setBackBtn(true);
                            if (+balance <= 0)
                              return makeToast(
                                "Insufficient funds",
                                "error",
                                3,
                                "Failed"
                              );
                            setCardBtn(false);
                            setpaymentCard(false);
                            await buyMap();
                            await sendTransaction();
                          }}
                        >
                          <CustomBTN text="Pay with wallet" />
                        </Box>
                      </>
                    ) : (
                      ""
                    )}

                    {cardBtn ? (
                      <Box
                        sx={{
                          pb: 2,
                        }}
                      >
                        <Typography sx={{ fontSize: "1rem", width: "100%" }}>
                          Pay with Debit Card
                        </Typography>
                        <Checkout
                          ceil={ceilDetailsstate}
                          setBLoading={setBLoading}
                          loadCeil={loadCeil}
                          discountValue={discountValue}
                        />
                        <Typography variant="p">
                          Payment processed by Wert, USD price is for indication
                          only. 4% transaction fee will be included. Min $5
                          purchases.
                        </Typography>
                      </Box>
                    ) : (
                      ""
                    )}
                    {paymentCard ? (
                      <Box>
                        <Box mt={1}>
                          <Typography
                            sx={{
                              fontSize: { xs: "10px", md: "15px" },
                              color: "text.primery",
                              fontWeight: "bold",
                              textAlign: "center",
                              mb: 1,
                            }}
                          >
                            OR
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            p: "2px 4px 4px 2px",
                            background:
                              "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                            color: "white",
                            alignItems: "center",
                            borderRadius: "10px",
                            width: "92%",
                            mx: "auto",
                          }}
                        >
                          <Box
                            onClick={async () => {
                              if (!address) {
                                makeToast(
                                  "Insufficient funds",
                                  "error",
                                  3,
                                  "Failed"
                                );
                                return false;
                              }
                              if (!userdetails?.id) {
                                usenavigate("/login");
                                return false;
                              }
                              setBackBtn(true);
                              setCardBtn(true);
                              setpaymentWallet(!paymentWallet);
                              setpaymentCard(false);
                              await buyMap();
                            }}
                            sx={{
                              width: "100%",
                              py: 1,
                              fontSize: { xs: "12px", md: "15px" },
                              backgroundColor: "background.secondary",
                              textAlign: "center",
                              borderRadius: "8px",
                            }}
                          >
                            <Typography
                              sx={{
                                backgroundImage:
                                  "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                                backgroundClip: "text",
                                color: "transparent",
                                fontSize: { xs: "12px", md: "20px" },
                                fontWeight: "600",
                                cursor: "pointer",
                              }}
                            >
                              {" "}
                              pay with debit card
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ) : (
                      ""
                    )}
                    {!paymentCard && !paymentWallet && !cardBtn ? (
                      <Typography
                        onClick={() => {
                          setCardBtn(false);
                          setpaymentWallet(true);
                          setpaymentCard(true);
                        }}
                      >
                        <CustomBTN text="Back" />
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
              </Box>
            ) : (
              <>
                {modalvalue && (
                  <MapModal modalC={modalHandle} filterState={filterState} />
                )}
              </>
            )}
          </Box>
        </Box>
      </Box>
      <div style={{ width: "100%", display: "none" }}>
        <canvas id="snapshot" style={{ width: "100%" }}></canvas>
      </div>
    </>
  );
}

export default Bmap;
