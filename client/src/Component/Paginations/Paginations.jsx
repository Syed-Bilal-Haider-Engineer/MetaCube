import React from "react";
import { Stack } from "@mui/system";
import { Box, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink } from "react-router-dom";
function Paginations({
  PreviousButton,
  paginationsHandles,
  NextButton,
  menuItems,
  page,
  totalPages,
}) {
  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <Box sx={{ m: 1, mb: 2 }}>
      <Stack direction={"row"} alignItems="right" justifyContent="center">
        {page === 1 ? (
          <Button
            startIcon={<ChevronLeftIcon />}
            sx={{
              width: "20px",
              background:
                "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              color: "white",
              "&:hover": {
                background:
                  "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              },
            }}
            disabled
          />
        ) : (
          <Button
            onClick={() => {
              PreviousButton();
            }}
            startIcon={<ChevronLeftIcon />}
            sx={{
              cursor: "pointer",
              width: "20px",
              background:
                "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              color: "white",
              "&:hover": {
                background:
                  "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              },
            }}
          />
        )}

        {menuItems?.length > 0 &&
          menuItems.map((items, index) => {
            return (
              <>
                {index < 5 ? (
                  <Button
                    sx={{ cursor: "pointer" }}
                    component={NavLink}
                    to="#"
                    // style={styledactivelink}
                    key={index + 1}
                    onClick={() => {
                      paginationsHandles(index + 1);
                    }}
                  >
                    {index + 1}
                  </Button>
                ) : (
                  ""
                )}
              </>
            );
          })}
        {page !== totalPages ? (
          <Button
            // component={<NavLink />}
            to="#"
            onClick={() => {
              NextButton();
            }}
            startIcon={<NavigateNextIcon />}
            sx={{
              cursor: "pointer",
              width: "20px",
              background:
                "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              color: "white",
              "&:hover": {
                background:
                  "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              },
            }}
          />
        ) : (
          <Button
            startIcon={<NavigateNextIcon />}
            sx={{
              width: "20px",
              background:
                "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              color: "white",
              "&:hover": {
                background:
                  "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              },
            }}
            disabled
          />
        )}
      </Stack>
    </Box>
  );
}

export default Paginations;
