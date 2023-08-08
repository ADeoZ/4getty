import { Request } from 'services/request';
import { MakeMarkResponse, MemoItem } from './models';

export class ApiMemo {
  static async getMemo({ id }: Pick<MemoItem, 'id'>) {
    return Request.get<Omit<MemoItem, 'id'>>(`/api/memo/${id}`);
  }

  static async makeMark({ id }: Pick<MemoItem, 'id'>) {
    return Request.post<MakeMarkResponse>(`/api/memo/${id}/mark`);
  }
}
