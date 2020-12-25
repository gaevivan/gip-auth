import { Injectable } from "@angular/core";
import { RECORDS_EXAMPLE } from "@app/shared/constants/example.const";
import { Record } from "@app/shared/entities/record.entity";
import { isEmpty } from "@app/shared/functions/is-empty.function";
import { Uuid } from "@app/shared/types/uuid.type";
import { createSelector, State } from "@ngxs/store";

@State<Record[]>({
  name: 'RecordsState',
  defaults: RECORDS_EXAMPLE,
})
@Injectable()
export class RecordsState {
  public static getRecordById(recordId: Uuid): (recordList: Record[]) => Record {
    return createSelector([RecordsState], (recordList: Record[]) => {
      if (!Array.isArray(recordList) || isEmpty(recordList)) {
        return null;
      }
      return recordList.find((recordItem: Record) => recordItem.id === recordId);
    });
  }

  public static getRecordListByProjectId(projectId: Uuid): (recordList: Record[]) => Record[] {
    return createSelector([RecordsState], (recordList: Record[]) => {
      if (!Array.isArray(recordList) || isEmpty(recordList)) {
        return [];
      }
      return recordList.filter((record: Record) => record.project.id === projectId);
    });
  }
}