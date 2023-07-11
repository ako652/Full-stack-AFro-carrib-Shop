import Router from 'express'
import {creatUserInformation, updateUserInfo} from '../controllers/users'

const router =Router()

router.post('/', creatUserInformation)
router.put('/:id', updateUserInfo )

export default router