import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { URL } from "../../../URL";
import Paginations from "../../Paginations/Paginations";
import { fetchAlluser } from "../../../Api/api";
import { useDispatch } from "react-redux";
import { Allusers } from "../../../Redux/Reducer";
import { NavLink } from "react-router-dom";

export default function ViewTable() {
  const [users, setUsers] = useState();
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState();
  const [page, setPage] = React.useState(1);
  //....fetch all users.....
  const fetchAllusers = async (page) => {
    let allUser = await fetchAlluser(page);
    setUsers(allUser?.users);
    setTotalPage(allUser?.totalPages);
    setCurrentPage(allUser?.currentPage);
  };
  React.useEffect(() => {
    fetchAllusers(page);

  }, [page]);

  //...Pagniations here.........
  let menuItems = [];
  for (var i = 1; i <= totalPage; i++) {
    menuItems.push(i);
  }
  const paginationsHandles = (pages) => {
    fetchAllusers(pages);
    setPage(pages);
  };
  const PreviousButton = () => {
    setPage((page) => page - 1);
  };
  const NextButton = () => {
    setPage((page) => page + 1);
  };
  return (
    <>
      <Box
        sx={{
          my: 5,
          boxShadow: 2,
          backgroundColor: "background.secondary",
          borderRadius: "10px",
        }}
      >
        <TableContainer sx={{ p: 2 }}>
          <Table sx={{ minWidth: 850 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "700", fontSize: "12px" }}
                >
                  User Name
                </TableCell>

                <TableCell
                  align="left"
                  sx={{ fontWeight: "700", fontSize: "12px" }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "700", fontSize: "12px" }}
                >
                  NFTS
                </TableCell>
                {/* <TableCell
                align="left"
                sx={{ fontWeight: "700", fontSize: "12px" }}
              >
                Status
              </TableCell> */}
                <TableCell
                  align="left"
                  sx={{ fontWeight: "700", fontSize: "12px" }}
                >
                  Address
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.length > 0 &&
                users?.map(({ email, profileImage, username, _id, wallet }) => (
                  <TableRow key={_id}>
                    <TableCell style={{ minWidth: 120 }} align="left">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={
                            profileImage
                              ? `${URL}/upload/${profileImage}`
                              : "https://pbs.twimg.com/media/FhC3LvHXkAEMEUZ.png"
                          }
                          alt=""
                          srcSet=""
                          style={{ borderRadius: "8px", width: "40px" }}
                        />

                        <Typography sx={{ fontSize: "14px", ml: 2 }}>
                          {username}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ minWidth: 120, color: "text.secondary" }}
                      align="left"
                    >
                      {email}
                    </TableCell>
                    <TableCell
                      sx={{ minWidth: 120, color: "text.secondary" }}
                      align="left"
                    >
                      5
                    </TableCell>
                    {/* <TableCell
                    sx={{ minWidth: 120, color: "text.secondary" }}
                    align="left"
                  >
                    pandding
                  </TableCell> */}
                    <TableCell sx={{ minWidth: 130, color: "text.secondary" }}>
                      {wallet}
                    </TableCell>
                    <TableCell style={{ minWidth: 20 }} align="left">
                      ...
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Paginations
        PreviousButton={PreviousButton}
        paginationsHandles={paginationsHandles}
        NextButton={NextButton}
        menuItems={menuItems}
        page={page}
        totalPages={totalPage}
      />
    </>
  );
}
