import { Injectable } from "@angular/core";
import { USERS_EXAMPLE } from "@app/shared/constants/example.const";
import { User } from "@app/shared/entities/user.entity";
import { State } from "@ngxs/store";

@State<User[]>({
  name: 'UsersState',
  defaults: USERS_EXAMPLE,
})
@Injectable()
export class UsersState {}