import { Component } from "@angular/core";
import { CurrentProjectState } from "@app/shared/stores/current-project/current-project.store";
import { RecordsState } from "@app/shared/stores/records/records.store";
import { Uuid } from "@app/shared/types/uuid.type";
import { Store } from "@ngxs/store";
import { Record } from "@shared/entities/record.entity";
import { Observable } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

@Component({
  selector: 'app-record-list-page',
  templateUrl: './record-list-page.component.html',
  styleUrls: ['./record-list-page.component.css']
})
export class RecordListPageComponent {
  private readonly projectId$: Observable<Uuid> = this.store.select(
    CurrentProjectState
  );

  public readonly recordList$: Observable<Record[]> = this.store
    .select(RecordsState)
    .pipe(
      withLatestFrom(this.projectId$),
      map(([recordList, projectId]: [Record[], Uuid]) =>
        recordList.filter((record: Record) => record.project.id === projectId)
      )
    );

  constructor(
    private readonly store: Store,
  ) {}
}
