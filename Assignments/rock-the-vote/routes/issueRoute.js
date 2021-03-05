const express = require("express")
const issueRoute = express.Router()
const Issue = require("../models/Issue.js")

//Get All

issueRoute.get("/issues", (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Post One

issueRoute.post("/issues", (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, issue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issue)
    })
})

module.exports = issueRoute