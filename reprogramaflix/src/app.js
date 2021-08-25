const express = require("express")
const cors = require("cors")
const app = express()



const movies = require("./routes/moviesRoutes")
const series = require("./routes/seriesRoutes")

app.use(cors())
app.use(express.json())

app.use("/", movies)
app.use("/series", series)

module.exports = app
