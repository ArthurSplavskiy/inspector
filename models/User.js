const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    payers: [{ type: Types.ObjectId, ref: 'Payer' }]
})

module.exports = model('User', schema)