import { AddCeil, Adduser, Allusers, AddfailNfts } from "./Redux/Reducer";
import { useDispatch } from "react-redux";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchAlluser, getBuyCells } from "./Api/api";
import { URL } from "./URL";
// import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import ConnectWallet from "./ConnectButton/ConnectWallet";
// import { client } from "./utils/Utiles";
import Loading from "./Loading/Loading.js";
import ContextAPI from "./ContextAPI/CreateContext";
import { Box } from "@mui/material";

import { Sidebar } from "./Component/sidebar";
import { PrivateAdminRoute, PrivateRoute } from "./Component/Auth/private";
import { LandPage } from "./Component/LandingPage/LandPage";
import { client, ethereumClient, wagmiClient } from "./utils/Utiles";
import { Web3Button, Web3Modal } from "@web3modal/react";

function App() {
  const dispatch = useDispatch();
  const tokenVerfiy = async () => {
    try {
      await fetch(`${URL}/verifytoken`, {
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("maptoken"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "error") {
            dispatch(Adduser({}));
            localStorage.clear();
          }
          data?.status === "ok" && dispatch(Adduser(data));
        });
    } catch (error) {
      console.log("Token verify route", error);
    }
  };
  React.useEffect(() => {
    tokenVerfiy();
  }, []);

  React.useEffect(() => {
    async function fetchBuyceil() {
      let buyceilValue = await getBuyCells();
      let alluser = await fetchAlluser();
      dispatch(Allusers(alluser));
      dispatch(AddCeil(buyceilValue?.nfts));
      dispatch(AddfailNfts(buyceilValue?.failedNfts));
    }
    fetchBuyceil();
  }, []);

  const Bmap = lazy(() => import("./Component/Bmap"));
  const Units = lazy(() => import("./Component/units"));
  const Register = lazy(() => import("./Component/Auth/Register"));
  const Login = lazy(() => import("./Component/Auth/Login"));
  const Details = lazy(() => import("./Component/detail/detail.jsx"));
  const Emailverify = lazy(() => import("./Component/Auth/Emailverify"));
  const User = lazy(() => import("./Component/userDashbord/user"));
  const AdminProfile = lazy(() =>
    import("./Component/AdminDashbord/Profile/AdminProfile")
  );
  const NftDetail = lazy(() =>
    import("./Component/userDashbord/profile/NftDetail")
  );
  const MarketplacePage = lazy(() =>
    import("./Component/MarketplaceCard/MarketplacePage")
  );
  const Profile = lazy(() =>
    import("./Component/userDashbord/profile/profile")
  );
  const UserWallet = lazy(() =>
    import("./Component/userDashbord/userWallet/userWallet")
  );
  const UserLeaderboard = lazy(() => import("./Component/userLeaderboard"));


  return (
    <>
      <Box sx={{ maxWidth: "xl", mx: "auto" }}>
        <WagmiConfig client={wagmiClient}>
          <Web3Modal
            projectId="03d8051880f6b1fcc66bb3961bb68ff0"
            ethereumClient={ethereumClient}
          />
         
          <Suspense fallback={<Loading loading={true} />}>
            <Routes>
              <Route path="/" element={<Sidebar />}>
                <Route index element={<LandPage />} />
                <Route path="/Bmap" element={<Bmap />} />
                <Route path="/Bmap/:lang/:long" element={<Bmap />} />
                <Route path="/units" element={<Units />} />
                <Route
                  path="/userLeaderboard"
                  element={
                    <PrivateRoute>
                      {" "}
                      <UserLeaderboard />{" "}
                    </PrivateRoute>
                  }
                />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/detail/:id"
                  element={
                    <PrivateRoute>
                      {" "}
                      <Details />{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/user"
                  element={
                    <PrivateRoute>
                      {" "}
                      <User />{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/userwallet"
                  element={
                    <PrivateRoute>
                      {" "}
                      <UserWallet />{" "}
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                    // userdetails?.role[0]?.includes("user") ? (
                  }
                />
                <Route path="/Emailverify/:id" element={<Emailverify />} />
                <Route path="/nftDetail/:id" element={<NftDetail />} />
                {/* <Route
                      path="/nftMarketDetail/:id"
                      element={<NftMarketPlace />}
                    /> */}
                <Route
                  path="/admin"
                  element={
                    <PrivateAdminRoute>
                      <AdminProfile />
                    </PrivateAdminRoute>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
        </WagmiConfig>
      </Box>
    </>
  );
}

export default App;
