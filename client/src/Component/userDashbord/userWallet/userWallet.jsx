import { Box, Hidden, Paper, Typography } from "@mui/material";
import React from "react";
// import { UserSiderbar } from '../userSiderbar'
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import GasMeterOutlinedIcon from "@mui/icons-material/GasMeterOutlined";
import { CiBag1 } from "react-icons/ci";
import { UserSiderbar } from "../userSiderbar";
import { UserHeader } from "./userHeader";
import ViewTable from "./viewTable";

const UserWallet = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            mt: 5,
            width: { xs: "100%", md: "90%" },
            mx: "auto",
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "70px",
          }}
        >
          <Box
            sx={{
              mx: { xs: "auto", md: "0px" },
              width: { xs: "90%", md: "100%" },
            }}
          >
            {/* <UserHeader/> */}
            <Paper
              sx={{
                mt: 10,
                p: 2,
                boxShadow: "2",
                borderRadius: "20px",
                width: { xs: "90%", sm: "90%", md: "90%" },
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "22px" }}>Your Balance</Typography>
                <Typography>$ 4548484$</Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "gray" }}>
                June,1,2023 , 08:22 AM
              </Typography>

              <Box sx={{ mt: 5 }}>
                <Typography sx={{ color: "gray" }}>This Month</Typography>
                <Typography sx={{ fontSize: "22px" }}>$ 577444</Typography>
              </Box>
              <Box
                sx={{
                  borderTop: "1px solid gray",
                  mt: 2,
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{ display: "flex", mt: 5, mx: { xs: "auto", md: "0px" } }}
                >
                  <AccountBalanceWalletOutlinedIcon
                    sx={{
                      color: "orange",
                      fontSize: "50px",
                      p: 1,
                      borderRadius: "5px",
                      mr: 1,
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: "12px", color: "gray" }}>
                      Income
                    </Typography>
                    <Typography>$ 75757</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", mt: 5, mx: { xs: "auto", md: "0px" } }}
                >
                  <CiBag1
                    style={{
                      color: "orange",
                      fontSize: "50px",
                      padding: "5px",
                      borderRadius: "5px",
                      marginRight: "5px",
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: "12px", color: "gray" }}>
                      Expence
                    </Typography>
                    <Typography>$ 75757</Typography>
                  </Box>
                </Box>{" "}
                <Box
                  sx={{ display: "flex", mt: 5, mx: { xs: "auto", md: "0px" } }}
                >
                  <GasMeterOutlinedIcon
                    sx={{
                      color: "orange",
                      fontSize: "50px",
                      p: 1,
                      borderRadius: "5px",
                      mr: 1,
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: "12px", color: "gray" }}>
                      Gass
                    </Typography>
                    <Typography>$ 75757</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>

            <Box sx={{ width: "95%", mx: "auto" }}>
              <Typography
                sx={{ ml: 5, mt: 5, fontSize: "20px", fontWeight: "bold" }}
              >
                Last Transection
              </Typography>
              {/* <BasicTable/> */}
              <ViewTable />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserWallet;
