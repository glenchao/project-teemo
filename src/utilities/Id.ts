import { v4 as uuid } from "uuid";

export function getRandomGuid(): string {
  return uuid();
}
