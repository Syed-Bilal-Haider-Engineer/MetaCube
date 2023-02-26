import "dotenv/config";
import { Abi } from "../Abi/abimap.js";
import ethers from "ethers";
import { Contract } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";
import { MaxUint256 } from "@ethersproject/constants";
import { CONTRACT_ADDRESS, KEY } from "../environment/index.js";
const provider = new ethers.providers.JsonRpcProvider(KEY);
const signerEth = new ethers.Wallet(process.env.ADMIN_KEY, provider);
const bridgeEth = new Contract(CONTRACT_ADDRESS, Abi, signerEth);
const gasEstimationForAll = async (fn, data) => {
    const estimateGas = await fn(...data, MaxUint256).catch(() => {
        return fn(...data);
    });
    return calculateGasMargin(estimateGas);
};

function calculateGasMargin(value) {
    return +(
        (value * BigNumber.from(10000).add(BigNumber.from(1000))) /
        BigNumber.from(10000)
    ).toFixed(0);
}

export const adminTransaction = async (address, nftTokenUri) => {
    try {
        let data = [address, nftTokenUri];
        let fn = await bridgeEth.estimateGas.safeMint;
        const tx = await bridgeEth.safeMint(...data, {
            gasLimit: gasEstimationForAll(fn, data),
        });
        await tx.wait();
        let receipt = null;
        while (receipt === null) {
            receipt = await provider.getTransactionReceipt(tx.hash);
            if (receipt?.status) {
                return {
                    transaction: "successful",
                    trx: true,
                    message: receipt?.status,
                };
            }
        }
    } catch (err) {
        return { transaction: "Failed", trx: false, err: err };
    }
};
