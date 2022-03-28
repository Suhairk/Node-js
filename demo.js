// console.log("running")

// const array = ["a", "b"]
// console.log(array)
// array.push("c")
// console.log(array)
// const newArr = [...array, "c", "d"];
// console.log(newArr)

// function newFunc() {
//     return 10
// }



// const newFunc = () => {
//     return 10
// }

// const newFunc = () => 10
//console.log(newFunc())
const path = require("path")
const fs = require("fs")

// fs.mkdir(path.join(__dirname, "/api"), {}, (err) => {
//     if (err) throw err;
// });
// fs.writeFile
// fs.appendFile
//fs.readFile


//events
// const EventEmitter = require("events")
// const emitter = new EventEmitter();

// emitter.on("message", (data) => {
//     console.log(data.text)
// })

// emitter.emit("message", { text: "user logged" })

//npm i nodemon
// console.log("running")
// console.log("again runn")

//http
const http = require("http")

// const server = http.createServer((req, res) => {
//     res.write("this is node")
//     console.log(req.url)
//     res.end()
// })

// const PORT = process.env.PORT || 3001;

// server.listen(PORT, () => console.log(`server running on ${PORT}`))
// npm install express
//npm i nodemon -D =deve depondany

//npm run dev

//import file 
const logger = require("./express");

//console.log(logger());
console.log(logger)