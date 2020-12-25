import { Issue } from "@app/shared/entities/issue.entity";
import { StringDate } from "@app/shared/types/string-date.type";
import { Uuid } from "@app/shared/types/uuid.type";

export namespace IssuesActions {
  export class Cache {
    public static readonly type: string = '[IssuesActions] Cache';
    constructor(public readonly issueList: Issue<Date>[]) {}
  }

  export class Create {
    public static readonly type: string = '[IssuesActions] Create';
    constructor(public readonly issue: Issue<StringDate>) {}
  }

  export class CreateBulk {
    public static readonly type: string = '[IssuesActions] CreateBulk';
    constructor(public readonly issueList: Issue<StringDate>[]) {}
  }

  export class Select {
    public static readonly type: string = '[IssuesActions] Select';
    constructor(public readonly issueId: Uuid) {}
  }

  export class SelectBulk {
    public static readonly type: string = '[IssuesActions] SelectBulk';
    constructor(public readonly issueIdList: Uuid[]) {}
  }

  export class Update {
    public static readonly type: string = '[IssuesActions] Update';
    constructor(public readonly issue: Issue<StringDate>) {}
  }

  export class UpdateBulk {
    public static readonly type: string = '[IssuesActions] UpdateBulk';
    constructor(public readonly issueList: Issue<StringDate>[]) {}
  }

  export class Delete {
    public static readonly type: string = '[IssuesActions] Delete';
    constructor(public readonly issueId: Uuid) {}
  }

  export class DeleteBulk {
    public static readonly type: string = '[IssuesActions] DeleteBulk';
    constructor(public readonly issueIdList: Uuid[]) {}
  }
}