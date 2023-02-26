// import { client } from "./Auth.js";
// import { Buffer } from "buffer";
// import { useContractWrite, usePrepareContractWrite } from "wagmi";
// import ContractABI from "./ABI/ContractABI.json";
// import { parseUnits } from "@ethersproject/units";
// export const mintHandle = async (address) => {
//   try {
//     let singleNFT = {
//       image: `http://localhost:8000/Snapshots/140ab411-7c65-486b-8f3c-469edd170779.png`,
//       name: "first nft",
//       description: "This is the Spirtual ArtNft",
//       type: "art",
//       qType: "single",
//       account: address,
//     };
//     const nftHash = await client.add(Buffer.from(JSON.stringify(singleNFT)));
//     const { config } = usePrepareContractWrite({
//       address: address,
//       abi: ContractABI,
//       functionName: "feed",
//     });
//     const { data, isLoading, isSuccess, write } = useContractWrite(config);
//     return nftHash;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
