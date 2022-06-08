const { Router } = require('express')
const { inverter } = require('../controllers')

const router = Router()

router.get('/', inverter)

module.exports = router
