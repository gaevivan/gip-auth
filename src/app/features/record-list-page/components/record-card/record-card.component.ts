import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";
import { Record } from '@shared/entities/record.entity';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordCardComponent {
  @Input() public readonly record: Record;

  public readonly relateListLength$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

}