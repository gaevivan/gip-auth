import { User } from "@app/shared/entities/user.entity";
import { StringDate } from "@app/shared/types/string-date.type";
import { Uuid } from "@app/shared/types/uuid.type";

export namespace UsersActions {
  export class Cache {
    public static readonly type: string = '[UsersActions] Cache';
    constructor(public readonly userList: User<Date>[]) {}
  }

  export class Create {
    public static readonly type: string = '[UsersActions] Create';
    constructor(public readonly user: User<StringDate>) {}
  }

  export class CreateBulk {
    public static readonly type: string = '[UsersActions] CreateBulk';
    constructor(public readonly userList: User<StringDate>[]) {}
  }

  export class Select {
    public static readonly type: string = '[UsersActions] Select';
    constructor(public readonly userId: Uuid) {}
  }

  export class SelectBulk {
    public static readonly type: string = '[UsersActions] SelectBulk';
    constructor(public readonly userIdList: Uuid[]) {}
  }

  export class Update {
    public static readonly type: string = '[UsersActions] Update';
    constructor(public readonly user: User<StringDate>) {}
  }

  export class UpdateBulk {
    public static readonly type: string = '[UsersActions] UpdateBulk';
    constructor(public readonly userList: User<StringDate>[]) {}
  }

  export class Delete {
    public static readonly type: string = '[UsersActions] Delete';
    constructor(public readonly userId: Uuid) {}
  }

  export class DeleteBulk {
    public static readonly type: string = '[UsersActions] DeleteBulk';
    constructor(public readonly userIdList: Uuid[]) {}
  }
}