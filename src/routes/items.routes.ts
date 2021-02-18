import { Router } from 'express'
import connection from '../database/connection'

const itemsRouter = Router()

itemsRouter.get('/', async (req, res) => {
    const items = await connection('items').select('*')

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            imageUrl: `http://localhost:3000/uploads/${item.image}`
        }
    })

    return res.json(serializedItems)
})

export default itemsRouter
