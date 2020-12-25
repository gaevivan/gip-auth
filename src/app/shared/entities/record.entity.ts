import { EntityItem } from "../interfaces/entity-item.interface";
import { UnknownDate } from "../types/unknown-date.type";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { Nullable } from "../types/nullable.type";

export interface Record<DateType = UnknownDate> extends EntityItem<DateType> {
  index: number;
  title: string;
  text: string;
  author: User;
  project: Project;
  assignee: Nullable<User>;
  ancestor: Nullable<Record>;
}
