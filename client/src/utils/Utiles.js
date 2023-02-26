
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal, Web3Button } from "@web3modal/react";
import {
  configureChains,
  createClient,
  WagmiConfig,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useAccount,
} from "wagmi";

import { arbitrum, mainnet, polygon, goerli, bsc, bscTestnet } from "wagmi/chains";

const chains = [bscTestnet];
// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider(
    { projectId: "03d8051880f6b1fcc66bb3961bb68ff0" },
    {
      options: {
        qrcode: true,
        rpc: {
          97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        },
      },
    }
  ),
]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});
// Web3Modal Ethereum Client
export const ethereumClient = new EthereumClient(wagmiClient, chains);
