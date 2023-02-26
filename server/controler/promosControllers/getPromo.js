import promoModal from "../../modal/promos.js";
const getPromos = async (req, res) => {
    try {
        let foundPromo = await promoModal.find({})
        if (foundPromo) {
            return res.status(202).json({ data: foundPromo, status: 'ok', message: "data send successfully", });
        }
    } catch (err) {
        console.log(err);
        res.status(201).json({
            message: "there is an error ",
            status: "Failed",
        });
    }
};
export default getPromos;