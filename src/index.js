const express = require('express')

const app = express()

app.use(express.json())

app.get('/projects', (req, res) => {
    const { title, author } = req.query

    console.log(title, author)

    return res.json({
        "message": "Success :)",
    })
})

app.post('/projects', (req, res) => {
    const body = req.body

    console.log(body)

    return res.json({
        "message": "Success :)",
    })
})

app.put('/projects/:id', (req, res) => {
    const { id } = req.params

    console.log(id)

    return res.json({
        "message": "Success :)",
    })
})

app.listen(3000, () => {
    console.log('\n\nRunning at 0.0.0.0:3000\n\n')
})