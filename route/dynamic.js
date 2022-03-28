//This is Backend
const express = require("express")
const router = express.Router();

const userArray =[];

router.post("/addUser", (req, res)=>{
    userArray.push(req.body)
    console.log(userArray)
    res.json("Data added suceesfully")
}
)

router.get("/displayUser", (req,res)=>{
    res.json(userArray)
}
)
module.exports = router;
