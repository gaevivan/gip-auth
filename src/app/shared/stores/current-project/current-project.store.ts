import { Injectable } from "@angular/core";
import { PROJECTS_EXAMPLE } from "@app/shared/constants/example.const";
import { Uuid } from "@app/shared/types/uuid.type";
import { State } from "@ngxs/store";

@State<Uuid>({
  name: 'CurrentProjectState',
  defaults: PROJECTS_EXAMPLE[0].id,
})
@Injectable()
export class CurrentProjectState {}