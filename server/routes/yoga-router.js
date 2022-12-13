
const express = require('express')

const YogaCtrl = require('../controllers/yoga-controller')

const router = express.Router()

router.post('/yoga', YogaCtrl.createUser)
router.put('/yoga/:id', YogaCtrl.updateUser)
router.get('/yoga/:id', YogaCtrl.getUserById)
router.delete('/yoga/:id', YogaCtrl.deleteUser)

module.exports = router