// const logger = () => {
//     return 2 * 5;
// }
// const myName = "debugMedia"
// module.exports = {
//     logger,
//     myName
// }

const express = require("express")

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const userData = [
    { id: 1, name: "debug", company: "google" },
    { id: 2, name: "debug2", company: "google2" },
    { id: 3, name: "debug3", company: "google3" },
    { id: 4, name: "debug4", company: "google4" }
]

app.get("/user", (req, res) => {
    res.json(userData)
})
app.post("/userpost", (req, res) => {
    res.json(req.body.name)
})
app.post("/user/:id", (req, res) => {
        const userId = parseInt(req.params.id)
        const filterdUserData = userData.filter(data => data.id === userId)
        res.json(filterdUserData) //path parameter use params convert in to int
    })
    //query
app.post("/user?", (req, res) => {
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
app.get("*", (req, res) => {
    res.json("No Route Available")
})



const PORT = process.env.PORT || 3001;
app.listen(PORT)
