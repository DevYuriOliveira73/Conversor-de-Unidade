import {convert_size} from '../../utils/convert_length.js'

const LIST_UNIT_LENGTH = [
  'quilometro', 
  'metro', 
  'centimetro', 
  'milimetro', 
  'micrometro', 
  'milha', 
  'jarda',
  'pe',
  'polegada' ]

export function lengthConversor(req, res) {

  console.log(req.body)
  const {valor, unit_from, unit_to} = req.body

  console.log(valor)

  if (valor == null || valor === '') {
    return res.status(400).send("Valor é obrigatório")
  }

  if(!LIST_UNIT_LENGTH.includes(unit_from)){
    return res.status(400).send("Unidade de origem inválida")
  }
  if(!LIST_UNIT_LENGTH.includes(unit_to)){
    return res.status(400).send("Unidade de destino inválida")
  }

  const result = convert_size(valor, unit_from, unit_to)

  console.log('resultado: ',result)

  res.status(200).send(result)

}