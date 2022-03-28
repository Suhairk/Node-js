const express = require("express")
const router = express.Router()


const userData = [
    { id: 1, name: "debug", company: "google" },
    { id: 2, name: "debug2", company: "google2" },
    { id: 3, name: "debug3", company: "google3" },
    { id: 4, name: "debug4", company: "google4" }
]

router.get("/", (req, res) => {
    res.json(userData)
})
router.post("/userpost", (req, res) => {
    res.json(req.body.name)
})
router.post("/:id", (req, res) => {
        const userId = parseInt(req.params.id)
        const filterdUserData = userData.filter(data => data.id === userId)
        res.json(filterdUserData) //path parameter use params convert in to int
    })
    //query
router.post("/user?", (req, res) => {
    const query = parseInt(req.query.id)
    const filterdUserData = userData.filter((data) => {
            if (query) {
                return data.id === query
            } else {
                return data
            }
        })
        //if  no data then display full

    res.json(filterdUserData)
})

module.exports = router