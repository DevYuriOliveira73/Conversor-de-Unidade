import {convert_temperature} from '../../utils/convert_temperature.js'

const LIST_UNIT_TEMPERATURE = ['celsius', 'fahrenheit', 'kelvin', 'rankine']

export function temperatureConversor(req, res) {

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