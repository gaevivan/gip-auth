import { Record } from "@app/shared/entities/record.entity";
import { StringDate } from "@app/shared/types/string-date.type";
import { Uuid } from "@app/shared/types/uuid.type";

export namespace RecordsActions {
  export class Cache {
    public static readonly type: string = '[RecordsActions] Cache';
    constructor(public readonly recordList: Record<Date>[]) {}
  }

  export class Create {
    public static readonly type: string = '[RecordsActions] Create';
    constructor(public readonly record: Record<StringDate>) {}
  }

  export class CreateBulk {
    public static readonly type: string = '[RecordsActions] CreateBulk';
    constructor(public readonly recordList: Record<StringDate>[]) {}
  }

  export class Select {
    public static readonly type: string = '[RecordsActions] Select';
    constructor(public readonly recordId: Uuid) {}
  }

  export class SelectBulk {
    public static readonly type: string = '[RecordsActions] SelectBulk';
    constructor(public readonly recordIdList: Uuid[]) {}
  }

  export class Update {
    public static readonly type: string = '[RecordsActions] Update';
    constructor(public readonly record: Record<StringDate>) {}
  }

  export class UpdateBulk {
    public static readonly type: string = '[RecordsActions] UpdateBulk';
    constructor(public readonly recordList: Record<StringDate>[]) {}
  }

  export class Delete {
    public static readonly type: string = '[RecordsActions] Delete';
    constructor(public readonly recordId: Uuid) {}
  }

  export class DeleteBulk {
    public static readonly type: string = '[RecordsActions] DeleteBulk';
    constructor(public readonly recordIdList: Uuid[]) {}
  }
}