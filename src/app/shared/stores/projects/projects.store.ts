import { Injectable } from "@angular/core";
import { PROJECTS_EXAMPLE } from "@app/shared/constants/example.const";
import { Project } from "@app/shared/entities/project.entity";
import { State } from "@ngxs/store";

@State<Project[]>({
  name: 'ProjectsState',
  defaults: PROJECTS_EXAMPLE,
})
@Injectable()
export class ProjectsState {}