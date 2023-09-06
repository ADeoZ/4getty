import { Request } from 'services/request';
import { MemoItem, ToDoItem } from './models';

type SuccessResponse = { success: string };

type CheckItemRequest = { memoId: MemoItem['id']; itemId: ToDoItem['id'] };
type UncheckItemRequest = CheckItemRequest;

export class ApiMemo {
  static async getMemo({ id }: Pick<MemoItem, 'id'>) {
    return Request.get<Omit<MemoItem, 'id'>>(`/api/memo/${id}`);
  }

  static async makeMark({ id }: Pick<MemoItem, 'id'>) {
    return Request.post<SuccessResponse>(`/api/memo/${id}/mark`);
  }

  static async checkItem({ memoId, itemId }: CheckItemRequest) {
    return Request.post<SuccessResponse>(`/api/memo/${memoId}/item/${itemId}/check`);
  }

  static async uncheckItem({ memoId, itemId }: UncheckItemRequest) {
    return Request.post<SuccessResponse>(`/api/memo/${memoId}/item/${itemId}/uncheck`);
  }
}
