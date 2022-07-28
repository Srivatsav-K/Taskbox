const express = require('express')
const app = express()
const PORT = 3050
const configDB = require('./config/database')
configDB()
const router = require('./config/routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(router)


app.listen(PORT, () => {
    console.log('listening on port', PORT)
})