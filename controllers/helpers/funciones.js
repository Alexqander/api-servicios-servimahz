import { v4 as uuidv4 } from "uuid";
export function generateUidElectrodomestico(model, serie) {
  let random = Math.floor(Math.random() * 10000) + 1;

  return `${model}-${random}-${serie}`;
}
export function generateUid() {
  const uid = uuidv4();
  return uid;
}
