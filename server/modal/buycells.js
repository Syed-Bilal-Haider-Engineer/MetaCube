import mongoose, { Schema } from "mongoose";
const cell = new Schema({
  MinType: {
    type: String,
    default: "",
  },
  nftId: {
    type: Number,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  attributes: [],
  capturesImage: { type: String, default: "" },
  image: {
    type: String,
    default: "",
  },
  file: {
    type: String,
    default: "",
  },
  filelink: {
    type: String,
    default: "",
  },
  mapaddress: { type: String, default: "" },
  addressdetails: { type: String, default: "" },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  lang: { type: String },
  long: { type: String },
  contractId: { type: String, default: "" },
  tilePrice: { type: String, required: true },
  addedAt: {
    type: Date,
    default: new Date(),
  },
  nftTokenUri: {
    type: String,
    default: "",
  },
  address: { type: String },
  tokenID: { type: String },
  customerId: { type: String },
  paidStatusStripe: { type: Boolean },
  productTotalPrice: { type: Number },
  paidStatusContract: { type: Boolean },
  paidWalletStatus: { type: Boolean, default: false },
  paidByWallet: { type: Boolean },
  likesList: [],
  favoritesList: [],
  howManyViews: [],
  howManyVotes: [],
  follows: [],
  metadata: { type: Array, default: "" },
});
let cellModal = mongoose.model("buyCells", cell);
export default cellModal;
