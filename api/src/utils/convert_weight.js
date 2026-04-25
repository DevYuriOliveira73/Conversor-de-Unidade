import { CONVERSIONS } from "../constants/weight.constants.js"

export function convert_weight(valor, unit_from, unit_to){
  return  (valor * CONVERSIONS[unit_from] / CONVERSIONS[unit_to])
}