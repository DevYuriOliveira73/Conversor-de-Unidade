import {CONVERSIONS_SIZE} from '../constants/length.constants.js'

export function convert_size(valor, unit_from, unit_to) {
  return (valor * CONVERSIONS_SIZE[unit_from] / CONVERSIONS_SIZE[unit_to])
}