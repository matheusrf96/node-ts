import { Router } from 'express'
import connection from '../database/connection'

const locationsRouter = Router()

locationsRouter.post('/new', async (req, res) => {
    const {
        name,
        email,
        phone,
        latitude,
        longitude,
        city,
        uf,
        items,
    } = req.body

    const location = {
        name: name,
        email: email,
        phone: phone,
        latitude: latitude,
        longitude: longitude,
        city: city,
        uf: uf,
        // items: items,
        image: 'fake-img.png',
    }

    const newIds = await connection('locations').insert(location)

    console.log(`\n${newIds}\n`)

    const locationId = newIds
    const locationItems = items.map((item_id: number) => {
        return {
            item_id,
            location_id: locationId,
        }
    })

    await connection('location_items').insert(locationItems)

    return res.json({
        id: locationId,
        ...location,
    })
})

export default locationsRouter
