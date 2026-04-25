import express from 'express'
import {weightConversor, weightDisponiveis} from './app/useCase/weightConversor.js'
import {temperatureConversor, temperatureDisponiveis} from './app/useCase/temperatureConversor.js'
import {lengthConversor, lengthDisponiveis} from './app/useCase/lengthConversor.js'

export const router = express.Router()

router.get('/', (req, res) => res.send('Conversor de unidade'))

// POST weight, temperature, length
router.post('/weight', weightConversor)

router.post('/temperature',temperatureConversor)

router.post('/length',lengthConversor)


// GET weight, temperature, length
router.get('/weight', weightDisponiveis)

router.get('/temperature',temperatureDisponiveis)

router.get('/length',lengthDisponiveis)
