import mongoose, { Schema } from "mongoose";
const promoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    offers: {
        type: String,
        required: true
    }
});
let promoModal = mongoose.model("promo", promoSchema);
export default promoModal ;
