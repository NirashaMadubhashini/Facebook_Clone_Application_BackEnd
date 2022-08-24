const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

const User = require('../Models/user.models')

router.get('/', async(req,res)=>{
    const data = req.body
    try {
        const users = await User.find()
        users.map((u)=>{
            if(u.email === data.email){
                if(u.password === data.password){
                    res.json(u._id)
                }else{
                    res.send("Invalid Password")
                }
            }
        })
    } catch (error) {
        res.send(error)
    }
})

module.exports = router