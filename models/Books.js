const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
    Books_price: Number,
    Books_category: {
        type: String,

    },
    Books_name: {
        type: String,

    }

})
module.exports = mongoose.model("Book", BookSchema)