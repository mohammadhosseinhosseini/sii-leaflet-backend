const express = require('express')
const app = express()
const port = process.env.PORT || 5001
const cors = require('cors')

app.use(cors())

const data = require('./data.json')

app.get('/data', (req, res) => {
    res.send({ data })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
