import promoModal from "../../modal/promos.js";
const deletePromos = async (req, res) => {
    try {
        let foundPromo = await promoModal.deleteOne({ _id: req.params.id })
        if (foundPromo)
            return res.status(202).json({ data: true, message: "data successfully deleted", });
    } catch (err) {
        console.log(err);
        res.status(201).json({
            message: "there is an error ",
            status: "Failed",
        });
    }
};
export default deletePromos;