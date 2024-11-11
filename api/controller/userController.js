const express = require('express');
const User = require('../models/User');

const getAllUsers = async (req, res) => {
    const users = await User.findAll()

    res.json(users)
}

const saveUser = (req, res) => {
    const {data} = req.body
    
    res.json(data)
}

module.exports = { getAllUsers, saveUser } 