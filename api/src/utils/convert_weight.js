const CONVERSIONS = {
  tonelada:    1_000_000,
  quilograma:  1_000,
  grama:       1,
  miligrama:   0.001,
  micrograma:  0.000001
}

export function convert_weight(valor, unit_from, unit_to){
  return  (valor * CONVERSIONS[unit_from] / CONVERSIONS[unit_to])
}