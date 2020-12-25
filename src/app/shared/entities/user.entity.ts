import { EntityItem } from "../interfaces/entity-item.interface";
import { UnknownDate } from "../types/unknown-date.type";

export interface User<DateType = UnknownDate> extends EntityItem<DateType> {
  login: string;
  name: string;
}
