const {Router} = require('express')
const { createUnit } = require('../controllers/units')
const { checkAuth } = require('../middleware/auth')
const fileUpload = require('../utils/multer')

const router = Router()

router.use(checkAuth)
router.post('/',fileUpload.single('video'),createUnit)

module.exports = router