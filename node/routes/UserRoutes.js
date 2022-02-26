import express from 'express'
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/UserController.js'

const router = express.Router()



router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)



export default router
