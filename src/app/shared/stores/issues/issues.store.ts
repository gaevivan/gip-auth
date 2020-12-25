import { Injectable } from "@angular/core";
import { ISSUES_EXAMPLE } from "@app/shared/constants/example.const";
import { Issue } from "@app/shared/entities/issue.entity";
import { State } from "@ngxs/store";

@State<Issue[]>({
  name: 'IssuesState',
  defaults: ISSUES_EXAMPLE,
})
@Injectable()
export class IssuesState {}