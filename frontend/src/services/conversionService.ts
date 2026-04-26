import { httpClient } from "./httpClient";
import { type IcalculateConversion } from "../type/calculateConversion";

export async function calculateConversion({unit, valor, unit_from, unit_to } : IcalculateConversion) {

  try {
    
    const body = {
      // value: Number(value),
      valor,
      unit_from,
      unit_to,
    };
    const params = await httpClient.post(`/${unit}`, body)
  
    return params
  } catch (error) {
    console.log("ERROR: ", error)
  }
}