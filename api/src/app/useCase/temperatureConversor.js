import {convert_temperature} from '../../utils/convert_temperature.js'

import {SUPPORTED_TEMPERATURE_UNITS} from "../../constants/temperatura.constants.js"

export function temperatureConversor(req, res) {
  
  const LIST_UNIT_TEMPERATURE = Object.keys(SUPPORTED_TEMPERATURE_UNITS)

  console.log(req.body)
  const {valor, unit_from, unit_to} = req.body

  console.log(valor)

  if (valor == null || valor === '') {
    return res.status(400).send("Valor é obrigatório")
  }

  if(!LIST_UNIT_TEMPERATURE.includes(unit_from)){
    return res.status(400).send("Unidade de origem inválida")
  }
  if(!LIST_UNIT_TEMPERATURE.includes(unit_to)){
    return res.status(400).send("Unidade de destino inválida")
  }

  const result = convert_temperature(valor, unit_from, unit_to)

  console.log('resultado: ',result)

  res.status(200).send(result)

}

export function temperatureDisponiveis(req, res) {
  res.status(200).json({
    supported_units : SUPPORTED_TEMPERATURE_UNITS
  })
}