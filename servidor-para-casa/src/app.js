const express = require("express")
const cors = require("cors")
const app = express()

const task = require("./routes/toDoRoutes")

app.use(cors())
app.use(express.json())

app.use("/tarefa", task )

module.exports = app

