import { MakeMarkResponse, MemoItem } from './models';

export class ApiMemo {
  static async getMemo({ id }: Pick<MemoItem, 'id'>) {
    const res = await fetch(`${process.env.BASE_URL ?? ''}/api/memo/${id}`, {
      method: 'GET',
    });

    return res.json() as Promise<Omit<MemoItem, 'id'>>; // fix
  }

  static async makeMark({ id }: Pick<MemoItem, 'id'>) {
    const res = await fetch(`${process.env.BASE_URL ?? ''}/api/memo/${id}/mark`, {
      method: 'POST',
    });

    return res.json() as Promise<MakeMarkResponse>;
  }
}
