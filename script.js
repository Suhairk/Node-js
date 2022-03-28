const express = require("express");
const app = express();
const cors = require("cors")
const staticData = require("./route/static");
const dynamicData = require("./route/dynamic");


//use
//npm i cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/user", staticData)
    //routing
app.use("/", dynamicData)

//codes

app.get("*", (req, res) => {
    res.json("No Route Available")
})


const PORT = process.env.PORT || 3001;
app.listen(PORT)