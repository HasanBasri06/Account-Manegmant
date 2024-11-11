const express = require('express');
const { getAllUsers, saveUser } = require('../controller/userController');
const router = express.Router()

router.get('/', getAllUsers)
router.post('/save-user', saveUser)

module.exports = router