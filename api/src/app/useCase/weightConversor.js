import {convert_weight} from '../../utils/convert_weight.js'
import { SUPPORTED_WEIGHT_UNITS } from "../../constants/weight.constants.js"


export function weightConversor(req, res) {

 const LIST_UNIT_WEIGHT = Object.keys(SUPPORTED_WEIGHT_UNITS)

  console.log(req.body)
  const {valor, unit_from, unit_to} = req.body

  console.log(valor)

  if(!valor){
    return res.status(400).send('Valor é obrigatório')
  }

  if(!LIST_UNIT_WEIGHT.includes(unit_from)){
    return res.status(400).send("Unidade de origem inválida")
  }
  if(!LIST_UNIT_WEIGHT.includes(unit_to)){
    return res.status(400).send("Unidade de destino inválida")
  }

  const result = convert_weight(valor, unit_from, unit_to)

  console.log('resultado: ',result)

  res.status(200).send(result)

}

export function weightDisponiveis(req, res) {
  res.status(200).json({
    supported_units : SUPPORTED_WEIGHT_UNITS
  })
}