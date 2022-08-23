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
    const data = req.body
    const newUser = new User({
        id:data.id,
        first_name: data.first_name,
        surename: data.surename,
        gender: data.gender,
        dob: data.dob,
        password: data.password,
        phone: data.phone,
        email: data.email
    });
    try {
        const response = newUser.save()
        res.send("Saved!")
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async(req,res)=>{
    const data = req.body

    try {
        const user = await User.findById(req.params.id)
        user.id = data.id
        user.first_name = data.first_name
        user.surename = data.surename
        user.gender = data.gender
        user.dob = data.dob
        user.password = data.password
        user.phone = data.phone
        user.email = data.email
        const response = await user.save()

        res.send("Updated!")
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const response = user.remove()
        res.send("Deleted!")
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router