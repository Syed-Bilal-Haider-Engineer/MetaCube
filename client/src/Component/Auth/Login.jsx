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
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
  loginBg,
  logoLogin,
  loginPage,
  loginPage2,
  loginElipse,
} from "../Images";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../../Api/api";
import { useDispatch } from "react-redux";
import { Adduser } from "../../Redux/Reducer";
import Loading from "../../Loading/Loading";
import { useState } from "react";
import { useAccount } from "wagmi";
import useMakeToast from "../../hooks/makeToast";
import { ColorModeContext } from "../../theme";
const validationSchema = yup.object({
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

const Login = () => {
  const makeToast = useMakeToast();
  const check = useMediaQuery("(max-width:900px)");
  const [btn, setBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { address } = useAccount();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const loginHandle = async (values) => {
    setLoading(true);
    try {
      const data = await loginUser(values);
      if (data?.status === "ok") {
        dispatch(Adduser(data?.data));
        makeToast(`${data?.message}`, "success", 3, "Success");
        localStorage.setItem("maptoken", data.token);
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      data?.status === "error" &&
        makeToast(`${data?.message}`, "error", 3, "Success");
      setLoading(false);
    } catch (err) {
      console.log("Error in login User", err);
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      loginHandle(values);
    },
  });
  return (
    <>
      <Loading loading={loading} />
      <Box
        sx={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "100%  100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: 9,
          minHeight: "81vh",
        }}
      >
        <Container maxWidth="lg">
          <Box position="relative" mt={5}>
            {check ? (
              ""
            ) : (
              <img
                src={loginElipse}
                alt=""
                style={{
                  position: "absolute",
                  top: "5px",
                  transform: "rotate(-5deg)",
                  width: "80px",
                  left: "-5px",
                }}
              />
            )}
            <Grid
              container
              bgcolor="#fff"
              sx={{
                clipPath: {
                  xs: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  md: "polygon(7% 0, 100% 0, 100% 93%, 95% 100%, 0 100%, 0 16%)",
                },
                flexDirection: { xs: "column-reverse", md: "row" },

                backgroundColor: "background.secondary",
              }}
            >
              <Grid item xs={12} sm={12} md={6} p={{ xs: 3, md: 8 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { xs: "15px", md: "20px" },
                        lineHeight: { xs: "14px", md: "8px" },
                      }}
                    >
                      Welcome to the
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Audiowide",
                        fontSize: { xs: "27px", md: "48px" },
                        background:
                          "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Metazcubez
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      src={logoLogin}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  onClick={() => {
                    !address
                      ? makeToast(
                          "please connect with wallet !",
                          "error",
                          3,
                          "Success"
                        )
                      : loginHandle({ address });
                  }}
                  sx={{
                    width: "25%",
                    height: "2px",
                    bgcolor: "#00C5BF",
                    my: 2,
                  }}
                ></Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  width="100%"
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
                        component={NavLink}
                        to="/login"
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
                          p: { xs: "6px 20px", md: "10px 50px" },
                          boxShadow: "5px 1px 7px rgba(0, 0, 0, 0.35)",
                          borderRadius: "1px",
                        }}
                        onClick={() => setBtn(true)}
                      >
                        Login
                      </Button>
                      <Button
                        to="/register"
                        component={NavLink}
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: 600,
                          fontSize: "12px",
                          color: !btn ? "#fff" : "#34D9B1",
                          borderRadius: "1px",
                          background: !btn
                            ? "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"
                            : "transparent",
                          p: { xs: "6px 20px", md: "10px 50px" },
                        }}
                        onClick={() => setBtn(false)}
                      >
                        Sign up
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                  }}
                >
                  <CustomTextField
                    autoComplete="off"
                    id="standard-email"
                    sx={{
                      clipPath:
                        "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                      margin: "40px 0px",
                      color: "text.primery",
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
                  />{" "}
                  <CustomTextField
                    autoComplete="off"
                    id="standard-password"
                    sx={{
                      clipPath:
                        "polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0 15%)",
                    }}
                    type={toggle ? "text" : "password"}
                    name="password"
                    placeholder="Password"
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
                          type="password"
                          position="start"
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            setToggle(!toggle);
                          }}
                        >
                          {toggle ? (
                            <LockOpenIcon
                              sx={{ color: "text.secondary" }}
                            />
                          ) : (
                            <LockIcon sx={{  color: "text.secondary" }} />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    required={true}
                  />
                  {/* <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "11px",
                      color: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "90%",
                      my: "10px",
                    }}
                  >
                    Forget Password?
                  </Typography> */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={6}
                  >
                    <Button
                      type="submit"
                      sx={{
                        background:
                          "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                        boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.25)",
                        borderRadius: "4px",
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#FFFFFF",
                        px: 6,
                        py: 1,
                        width: { xs: "100%", md: "" },
                      }}
                    >
                      Login
                    </Button>
                  </Box>
                </form>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    backgroundImage: `url(${!check ? loginPage : loginPage2})`,
                    backgroundSize: "100%  100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    py: { xs: 10, md: 0.1 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Audiowide",
                      fontSize: { xs: "30px", md: "48px" },
                      color: "#FFFFFF",
                    }}
                  >
                    Welcome back
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: { xs: "14px", md: "18px" },
                      lineHeight: "24px",
                      color: "#FFFFFF",
                      width: { xs: "100%", md: "80%" },
                      textAlign: "center",
                    }}
                  >
                    To Keep Connected With Us, Please Enter Your Email Or
                    <span style={{ fontWeight: "bolder" }}>
                      Login With Wallet
                    </span>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
