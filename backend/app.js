const express = require("express");
const app = express()
const cors = require("cors")
const taskRouter = require("./routes/tasks")
app.use(express.json())
app.use(cors())
app.use("/tasks/",taskRouter)
app.listen(3000, ()=>{
    console.log("listening on port 3000...")
})