import mongoose, { Schema } from "mongoose";
const user = new Schema({
  username: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  wallet: { type: String, default: "" },
  latLng: Array,
  profileImage: {
    type: String,
    default: "",
  },
  addedAt: {
    type: Date,
    default: new Date(),
  },
  role: {
    user: {
      type: String,
      default: 'user'
    },
    admin: {
      type: String,
    }
  },
  verified: {
    type: Boolean,
    default: false,
  },
  banner: { type: String, default: "" },
  likesList: [],
  favoritesList: [],
  instagram: {
    type: String,
    default: 'https://www.instagram.com/'
  },
  facebook: {
    type: String,
    default: 'https://www.facebook.com/'
  },
  linkdin: {
    type: String,
    default: "https://www.linkedin.com/"
  },
  twitter: {
    type: String,
    default: 'https://twitter.com/'
  },
  follows: [],
});
let userModal = mongoose.model("user", user);
export default userModal;
