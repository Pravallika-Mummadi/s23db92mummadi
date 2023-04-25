const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
    Books_price: {
        type:Number,
    min: [3,"min value is 3"],
    max: [1000,"max value is 1000"]
},
    Books_category: {
        type: String,

    },
    Books_name: {
        type: String,
        required : [true,"Books Name is required"]
    }

})
module.exports = mongoose.model("Book", BookSchema)