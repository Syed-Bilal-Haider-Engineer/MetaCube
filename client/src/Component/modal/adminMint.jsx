import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, InputBase, Paper, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { payWithAdmin, checkuser } from "../../Api/api";
import { parseUnits } from "@ethersproject/units";
import usdAbi from "../../Connectivityas/ABI/ContractABI.json";
import { CallContract } from "../../Connectivityas/Environement";
import useMakeToast from "../../hooks/makeToast";
import {
  useSendTransaction,
  usePrepareSendTransaction,
  useContractRead,
  useBalance,
} from "wagmi";
import { useAccount } from "wagmi";
import { WalletContextProvider } from "../../ContextAPI/CreateContext";
function AdminModal({
  ceilDetailsstate,
  dataValue,
  handleClose,
  setBLoading,
  openModal,
}) {
  // console.log(props?.ceilDetailsstate, "landModal ceil");
  const handleCloseFun = () => {
    handleClose(false);
  };
  const makeToast = useMakeToast();
  const { address } = useAccount();
  const [specifcAddress, setSpecificAddress] = React.useState("");
  let fixedDataValue = parseFloat(dataValue).toFixed(6);
  const parseValue = parseUnits(fixedDataValue.toString(), 6);
  const {
    data: newData,
    isError: readEror,
    isLoading: loadingBnb,
  } = useContractRead({
    address: CallContract,
    abi: usdAbi,
    functionName: "usdtToBNB",
    args: [parseValue],
  });
  const { data: get_balance } = useBalance({
    address: address,
  });
  let balance = get_balance && +get_balance?.formatted;
  const { config } = usePrepareSendTransaction({
    request: {
      to: "0xbb17CDC95b626c76E934Df7bF05fEaEFcEa9C61E",
      value: newData,
    },
    onError(data) {
      setBLoading(false);
    },
  });

  const { data, isError, isSuccess, sendTransaction } =
    useSendTransaction(config);
  const init = React.useCallback(async () => {
    if (!isError && isSuccess) {
      payWithAdmin(
        data,
        isError,
        ceilDetailsstate,
        +parseValue,
        setBLoading,
        specifcAddress
      );
    }
  }, [data, isError, isSuccess, ceilDetailsstate]);
  React.useEffect(() => {
    init();
  }, [init, ceilDetailsstate]);

  const handleAddress = (event) => {
    const value = event.target.value.trim();
    if (value) {
      setSpecificAddress(value);
    }
  };

  const submitHandler = async () => {
    if (!specifcAddress)
      return makeToast("Please enter Address", "error", 3, "Failed");
    if (+balance < 0)
      return makeToast("insuficient Balance.", "error", 3, "Failed");
    const data = await checkuser(specifcAddress);
    if (data?.status === "ok") {
      await sendTransaction();
    }
    if (data?.status === "error") {
      makeToast("User is not register.", "error", 3, "Failed");
    }
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseFun}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: "absolute",
            top: { xs: "50%", md: "40%" },
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "280px", sm: "400px", md: "500px" },
            boxShadow: 24,
            p: { xs: 1, sm: 2, md: 4 },
            borderRadius: "10px",
            backgroundColor: "background.secondary",
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
              sx={{ fontSize: { xs: "15px", sm: "16px", md: "20px" } }}
            >
              NFT Mint to Specific Address By Admin
            </Typography>
            <Box sx={{ width: "10%" }}>
              <IconButton onClick={handleCloseFun}>
                <CloseIcon
                  sx={{
                    fontSize: "33px",
                    background:
                      "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
                    "&:hover": {
                      backgroundColor: "#4a148c",
                    },
                    opacity: "",
                    padding: "8px",
                    borderRadius: "8px",
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
              background:
                "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                <InputBase
                  placeholder="Enter Address"
                  value={specifcAddress}
                  onChange={handleAddress}
                  type="text"
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    color: "black",
                    borderRadius: "5px",
                    px: 2,
                    py: 0.5,
                  }}
                />
                <Box
                  sx={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "5px",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: 2,
                    fontSize: { xs: "10px", md: "15px" },
                    color: "white",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                  onClick={submitHandler}
                >
                  APPLY
                </Box>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </div>
  );
}

export default React.memo(AdminModal);
