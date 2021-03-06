const express = require('express')
const { v4: uuid } = require('uuid')

const app = express()

app.use(express.json())

// Global consts

const projects = []

// Middlewares

const logRoutes = (req, res, next) => {
    const { method, url } = req
    const route = `[${method.toUpperCase()}] ${url}`

    console.log(route)

    return next()
}

app.use(logRoutes)

// Routes

app.get('/projects', (req, res) => {
    const { title } = req.query

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects

    return res.json(results)
})

app.post('/projects', (req, res) => {
    const { title, author } = req.body

    const id = uuid()
    const project = {
        id,
        title,
        author
    }

    projects.push(project)

    return res.json(project)
})

app.put('/projects/:id', (req, res) => {
    const { id } = req.params
    const { title, author } = req.body
    const projectIndex = projects.findIndex(project => project.id == id)

    if(projectIndex < 0) {
        return res.status(404).json({
            "message": "ID not found :(",
        })
    }

    const project = {
        id,
        title,
        author
    }

    projects[projectIndex] = project

    return res.json(project)
})

app.listen(3000, () => {
    console.log('\n\nRunning at 0.0.0.0:3000\n\n')
})