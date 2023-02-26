import mongoose from "mongoose";
//file
const connectDB = async (url) => {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDB;
