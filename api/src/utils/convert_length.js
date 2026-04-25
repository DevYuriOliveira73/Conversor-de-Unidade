const CONVERSIONS_SIZE = {
  quilometro:  1_000,
  metro:       1,
  centimetro:  0.01,
  milimetro:   0.001,
  micrometro:  0.000001,
  milha:       1_609.34,
  jarda:       0.9144,
  pe:          0.3048,
  polegada:    0.0254
}

export function convert_size(valor, unit_from, unit_to) {
  return (valor * CONVERSIONS_SIZE[unit_from] / CONVERSIONS_SIZE[unit_to])
}