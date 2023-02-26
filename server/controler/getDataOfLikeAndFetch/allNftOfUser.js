import User from "../../modal/users.js";
import cellModal from "../../modal/buycells.js";
export const allNftsOnScroll = async (req, res) => {
    try {
        const { id, page } = req.query;
        const limit = 20;
        const response = await cellModal.find({ user: id }).skip((page - 1) * limit).limit(limit).exec();
        if (response) {
            res.status(202).send({
                status: "success",
                data: response
            })
        }
    } catch (err) {
        console.log(err)
    }
}