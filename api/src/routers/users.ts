import Router from 'express'
import {creatUserInformation,  loginUser,  updateUserInfo} from '../controllers/users'
import passport from 'passport'

const router =Router()

router.post('/', creatUserInformation)
router.put('/:id',passport.authenticate("jwt", {session:false}), updateUserInfo )
router.post('/Login', loginUser)


export default router