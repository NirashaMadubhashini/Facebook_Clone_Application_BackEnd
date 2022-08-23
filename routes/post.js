const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

const Post = require('../Models/post.models')

router.get('/', async(req,res)=>{
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', (req,res)=>{
    console.log(req.body);
})

router.put('/', (req,res)=>{
    console.log(req.body);
})

module.exports = router