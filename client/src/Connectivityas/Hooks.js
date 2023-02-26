import { useContract, useProvider } from "wagmi";
import { CallContract } from "./Environement";
import ContractABI from "./ABI/ContractABI.json";
export function MapContractHooks() {
  const provider = useProvider({
    chainId: 5,
  });
  const contract = useContract({
    address: CallContract,
    abi: ContractABI,
    signerOrProvider: provider,
  });
  return contract;
}
