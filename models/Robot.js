const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let robotSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: 'robots'
})

module.exports = mongoose.model('Robot', robotSchema)
