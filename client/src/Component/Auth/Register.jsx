import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../../Api/api";
import { useAccount } from "wagmi";
import useMakeToast from "../../hooks/makeToast";
import Loading from "../../Loading/Loading";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  styled,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import {
  loginBg,
  loginPage2,
  SignPage,
  loginElipse,
  signUpLogo,
} from "../Images";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
const CustomTextField = styled(TextField)(({ theme }) => ({
  // maxWidth: check ? "100%" : "400px",
  color:"text.primery",
  width: "100%",
  fontFamily: "Roboto",
  fontWeight: "500",
  borderRadius: "5px",
  "& label.Mui-focused": {
    color: "text.primery",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "text.primery",
    },
    fontSize: { xs: "12px", md: "14px" },
  },
  background: theme.palette.mode === "light"? "#F1EEEE" :"#2e2a2a",
}));
const Register = () => {
  const makeToast = useMakeToast();
  const check = useMediaQuery("(max-width:900px)");
  const [btn, setBtn] = useState(true);
  const [toggle, setToggle] = useState(false);
  const { address } = useAccount();
  const [walletaddress, setWalletaddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Error while geting  location ... ");
    }
  };
  function showPosition(position) {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  }
  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    setWalletaddress(address);
  }, [address]);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const { username, email, password } = values;
        const obj = {
          username,
          email,
          password,
          wallet: walletaddress,
          latLng: [lat, lng],
        };

        if (!address) {
          makeToast("Please connect with Wallet", "error", 3, "Failed");
          return false;
        }
        setLoading(true);
        const data = await registerUser(obj);
        if (data?.status === "ok") {
          setLoading(false);
          makeToast(`${data?.message}`, "success", 3, "Success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
        data?.status === "error" &&
          makeToast(`${data?.message}`, "error", 3, "Failed");
        setLoading(false);
      } catch (err) {
        console.log("Error in user registration", err);
        setLoading(false);
      }
    },
  });
  return (
    <Box
      sx={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "100%  100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 9,
        minHeight: "81vh",
        px: 1,
      }}
    >
      <Loading loading={loading} />
      <Container maxWidth="lg">
        <Box position="relative " mt={5}>
          {check ? (
            ""
          ) : (
            <img
              src={loginElipse}
              alt=""
              style={{
                position: "absolute",
                top: "-1px",
                transform: "rotate(92deg)",
                right: -7,
              }}
            />
          )}
          <Grid
            container
            sx={{
              backgroundColor: "background.secondary",
              clipPath: {
                xs: "",
                md: "polygon(0 0, 94% 0, 100% 12%, 100% 100%, 4% 100%, 0 96%)",
              },
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundImage: `url(${!check ? SignPage : loginPage2})`,
                  backgroundSize: "100%  100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  px: 1,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <img src={signUpLogo} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: { xs: "15px", md: "20px" },
                      color: "#fff",
                      mt: 1,
                    }}
                  >
                    Welcome to the
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Audiowide",
                      fontSize: { xs: "28px", md: "48px" },
                      lineHeight: { xs: "35px", md: "58px" },
                      color: "#FFFFFF",
                    }}
                  >
                    Metazcubez
                  </Typography>
                  <Box
                    sx={{
                      width: "45%",
                      height: "1px",
                      bgcolor: "#fff",
                      my: 2,
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: { xs: "14px", md: "18px" },
                      color: "#FFFFFF",
                      // mt: { xs: "20px", md: "30px" },
                      width: { xs: "100%", md: "90%" },
                      textAlign: "center",
                    }}
                  >
                    Enter required details and start journey with us!
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} p={{ xs: 3, md: 8 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{ xs: "center", md: "flex-start" }}
                mt={2}
              >
                <Box
                  sx={{
                    backgroundColor: " #34D9B1",
                    clipPath:
                      "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                    p: "2px",
                  }}
                >
                  <Box
                    sx={(theme)=>({
                      top: "1px",
                      left: "1px",
                      right: "1px",
                      bottom: "1px",
                      backgroundColor:theme.palette.mode === "light"? "#ffffff" :"#2e2a2a",
                      clipPath:
                        "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                    })}
                  >
                    <Button
                      to="/login"
                      component={NavLink}
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "12px",

                        color: !btn ? "#fff" : "#34D9B1",
                        background: !btn
                          ? "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"
                          : "transparent",
                        p: { xs: "6px 20px", md: "10px 50px" },
                        borderRadius: "1px",
                      }}
                      onClick={() => setBtn(false)}
                    >
                      Login
                    </Button>
                    <Button
                      to="/register"
                      component={NavLink}
                      sx={{
                        clipPath:
                          "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                        background: btn
                          ? "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"
                          : "transparent",

                        color: btn ? "#fff" : "#34D9B1",
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "12px",
                        boxShadow: "5px 1px 7px rgba(0, 0, 0, 0.35)",
                        p: { xs: "6px 20px", md: "10px 50px" },
                        borderRadius: "1px",
                      }}
                      onClick={() => setBtn(true)}
                    >
                      Sign up
                    </Button>
                  </Box>
                </Box>
              </Box>
              <form>
                <Box display="flex" gap={3} flexDirection="column" mt={5}>
                  <CustomTextField
                    autoComplete="off"
                    id="standard-name"
                    sx={{
                      // maxWidth: check ? "100%" : "400px",
                      clipPath:
                        "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                    }}
                    placeholder="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                    }}
                    required={true}
                  />
                  <CustomTextField
                    autoComplete="off"
                    id="standard-name"
                    sx={{
                      // maxWidth: check ? "100%" : "400px",
                      clipPath:
                        "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                    }}
                    name="wallet"
                    placeholder={"Wallet"}
                    value={address}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountBalanceWalletIcon
                         sx={{ color: "text.secondary" }} 
                          />
                        </InputAdornment>
                      ),
                    }}
                    required={true}
                    readOnly
                  />
                  <CustomTextField
                    autoComplete="off"
                    id="standard-name"
                    sx={{
                      // maxWidth: check ? "100%" : "400px",
                      clipPath:
                        "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                    }}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                    }}
                    required={true}
                  />
                  <CustomTextField
                    autoComplete="off"
                    id="standard-name"
                    sx={{
                      // maxWidth: check ? "100%" : "400px",
                      clipPath:
                        "polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0 15%)",
                    }}
                    placeholder="Password"
                    name="password"
                    type={toggle ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          sx={{ cursor: "pointer" }}
                          position="start"
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          {toggle ? (
                            <LockOpenIcon
                            sx={{ color: "text.secondary" }} 
                            />
                          ) : (
                            <LockIcon sx={{ color: "text.secondary" }}  />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    required={true}
                  />
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt={6}
                >
                  <Button
                    type="submit"
                    onClick={formik.handleSubmit}
                    sx={{
                      background:
                        "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                      boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.25)",
                      borderRadius: "4px",
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#FFFFFF",
                      px: 7,
                      py: 1,
                      width: { xs: "100%", md: "45%" },
                    }}
                  >
                    SIGN UP
                  </Button>
                </Box>
              </form>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "11px",
                  color: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  my: "10px",
                }}
              >
                Register with Email Instead?
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
