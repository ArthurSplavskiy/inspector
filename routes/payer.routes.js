const {Router} = require('express')
const Payer = require('../models/Payer')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/createpayer', auth, async (req, res) => {
    try {

        const { 
                payerCode,
                payerName, 
                payerType, 
                payerTax, 
                payerIncome, 
                payerPeriod, 
                payerPhone, 
                payerEmail 
            } = req.body

        const existing = await Payer.findOne({ payerCode })

        if(existing) {
            return res.json({ payer: existing })
        }

        const payer = new Payer({
            payerCode,
            payerName,
            payerType, 
            payerTax, 
            payerIncome, 
            payerPeriod, 
            payerPhone, 
            payerEmail, 
            inspector: req.user.userId
        })

        await payer.save()
        res.status(201).json({ payer })

    } catch(e) {
        res.status(500).json({ message: "Щось пішло не так, спробуйте знову" })
    }
})

router.get('/', auth, async (req, res) => {
    try {

        const payers = await Payer.find({ inspector: req.user.userId })
        res.json(payers)

    } catch(e) {
        res.status(500).json({ message: "Щось пішло не так, спробуйте знову" })
    }
})

router.get('/:id', auth, async (req, res) => {
    try {

        const payer = await Payer.findById(req.params.id)
        res.json(payer)

    } catch(e) {
        res.status(500).json({ message: "Щось пішло не так, спробуйте знову" })
    }
})

module.exports = router