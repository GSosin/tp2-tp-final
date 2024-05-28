import {Router} from 'express'
import {createUser, getUserById} from '../controllers/userController.js'
import {getAllUsers} from '../controllers/userController.js'
import {deleteUserById} from '../controllers/userController.js'
import {updateUserById} from '../controllers/userController.js'
const router = Router()

router.post('/users/create', createUser)
router.get('/users/getUserById/:id', getUserById)
router.get('/users/getAllUsers', getAllUsers)
router.delete('/users/deleteUserById/:id', deleteUserById)
router.put('/users/updateUserById/:id', updateUserById)

export default router