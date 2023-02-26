import React from "react";
export const WalletContextProvider = React.createContext();
function ContextAPI({ children }) {
  const [address, setWalletaddress] = React.useState("");
  const [ceilState, setCeilstate] = React.useState("");
  function walletAddress(address) {
    setWalletaddress(address);
  }
  return (
    <WalletContextProvider.Provider
      value={{ walletAddress, address, ceilState, setCeilstate }}
    >
      {children}
    </WalletContextProvider.Provider>
  );
}

export default ContextAPI;
