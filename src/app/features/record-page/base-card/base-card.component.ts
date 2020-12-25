import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { isNil } from "@app/shared/functions/is-nil.function";
import { Record } from '@shared/entities/record.entity';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseCardComponent implements OnChanges {
  @Input() public readonly record: Record;
  @Input() public readonly withLinkIndex: boolean = false;

  public readonly relateListLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public ngOnChanges(
    changes: SimpleChanges
  ): void {
    if (!isNil(changes.record)) {
      // this.
    }
  }
}