import { Project } from "@app/shared/entities/project.entity";
import { StringDate } from "@app/shared/types/string-date.type";
import { Uuid } from "@app/shared/types/uuid.type";

export namespace ProjectsActions {
  export class Cache {
    public static readonly type: string = '[ProjectsActions] Cache';
    constructor(public readonly projectList: Project<Date>[]) {}
  }

  export class Create {
    public static readonly type: string = '[ProjectsActions] Create';
    constructor(public readonly project: Project<StringDate>) {}
  }

  export class CreateBulk {
    public static readonly type: string = '[ProjectsActions] CreateBulk';
    constructor(public readonly projectList: Project<StringDate>[]) {}
  }

  export class Select {
    public static readonly type: string = '[ProjectsActions] Select';
    constructor(public readonly projectId: Uuid) {}
  }

  export class SelectBulk {
    public static readonly type: string = '[ProjectsActions] SelectBulk';
    constructor(public readonly projectIdList: Uuid[]) {}
  }

  export class Update {
    public static readonly type: string = '[ProjectsActions] Update';
    constructor(public readonly project: Project<StringDate>) {}
  }

  export class UpdateBulk {
    public static readonly type: string = '[ProjectsActions] UpdateBulk';
    constructor(public readonly projectList: Project<StringDate>[]) {}
  }

  export class Delete {
    public static readonly type: string = '[ProjectsActions] Delete';
    constructor(public readonly projectId: Uuid) {}
  }

  export class DeleteBulk {
    public static readonly type: string = '[ProjectsActions] DeleteBulk';
    constructor(public readonly projectIdList: Uuid[]) {}
  }
}