import { Router } from 'express'
import itemsRouter from './items.routes'

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({
        'message': "Ok"
    })
})

routes.use('/items', itemsRouter)

export default routes
