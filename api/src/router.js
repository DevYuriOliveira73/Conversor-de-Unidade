import express from 'express'
import {weightConversor} from './app/useCase/weightConversor.js'
import {temperatureConversor} from './app/useCase/temperatureConversor.js'
import {lengthConversor} from './app/useCase/lengthConversor.js'

export const router = express.Router()

router.get('/', (req, res) => res.send('Conversor de unidade'))

// weight, temperature, length
router.post('/weight', weightConversor)

router.post('/temperature',temperatureConversor)

router.post('/length',lengthConversor)

