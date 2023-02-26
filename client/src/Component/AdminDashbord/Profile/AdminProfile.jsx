import { Box, Paper } from "@mui/material";
import React from "react";
import { AdminHeader } from "../AdminHeader";
import AdminTabs from "../AdminTab";
const AdminProfile = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          alignItems: "start",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "100%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            fontSize: "70px",
          }}
        >
          <AdminHeader />
          <AdminTabs />
        </Box>
      </Box>
    </>
  );
};

export default AdminProfile;
