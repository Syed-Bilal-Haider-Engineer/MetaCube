import mongoose, { Schema } from "mongoose";
const unpaidTransaction = new Schema({
  nftId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  transactionHash: {
    type: String,
    required: true,
  },
  transactionStatus: {
    type: Boolean,
    required: true,
  },
});
let pendingTransactionsModal = mongoose.model("pendingTransactions", unpaidTransaction);
export default pendingTransactionsModal;
