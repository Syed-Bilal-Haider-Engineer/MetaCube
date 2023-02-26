import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Dialog,
  Slide,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Profile from "../../../images/auther.PNG";
import earth from "../../../images/earth.png";
import { URL } from "../../../URL";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Adduser } from "../../../Redux/Reducer";
import CustomBTN from "../../CustomButton/CustomBTN";
import {
  profilestyle,
  CameraIcon,
  bannerstyle,
  inputstyle,
  editProfile,
} from "./Profilecss/Customstyle";
import useMakeToast from "../../../hooks/makeToast";
import hllo from "../../../images/profile.jpg"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function EditProfile(props) {
  const makeToast = useMakeToast();
  const dispatch = useDispatch();
  const { ceilSlice } = useSelector((state) => state);
  const { userdetails } = ceilSlice;
  const [name, setName] = useState(userdetails?.name);
  const [facebook, setFacebook] = useState(userdetails?.facebook);
  const [instagram, setInstagram] = useState(userdetails?.instagram);
  const [twitter, setTwitter] = useState(userdetails?.twitter);
  const [linkedin, setLinkedin] = useState(userdetails?.linkdin);
  const [openModal, setOpen] = React.useState(props.open);
  const [userUpdatePicture, setuserPicture] = React.useState({
    userProfile: "",
    userHeader: "",
  });
  const [base64URL, setBaseURL] = React.useState({
    profileBase64: "",
    headerBase64: "",
  });
  let formdata = new FormData();
  const handleClose = () => {
    setOpen(false);
    props.modalFunc(false);
  };
  const updateUserProfile = async (formdata, headerfile) => {
    let updatedata;
    try {
      if (headerfile) {
        let { data } = await axios.put(`${URL}/updateBanner`, formdata);
        updatedata = data;
      } else {
        let { data } = await axios.put(`${URL}/updateProfile`, formdata);

        updatedata = data;
      }
      if (updatedata?.status === "ok") {
        dispatch(Adduser(updatedata));
        makeToast("user profile update successfully", "success", 3, "Success");
      }
      setuserPicture({ userProfile: "", userHeader: "" });
      !headerfile && setName("");
      setBaseURL({
        profileBase64: "",
        headerBase64: "",
      });
      updatedata?.status === "error" &&
        makeToast(`${updatedata?.message}`, "error", 3, "Failed");
      !headerfile && handleClose();
    } catch (error) {
      console.log("update profile error", error);
    }
  };
  function fileHandle(event) {
    let name = event.target.name;
    let file = event.target.files[0];
    let ProfileType = ["jpg", "png", "jpeg"];
    const result = file?.name?.split(".");
    let fileType = result?.pop();
    if (!ProfileType.includes(fileType)) {
      makeToast(`Please upload image (png, jpg,jpeg)`, "error", 3, "Failed");
      return false;
    }
    let fileSize = file.size / (1024 * 1024);
    if (fileSize >= 2 && !name) {
      makeToast(`image is grater than 2MB`, "error", 3, "Failed");
      return false;
    }
    if (fileSize >= 5 && name) {
      makeToast(`image is grater than 5MB`, "error", 3, "Failed");
      return false;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (name === "headerfile") {
        setBaseURL({ ...base64URL, headerBase64: reader?.result });
        setuserPicture({ ...userUpdatePicture, userHeader: file });
        formdata.append("file", file);
        formdata.append("id", userdetails?.id);
        let headerfile = "headerfile";
        updateUserProfile(formdata, headerfile);
      } else {
        setuserPicture({ ...userUpdatePicture, userProfile: file });
        setBaseURL({ ...base64URL, profileBase64: reader?.result });
      }
    };
  }
  //....Edite user profile handle, send data using by formdata, update name and user profile,
  // email and wallet is read only
  const onEditeHandle = async () => {
    formdata.append("file", userUpdatePicture?.userProfile);
    formdata.append("username", name);
    formdata.append("facebook", facebook);
    formdata.append("instagram", instagram);
    formdata.append("twitter", twitter);
    formdata.append("linkdin", linkedin);
    formdata.append("id", userdetails?.id);
    updateUserProfile(formdata);
  };
  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        open={openModal}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .css-twia2z-MuiPaper-root-MuiDialog-paper": {
            borderRadius: "10px",
          },
        }}
      >
        <Box p={2}>
          <Typography
            align="center"
            sx={{
              backgroundImage:
                "linear-gradient(90deg, #6E08C6 18.7%, #CA0FDF 72.33%)",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
            }}
          >
            Edit Profile
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            sx={{
              border: "2px solid black",
              height: "120px",
              position: "relative",
            }}
          >
            {userdetails?.banner || base64URL?.headerBase64 ? (
              <img
                src={
                  base64URL?.headerBase64  ? base64URL?.headerBase64 : `${URL}/upload/${userdetails?.banner }`
                 
                }
                alt="not found"
                style={bannerstyle}
              />
            ) : (
              <img src={earth} alt="not found" style={bannerstyle} />
            )}
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              style={CameraIcon}
              sx={{ right: "10px" }}
            >
              <input
                hidden
                accept="image/*"
                type="file"
                name="headerfile"
                onChange={fileHandle}
              />
              <PhotoCamera sx={{ fontSize: "20px" }} />
            </IconButton>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 30%)",
              }}
            >
              <Box sx={{ position: "relative" }}>
                {userdetails?.profileImage || base64URL?.profileBase64 ? (
                  <img
                    src={
                      base64URL?.profileBase64? base64URL?.profileBase64: `${URL}/upload/${userdetails?.profileImage}`
                    }
                    // srcset="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    
                    style={editProfile}
                  />
                ) : (
                  <img src={Profile} alt="not found" style={editProfile} />
                )}

                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  style={CameraIcon}
                  sx={{
                    right: "-5px",
                  }}
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    name="file"
                    onChange={fileHandle}
                  />
                  <PhotoCamera sx={{ fontSize: "20px" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box mt={8} py={1}>
            <Typography>User Name</Typography>
            <InputBase
              placeholder="Enter user name"
              type="text"
              value={name}
              style={inputstyle}
              sx={{ backgroundColor: "background.inputbg" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Box>
          <Box py={1}>
            <Typography>Wallet</Typography>
            <InputBase
              placeholder="Enter your Wallet"
              type="text"
              value={userdetails?.walletAddress}
              readOnly
              style={inputstyle}
              sx={{ backgroundColor: "background.inputbg" }}
            />
          </Box>
          <Box py={1}>
            <Typography>Email</Typography>
            <InputBase
              placeholder="Enter your email"
              type="email"
              value={userdetails?.email}
              readOnly
              style={inputstyle}
              sx={{ backgroundColor: "background.inputbg" }}
            />
          </Box>
          <Box py={1}>
            <Typography>Twitter</Typography>
            <InputBase
              placeholder="Enter your twitter address"
              type="twitter"
              value={twitter}
              style={inputstyle}
              sx={{ backgroundColor: "background.inputbg" }}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </Box>
          <Box py={1}>
            <Typography>Instagram</Typography>
            <InputBase
              placeholder="Enter your Instagram address"
              type="twitter"
              value={instagram}
              style={inputstyle}
              sx={{ backgroundColor: "background.inputbg" }}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </Box>
          <Box py={1}>
            <Typography>Facebook</Typography>
            <InputBase
              placeholder="Enter your Facebook address"
              type="twitter"
              value={facebook}
              style={inputstyle}
              sx={{ backgroundColor: "background.inputbg" }}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </Box>
          <Box py={1}>
            <Typography>Linkdin</Typography>
            <InputBase
              placeholder="Enter your Linkdin address"
              type="twitter"
              value={linkedin}
              style={inputstyle}
              sx={{ backgroundColor: "background.inputbg" }}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </Box>
          <Box py={1} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box onClick={onEditeHandle} sx={{ width: "45%" }}>
              <CustomBTN text="save" />
            </Box>
            <Box onClick={handleClose} sx={{ width: "45%" }}>
              <CustomBTN text="Cancel" />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
