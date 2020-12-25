import { EntityItem } from "../interfaces/entity-item.interface";
import { UnknownDate } from "../types/unknown-date.type";
import { User } from "./user.entity";

export interface Project<DateType = UnknownDate> extends EntityItem<DateType> {
  author: User;
  title: string;
  description: string;
}
