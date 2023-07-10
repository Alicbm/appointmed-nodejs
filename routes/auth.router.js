const express = require('express')
const router = express.Router()

const AuthService = require('../services/auth.service')
const service = new AuthService()

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await service.getUser(email, password)
    const token = await service.signToken(user)
    res.json({
      user, token
    })
  })

module.exports = router