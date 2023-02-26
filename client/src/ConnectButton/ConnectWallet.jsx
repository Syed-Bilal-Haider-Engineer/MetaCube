import React from "react";
import { ConnectKitButton } from "connectkit";
import { Button } from "@mui/material";
import { WalletContextProvider } from "../ContextAPI/CreateContext";
import ConnectionModal from "../Component/walletModal/modal";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
const ConnectWallet = () => {
  const [setAddress, setAddressState] = React.useState();
  const [connectModal, setConnectModal] = React.useState(false);
  // const { walletAddress, address } = React.useContext(WalletContextProvider);
  const { isConnected, address } = useAccount();
  const [loading, setLoading] = React.useState(false)
  const { open } = useWeb3Modal();
  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  // const toggleConnectModal = () => {
  //   setConnectModal(!connectModal);
  // };

  return (

    <>

      <Button
        onClick={onOpen}
        sx={{
          // position: "absolute",
          // top: "10px",
          // right: "50px",
          width: "150px",
          height: "40px",
          padding: "5px",
          float: "right",
          color: "white",
          background:
            "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",
          zIndex: 1,
          "&:hover": {
            background:
              "linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"
          },
        }}
      >
        {isConnected
          ? address.slice(0, 4) + "..." + address.slice(-4)
          : " Connect"}
      </Button>
    </>
  );
};

export default ConnectWallet;
