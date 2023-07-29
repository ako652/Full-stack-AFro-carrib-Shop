import Router from 'express'
import { createOrders, getOrderbyId } from '../controllers/Order'
import passport from 'passport';

const router = Router()

router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  createOrders
);
router.get(
  "/:orderId",
 
  getOrderbyId
);


export default router