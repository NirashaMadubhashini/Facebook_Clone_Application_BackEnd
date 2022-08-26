const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

const Post = require('../Models/post.models')

router.get('/', async(req,res)=>{
    try {
        const posts = await Post.find()
        res.json(posts)
        // res.send(posts)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', (req,res)=>{
    const data = req.body
    const newPost = new Post({
        user_id: data.user_id,
        date: data.date,
        time: data.time,
        title: data.title,
        body: data.body
    });
    try {
        const response = newPost.save()
        res.json(response)
        // res.send("Saved!")
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async(req,res)=>{
    const data = req.body

    try {
        const post = await Post.findById(req.params.id)
        post.user_id = data.user_id,
            post.date = data.date,
            post.time = data.time,
            post.title = data.title,
            post.body = data.body
        const response = await post.save()
        res.json(response)
        // res.send("Updated!")
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        const response = post.remove()
        res.json(response)
        // res.send("Deleted!")
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (error) {
        res.send(error)
    }
})

router.get('/', async(req,res)=>{
    try {
        const posts = await Post.find()
        posts.map((p)=>{
            if(p.user_id === req.body.userId){
                res.send(p)
            }
        })
    } catch (error) {
        res.send(error)
    }
})

module.exports = router