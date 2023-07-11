import Router from 'express'
import { createOrders } from '../controllers/Order'

const router = Router()

router.post('/', createOrders)

export default router