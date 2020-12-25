import { Component } from "@angular/core";
import { RecordsState } from "@app/shared/stores/records/records.store";
import { Record } from "@shared/entities/record.entity";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Uuid } from "@app/shared/types/uuid.type";
import { Router } from "@angular/router";

@Component({
  selector: 'app-record-list-page',
  templateUrl: './record-list-page.component.html',
  styleUrls: ['./record-list-page.component.css']
})
export class RecordListPageComponent {
  public readonly recordList$: Observable<Record[]> = this.store.select(RecordsState);
  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  public navigateToCard(id: Uuid): void {
    this.router.navigate([`records/${id}`]);
  }
}
