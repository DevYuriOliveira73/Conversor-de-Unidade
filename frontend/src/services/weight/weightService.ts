import { httpClient } from "../httpClient";
import { type Category } from "../../type/category";

export async function getWeightParams(unit : Category) {

  const params = await httpClient.get(`/${unit}`)

  return params
}