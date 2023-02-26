import mongoose, { Schema } from "mongoose";
const walletPendingTransaction = new Schema({
    nftId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    walletTransactionHash: {
        type: String,
        required: true,
    },
    transactionStatus: {
        type: Boolean,
        required: true,
    },
});
let WalletPendingTransactionsModal = mongoose.model("walletPendingTransactions", walletPendingTransaction);
export default WalletPendingTransactionsModal;