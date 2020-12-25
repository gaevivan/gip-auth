import { Nullable } from "../types/nullable.type";

export function notNil(value: Nullable<unknown>): boolean {
  return value !== null && value !== undefined;
}
