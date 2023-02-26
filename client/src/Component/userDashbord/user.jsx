import { Box } from "@mui/material";
import React from "react";
import ProfileTabs from "./profile/profileTabs";
const User = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "black",
          minHeight: "100vh",
        }}
      >
        user
        {/* <Box>
          <Hidden mdDown>
            <UserSiderbar />
          </Hidden>
        </Box> */}
        {/* <Box
          sx={{
            width: "85%",
            display: "flex",
            justifyContent: "flex-end",
            border: "1px solid yellow",
            fontSize: "70px",
          }}
        >
          Dashbord
        </Box> */}
        <ProfileTabs />
      </Box>
    </>
  );
};

export default User;
