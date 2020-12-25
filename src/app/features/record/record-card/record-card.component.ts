import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from "@angular/core";
import { Record } from '@shared/entities/record.entity';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordCardComponent implements OnChanges {
  @Input() public readonly record: Record;

  public ngOnChanges(): void {}
}