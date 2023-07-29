import Router from 'express'
import {creatUserInformation,  loginUser,  updateUserInfo} from '../controllers/users'
import passport from 'passport'

const router =Router()

router.post('/', creatUserInformation)
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserInfo
);
router.post('/login', loginUser)


export default router