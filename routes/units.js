const {Router} = require('express')
const { createUnit } = require('../controllers/units')
const { checkAuth } = require('../middleware/auth')
const fileUpload = require('../utils/muter')

const router = Router()

router.use(checkAuth)
router.post('/',fileUpload.single('tutorial'),createUnit)

module.exports = router