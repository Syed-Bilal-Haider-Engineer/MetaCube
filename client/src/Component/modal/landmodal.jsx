import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Paper, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
function LandModal(props) {
  const [textcopy, setTextCopy] = useState({
    value: window.location.href,
    copied: false,
  });

  // const handleCloseFun = () => {
  //   props.handleClose(false);
  // };

  return (
    <div>
      <Modal
        open={props.open}
        // onClose={handleCloseFun}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: "absolute",
            top: { xs: "50%", md: "40%" },
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "280px", sm: "400px", md: "600px" },
            boxShadow: 24,
            p: { xs: 1, sm: 2, md: 4 },
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h5"
              fontWeight="bold"
              sx={{ fontSize: { xs: "15px", sm: "20px", md: "40px" } }}
            >
              SHARE LAND
            </Typography>
            <Box sx={{ width: "50%" }}>
              <IconButton>
                <CloseIcon
                  sx={{
                    fontSize: "35px",
                    backgroundColor: "#6600CC",
                    "&:hover": {
                      backgroundColor: "#4a148c",
                    },
                    opacity: "",
                    padding: "8px",
                    borderRadius: "10px",
                    color: "white",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              p: { xs: 1, md: 2 },
              my: { xs: 0, md: 2 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "start",
              background: "linear-gradient(90deg, #6809BB 0%, #C90EE0 100%)",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "180px" } }}>
              <img
                src="https://s.alicdn.com/@sc04/kf/H7bdf4dd1a5c34ccd8c0bd7f6d14855a7I.png_250x250xz.jpg"
                alt=""
                srcSet=""
                style={{
                  position: "cover",
                  width: "100%",
                  height: "160px",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box sx={{ mx: 2 }}>
              <Stack spacing={1}>
                <Typography sx={{ color: "text.primery" }}>Land</Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ my: { md: 1 }, color: "white" }}
                >
                  Land Alcaudete mid-age castle & church
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon sx={{ color: "white" }} />
                  <Typography fontWeight="bold" sx={{ color: "text.primery" }}>
                    Current owner
                  </Typography>
                  <Typography sx={{ color: "white" }}>thecrow</Typography>
                </Box>
                <Typography sx={{ color: "text.primery" }}>
                  {" "}
                  Purchased for
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "white" }}
                >
                  {" "}
                  {
                    / {productTotalPrice ? productTotalPrice : "Product price"} /
                  }
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              mx: "auto",
            }}
          >
            <Typography variant="body2" fontWeight="bold">
              SHARE WITH
            </Typography>
            <Box>
              <FacebookRoundedIcon sx={{ mr: 2 }} />
              <TwitterIcon />
            </Box>
          </Box>
          <Typography variant="body2" sx={{ mt: 2 }}>
            SHARE WITH LINK
          </Typography>
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "linear-gradient(90deg, #6809BB 0%, #C90EE0 100%)",
              color: "white",
              px: { xs: 1, md: 2 },
              borderRadius: "5px",
              cursor: "pointer",
            })}
          >
            <CopyToClipboard
              style={{ width: "100%" }}
              text={textcopy.value}
              onCopy={() => setTextCopy({ copied: true })}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column-reverse", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "start", sm: "center" },
                  p: { xs: 1, md: 2 },
                }}
              >
                <Typography>{textcopy.value}</Typography>
                <ContentCopyIcon sx={{ color: "white" }} />
              </Box>
            </CopyToClipboard>

            {textcopy.copied ? (
              <span style={{ color: "red" }}>Copied.</span>
            ) : null}
          </Box>
        </Paper>
      </Modal>
    </div>
  );
}

export default React.memo(LandModal);
