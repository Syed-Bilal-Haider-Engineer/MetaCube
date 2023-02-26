import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CustomBTN from "../CustomButton/CustomBTN";
import { Link, useParams } from "react-router-dom";
import useMakeToast from "../../hooks/makeToast";
import axios from "axios";
import { URL } from "../../URL";
function Emailverify() {
  const makeToast = useMakeToast();
  const params = useParams();
  const [message, setmessage] = React.useState("");
  const [mail, setmail] = React.useState("");
  React.useEffect(() => {
    const verifymail = async () => {
      try {
        const { data } = await axios.post(`${URL}/mailverify`, {
          id: params?.id,
        });
        data?.status === "ok" && setmessage(data?.message);
        data?.status === "ok" && setmail(data?.mail);
        data?.status === "error" && setmessage(data?.message);
      } catch (error) {
        makeToast(`${error}`, "error", 3, "Failed");
      }
    };
    verifymail();
  }, [params?.id]);

  return (
    <Stack
      sx={{
        py: 4,
        px: 1,
        height: "100vh",
        backgroundColor: "#1428a2",
        textAlign: "center",
        color: "white",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ py: 4 }}>
        <Typography sx={{ fontSize: "2.5rem" }}>
          Thank you for your registration!
        </Typography>
      </Box>
      <Typography>We've sent you an email to {mail}!</Typography>
      <Typography>Your mail {message}</Typography>
      <Box
        sx={{
          width: { md: "20%", xs: "60%" },
        }}
      >
        {mail ? (
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <CustomBTN text="Back to Home" />
          </Link>
        ) : (
          <CustomBTN text="Resend email verifications" />
        )}
      </Box>
    </Stack>
  );
}

export default Emailverify;
