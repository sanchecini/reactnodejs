import express from 'express'

import { getAllCelulars, getCelular, createCelular, updateCelular, deleteCelular } from '../controllers/CelularController.js'
const rcelulares = express.Router()





rcelulares.get('/', getAllCelulars)
rcelulares.get('/:id', getCelular)
rcelulares.post('/', createCelular)
rcelulares.put('/:id', updateCelular)
rcelulares.delete('/:id', deleteCelular)

export default rcelulares
