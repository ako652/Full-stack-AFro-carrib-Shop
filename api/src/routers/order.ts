import Router from 'express'
import { createOrders } from '../controllers/Order'

const router = Router()

router.post('/:id', createOrders)


export default router