import promoModal from "../../modal/promos.js";
const promoAdd = async (req, res) => {
    try {
        const code = req.body?.code;
        let foundPromo = await promoModal.findOne({
            code: `${code}`
        })
        if (foundPromo) {
            return res.status(202).json({ status: 'exist', message: "This Promo is already exist", });
        } else {
            await promoModal.create(req.body);
            res.status(202).json({ status: 'ok', message: "Added Promo successfully", });
        }
    } catch (err) {
        console.log(err);
        res.status(201).json({
            message: "there is an error ",
            status: "Failed",
        });
    }
};
export default promoAdd;