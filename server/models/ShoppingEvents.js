const { Schema } = require('mongoose');

const ShoppingEventSchema = new Schema({
    eventTitle: {
        type: String,
        required: true,
    },
    eventCategory: {
        type: String,
        required: false,
    },
    eventSubCatagory: {
        type: String,
        required: false,
    },
    eventValue: {
        type: Number,
        required: true,
    }
})

module.exports = ShoppingEventSchema;