import promoModal from "../../modal/promos.js";
const singlePromo = async (req, res) => {
    try {
        let foundPromo = await promoModal.findOne({ code: `${req.params.promoId}` })
        if (foundPromo)
            return res.status(202).json({ data: foundPromo, message: "this promo code is valid", });
        else
            return res.status(202).json({ data: false, message: "this Promo is not valid", });
    } catch (err) {
        console.log(err);
        res.status(201).json({
            message: "there is an error ",
            status: "Failed",
        });
    }
};
export default singlePromo;