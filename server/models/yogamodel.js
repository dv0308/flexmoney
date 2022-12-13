const mongoose = require("mongoose")

const YogaSchema = new mongoose.Schema(
    {
    name : { type: String, required: true },
    age : {type : Number, required: true},
    batch : { type: String, required: true },
},
{timestamps: true}, 
)
module.exports = mongoose.model("yoga", YogaSchema);

