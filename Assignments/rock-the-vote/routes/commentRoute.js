const express = require("express")
const commentRoute = express.Router()
const Comment = require("../models/Comment.js")

//Get All

commentRoute.get("/comments", (req, res, next) => {
    Comment.find((err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

//Post One To Issue

commentRoute.post("/comments/:issueId", (req, res, next) => {
    req.body.user = req.user._id,
    issueId = { issueId: req.params.issueId }
    const newComment = new Comment(req.body)
    const addedId = Object.assign(newComment, issueId)
    addedId.save((err, comment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})

module.exports = commentRoute