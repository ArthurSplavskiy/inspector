const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    payerCode: {type: Number, required: true, unique: true},
    payerName: {type: String, required: true},
    payerType: {type: String, required: true},
    payerTax: {type: String, required: true},
    payerIncome: {type: String, required: true},
    payerPeriod: {type: Date, required: true},
    payerPhone: {type: String, required: true},
    payerEmail: {type: String, required: true}, 
    date: {type: Date, default: Date.now},
    inspector: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Payer', schema)