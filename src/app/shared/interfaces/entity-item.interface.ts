import { Uuid } from "../types/uuid.type";
import { UnknownDate } from "../types/unknown-date.type";

export interface EntityItem<DateType = UnknownDate> {
  id: Uuid;
  created: DateType;
  updated: DateType;
}
