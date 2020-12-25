import { Component } from "@angular/core";
import { RecordsState } from "@app/shared/stores/records/records.store";
import { Record } from "@shared/entities/record.entity";
import { Store } from "@ngxs/store";
import { BehaviorSubject, Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Uuid } from "@app/shared/types/uuid.type";
import { filterNotNil } from "@app/shared/rxjs-operators/filter-not-nil.operator";
import { isNil } from "@app/shared/functions/is-nil.function";
import { CurrentProjectState } from "@app/shared/stores/current-project/current-project.store";

@Component({
  selector: "app-record-page",
  templateUrl: "./record-page.component.html",
  styleUrls: ["./record-page.component.css"],
})
export class RecordPageComponent {
  private readonly projectId$: Observable<Uuid> = this.store.select(
    CurrentProjectState
  ).pipe(tap(console.log));

  public readonly recordList$: Observable<Record[]> = this.store
    .select(RecordsState)
    .pipe(
      withLatestFrom(this.projectId$),
      map(([recordList, projectId]: [Record[], Uuid]) =>
        recordList.filter((record: Record) => record.project.id === projectId)
      )
    );

  private readonly recordIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(
    null
  );

  public readonly record$: Observable<Record> = this.recordIndex$.pipe(
    withLatestFrom(this.projectId$),
    switchMap(([recordIndex, projectId]: [number, Uuid]) =>
      this.store
        .selectOnce(RecordsState.getRecordListByProjectId(projectId))
        .pipe(
          map((recordList: Record[]) =>
            recordList.find((record: Record) => record.index === recordIndex)
          )
        )
    ),
    tap((record: Record) => {
      if (isNil(record)) {
        this.router.navigate(["records"]);
      }
    }),
    filterNotNil()
  );

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    activatedRoute: ActivatedRoute
  ) {
    const index: number = Number.parseInt(activatedRoute.snapshot.params["index"]);
    if (!isNaN(index)) {
      this.recordIndex$.next(index);
    }
  }
}
