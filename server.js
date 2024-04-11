const express = require("express")
require("dotenv").config()
const mongoose = require("./middleware/db")
const  cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())



const adminRoutes = require("./server/routes/adminRoutes")
app.use('/admin', adminRoutes)

const approvalRoutes = require("./server/routes/approvalRoutes")
app.use('/approve', approvalRoutes)

// const applicationRoutes = require("./server/routes/applicationRoutes")
const applicationRoutes = require("./server/routes/applicationRoutes")
app.use('/application', applicationRoutes)

app.listen(PORT, () => {
    console.log(`listening ON ${PORT}`)
})