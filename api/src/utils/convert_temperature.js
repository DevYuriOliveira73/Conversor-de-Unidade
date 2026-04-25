import {CONVERSIONS_TEMPERATURE} from '../constants/temperatura.constants.js'

export function convert_temperature(valor, unit_from, unit_to) {
  return CONVERSIONS_TEMPERATURE[unit_from][unit_to](valor)
}