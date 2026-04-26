import { httpClient } from "../httpClient";


export async function getWeightParams() {
console.log(httpClient.head)

  const params = await httpClient.get('/weight')

  return params
}