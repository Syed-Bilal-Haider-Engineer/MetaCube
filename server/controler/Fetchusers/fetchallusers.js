import userModal from "../../modal/users.js";
export const fetchalluser = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const count = await userModal.countDocuments();
    const users = await userModal
      .find()
      .select("-password")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    console.log("error paginations");
  }
};

// export const fetchalluser = async (req, res, next) => {
//   try {
//     const allusers = await userModal.find().select("-password");
//     res.status(201).json(allusers);
//   } catch (error) {
//     console.log("error user create", error);
//
//   }
// };
