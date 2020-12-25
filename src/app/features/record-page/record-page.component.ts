import { Component } from "@angular/core";
import { RecordsState } from "@app/shared/stores/records/records.store";
import { Record } from "@shared/entities/record.entity";
import { Store } from "@ngxs/store";
import { BehaviorSubject, Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";
import { Uuid } from "@app/shared/types/uuid.type";
import { filterNotNil } from "@app/shared/rxjs-operators/filter-not-nil.operator";
import { isNil } from "@app/shared/functions/is-nil.function";

@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css']
})
export class RecordPageComponent {

  public readonly recordList$: Observable<Record[]> = this.store.select(RecordsState);

  private readonly recordId$: BehaviorSubject<Uuid> = new BehaviorSubject<Uuid>(null);

  public readonly record$: Observable<Record> = this.recordId$.pipe(
    switchMap((recordId: Uuid) => this.store.selectOnce(RecordsState.getById(recordId))),
    tap((record: Record) => {
      if (isNil(record)) {
        this.router.navigate(['records']);
      }
    }),
    filterNotNil()
  );

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.recordId$.next(activatedRoute.snapshot.params['id']);
  }
}
