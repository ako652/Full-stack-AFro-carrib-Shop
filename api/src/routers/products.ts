import Router from 'express'
import { getProducts, creatProductData, getProductId } from "../controllers/products";

const router =Router()


router.get('/', getProducts)
router.post("/", creatProductData);
router.get('/:productId', getProductId)

export default router