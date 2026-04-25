export const CONVERSIONS_TEMPERATURE = {
  celsius: {
    celsius:    (v) => v,
    fahrenheit: (v) => (v * 9/5) + 32,
    kelvin:     (v) => v + 273.15,
    rankine:    (v) => (v + 273.15) * 9/5
  },
  fahrenheit: {
    celsius:    (v) => (v - 32) * 5/9,
    fahrenheit: (v) => v,
    kelvin:     (v) => (v - 32) * 5/9 + 273.15,
    rankine:    (v) => v + 459.67
  },
  kelvin: {
    celsius:    (v) => v - 273.15,
    fahrenheit: (v) => (v - 273.15) * 9/5 + 32,
    kelvin:     (v) => v,
    rankine:    (v) => v * 9/5
  },
  rankine: {
    celsius:    (v) => (v - 491.67) * 5/9,
    fahrenheit: (v) => v - 459.67,
    kelvin:     (v) => v * 5/9,
    rankine:    (v) => v
  }
}


export const SUPPORTED_TEMPERATURE_UNITS = {
  celsius: "Celsius (°C)",
  fahrenheit: "Fahrenheit (°F)",
  kelvin: "Kelvin (K)",
  rankine: "Rankine (°R)",
};