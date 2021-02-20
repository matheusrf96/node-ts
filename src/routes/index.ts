import { Router } from 'express'
import itemsRouter from './items.routes'
import locationsRouter from './locations.routes'
import locationItems from './locations.routes'

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({
        'message': "Ok"
    })
})

routes.use('/items', itemsRouter)
routes.use('/locations', locationsRouter)

export default routes
