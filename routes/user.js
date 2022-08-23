const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

const User = require('../Models/user.models')

router.get('/', async(req,res)=>{
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', (req,res)=>{
    console.log(req.body);
    res.send({'message' : 'user not found'})
})

router.put('/', (req,res)=>{
    res.send({'message' : 'user not found'})
})

router.delete('/:id', (req,res)=>{
    res.send({'message' : 'user not found'})
})

router.get('/:id', (req,res)=>{
    res.send({'message' : 'user not found'})
})

module.exports = router