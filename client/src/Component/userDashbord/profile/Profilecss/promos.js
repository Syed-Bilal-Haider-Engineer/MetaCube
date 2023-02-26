import { useState, useEffect } from "react";
import {
  promoApi,
  getPromoData,
  deletePromoData,
} from "../../../../Api/api.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import useMakeToast from "../../../../hooks/makeToast.js";
const Promos = () => {
  const makeToast = useMakeToast();
  const [promo, setPromo] = useState({
    name: "",
    code: "",
    offers: "",
  });
  const [promosList, setPromoList] = useState([]);
  useEffect(() => {
    callPromoApi();
  }, []);
  const callPromoApi = async () => {
    const { data } = await getPromoData();
    if (data.length > 0) setPromoList(data);
    else setPromoList([]);
  };
  const handleChange = (e) => {
    setPromo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async () => {
    if (promo.name && promo.code && promo.offers) {
      if (promo.offers > 100 || promo.offers < 0) {
        return makeToast('Offer must be between 0 and 100', 'error', 3, 'Failed');
      }
      if (promo.name.length < 3)
      return makeToast('Name contain minimum 3 letters', 'error', 3, 'Failed');
      if (promo.code.length < 4) return makeToast('Code minimum 4  letters', 'error', 3, 'Failed');
      const { status, message } = await promoApi(promo);
      if (status !== "Failed") {
        makeToast(`${message}`, 'success', 3, 'Success')
        if (status != "exist") {
          setPromo({
            name: "",
            code: "",
            offers: "",
          });
          callPromoApi();
        }
      } else {
        makeToast(`${message}`, 'error', 3, 'Failed');
      }
    } else {
      makeToast(`Please fill all Fields`, 'error', 3, 'Failed');
    }
  };
  const handleDelete = async (value) => {
    const data = await deletePromoData(value);
    if (data.data) callPromoApi();
  };

  return (
    <>
      <h1>Promos code</h1>
      <Box
        className="promoBtn"
        sx={{ backgroundColor: "background.secondary", borderRadius: "10px" }}
      >
        <TextField
          required
          value={promo.name}
          name="name"
          onChange={handleChange}
          id="outlined-basic"
          label="Promo Name"
          variant="outlined"
          size="small"
          sx={{ m: 1 }}
        />
        <TextField
          required
          value={promo.code}
          name="code"
          onChange={handleChange}
          id="outlined-basic"
          label="Promo Code"
          variant="outlined"
          size="small"
          sx={{ m: 1 }}
        />
        <TextField
          required
          value={promo.offers}
          type="number"
          name="offers"
          onChange={handleChange}
          id="outlined-basic"
          label="How much off"
          variant="outlined"
          size="small"
          sx={{ m: 1 }}
        />
        <Button
          onClick={handleSubmit}
          sx={{
            background:
              "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
            m: 1,
            color: "white",
          }}
        >
          Promo Add
        </Button>
      </Box>
      <TableContainer
        sx={{
          backgroundColor: "background.secondary",
          my: 5,
          borderRadius: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h4>Promos Name</h4>
              </TableCell>
              <TableCell>
                <h4>Promos Codes</h4>
              </TableCell>
              <TableCell>
                <h4>How much off</h4>
              </TableCell>
              <TableCell>
                <h4>Delete</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {promosList.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.offers} % off on this promo</TableCell>
                <TableCell>
                  <DeleteIcon
                    sx={{ color: "#CD0404", cursor: "pointer" }}
                    onClick={() => handleDelete(row._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Promos;
