import * as React from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Dialog,
  Button,
  Slide,
  Stack,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import { updateNfts } from "../../../Api/api";
import CustomBTN from "../../CustomButton/CustomBTN";
import AddIcon from "@mui/icons-material/Add";
import useMakeToast from "../../../hooks/makeToast";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
 
  width:"80%",
  mx:"auto",


};


const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const thumb = {

  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: "200px",
  boxSizing: "border-box",

};

const StyledMenuItem = styled(MenuItem)({
  backgroundColor: "background.inputbg",
  margin: "5px",
  borderRadius: "5px",
});

export default function EditProduct(props) {
  const makeToast = useMakeToast();
  const [openModal, setOpenModal] = React.useState(props?.open);
  const [files, setFiles] = React.useState([]);
  const [fileType, setFileType] = React.useState("File");
  const [NFtfile, setNftfiles] = React.useState("");
  const [inputstate, setInputstate] = React.useState([]);
  const addQuestions = () => {
    if (inputstate.length < 10) {
      setInputstate([...inputstate, { id: inputstate.length }]);
    }
  };
  const form = new FormData();
  const {
    _id,
    address,
    addressdetails,
    productTotalPrice,
    fileLink,
    description,
    name,
    mapaddress,
  } = props?.nftsDetails;

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      let ProfileType = ["jpg", "png", "jpeg"];
      let file = acceptedFiles[0];
      let fileSize = file.size / (1024 * 1024);
      const videoType = ["mov", "mp4", "avi", "wmf", "flv", "webm"];
      const result = file?.path.split(".");
      let fileType = result?.pop();
      if (!ProfileType?.includes(fileType) && !videoType?.includes(fileType)) {
        makeToast(
          `Please upload image (png, jpg,jpeg) or video`,
          "error",
          3,
          "Failed"
        );
        return false;
      }
      if (fileSize >= 20) {
        makeToast("Please choice file less then 20 MB", "error", 3, "Failed");
        return false;
      }
      setNftfiles(acceptedFiles[0]);
      if (!videoType.includes(fileType)) {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
    },
  });
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <Box sx={{width:"100%",height:"200px", display:"flex", justifyContent:"center", alignItems:'center'}}>
        <img src={file.preview}  alt=""  style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"10px"}}/>
      </Box>
    </div>
  ));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  React.useEffect(() => {
    setValue("filelink", fileLink ? fileLink : "");
    setValue("name", name);
    setValue("productTotalPrice", productTotalPrice);
    setValue("mapaddress", mapaddress);
    setValue("addressdetails", addressdetails);
    setValue("description", description);
  }, []);

  const handleClose = () => {
    setOpenModal(false);
    props.modalFunc(false);
  };

  const onSubmit = async (data, e) => {
    for (let key in data) {
      form.append(key, data[key]);
    }
    form.append("file", NFtfile);
    form.append("_id", _id);
    form.append("walletAddress", address);
    try {
      const data = await updateNfts(form);
      if (data.status === "ok") {
        makeToast("Nft Data update successfully !", "success", 3, "Success");
        setTimeout(() => {
          props.modalFunc(false);
        }, 2000);
      } else {
        makeToast(`${data?.message}`, "error", 3, "Failed");
      }
    } catch (error) {
      console.log("Nfts update error", error);
    }
  };

  return (
    <Paper>
      <Dialog
        TransitionComponent={Transition}
        open={openModal}
        onClose={() => {
          handleClose();
        }}
        maxWidth="xs"
        fullWidth
        sx={{
          "& .css-twia2z-MuiPaper-root-MuiDialog-paper": {
            borderRadius: "10px",
            background: "background.secondary",
          },
        }}
      >
        <Box p={2} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" justifyContent="end">
            <IconButton
              onClick={() => {
                handleClose();
              }}
              sx={{ float: "right", color: "text.seconary" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {fileType === "File" && (
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
             
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {files?.length > 0 ? (
                <aside style={thumbsContainer}>{thumbs}</aside>
              ) : (
                <Stack
                  alignItems="center"
                  sx={(theme) => ({
                    py: 3,
                    width: "80%",
                    mx: "auto",
                    color: "text.secondary",
                    cursor: "pointer",
                    p: 2,
                    backgroundColor: "background.inputbg",
                    border:
                      theme.palette.mode === "light"
                        ? "2px dashed #000000"
                        : "2px dashed #ffffff",
                    borderRadius: "10px",
                  })}
                  onClick={() => {
                    open();
                  }}
                >
                  <CloudUploadIcon fontSize="large" />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Browse Files
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    {NFtfile ? "File save" : "Drag and drop files here"}
                  </Typography>
                </Stack>
              )}
            </Box>
          )}

          <Box py={1}>
            <Typography sx={{ color: "text.primery" }}>Type </Typography>
            <Select
              sx={{
                height: "39px",
                borderRadius: "5px",
                backgroundColor: "background.inputbg",

                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              fullWidth
              inputProps={{
                MenuProps: {
                  MenuListProps: {},
                },
              }}
            >
              <StyledMenuItem value="File">File</StyledMenuItem>
              <StyledMenuItem value="Link">Link</StyledMenuItem>
            </Select>
          </Box>
          {fileType === "Link" && (
            <Box py={1}>
              <Typography>Link </Typography>
              <InputBase
                placeholder="Enter link"
                type="text"
                sx={{
                  backgroundColor: "background.inputbg",
                  width: "100%",
                  borderRadius: "5px",
                  px: 2,
                  py: 0.5,
                }}
              />
              {/* {errors.filelink && (
                <Typography sx={{ fontSize: "14px", color: "red" }}>
                  This field is required *
                </Typography> */}
              {/* )} */}
            </Box>
          )}
          <Box py={1}>
            <Typography>Title </Typography>
            <InputBase
              {...register("name", { required: true })}
              placeholder="Enter title"
              type="text"
              sx={{
                backgroundColor: "background.inputbg",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
            {errors.name && (
              <Typography sx={{ color: "red", fontSize: "14px" }}>
                This field is required *
              </Typography>
            )}
          </Box>
          <Box py={1}>
            <Typography>Price</Typography>
            <InputBase
              {...register("productTotalPrice", { required: true })}
              placeholder="Enter Price"
              type="text"
              sx={{
                backgroundColor: "background.inputbg",
                color: "gray",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
            {errors.productTotalPrice && (
              <Typography sx={{ color: "red", fontSize: "14px" }}>
                This field is required *
              </Typography>
            )}
          </Box>
          <Box py={1}>
            <Typography>Description</Typography>
            <InputBase
              {...register("description", { required: true })}
              placeholder="Enter description"
              type="text"
              sx={{
                backgroundColor: "background.inputbg",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
            {errors.description && (
              <Typography sx={{ color: "red", fontSize: "14px" }}>
                This field is required *
              </Typography>
            )}
          </Box>
          <Box py={1}>
            <Typography>Address</Typography>
            <InputBase
              {...register("mapaddress", { required: true })}
              placeholder="Enter address"
              type="text"
              sx={{
                backgroundColor: "background.inputbg",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
            {errors.mapaddress && (
              <Typography sx={{ color: "red", fontSize: "14px" }}>
                This field is required *
              </Typography>
            )}
          </Box>
          <Box py={1}>
            <Typography>Address details *</Typography>
            <InputBase
              {...register("addressdetails", { required: true })}
              multiline
              minRows={2}
              placeholder="Enter address details"
              type="text"
              sx={{
                backgroundColor: "background.inputbg",
                width: "100%",
                borderRadius: "5px",
                px: 2,
                py: 0.5,
              }}
            />
          </Box>
          {inputstate?.length > 0
            ? inputstate?.map(({ id }, index) => {
                return (
                  <Box py={1} key={index + Math.random() * 10}>
                    <Typography>Metadata *</Typography>
                    <InputBase
                      {...register(`matadata${id}`)}
                      multiline
                      minRows={2}
                      placeholder="Enter matadata"
                      type="text"
                      sx={{
                        backgroundColor: "background.inputbg",
                        width: "100%",
                        borderRadius: "5px",
                        px: 2,
                        py: 0.5,
                      }}
                    />
                  </Box>
                );
              })
            : ""}
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              addQuestions();
            }}
          >
            <CustomBTN text="Add MetaData" />
          </Box>
          <Box py={1} display="flex" justifyContent="center">
            <Button
              type="submit"
              sx={{
                mt: 2,
                fontSize: "15px",
                width: "100%",
                borderRadius: "5px",
                background:
                  " linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                color: "white",
                fontWeight: 700,
                boxShadow: 2,
              }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Paper>
  );
}

// some thin raddy
