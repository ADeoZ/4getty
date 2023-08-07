export class apiMemo {
  static async getMemo({ memoId }: { memoId: number }) {
    const res = await fetch(`${process.env.BASE_URL ?? ''}/api/memo/${memoId}`, {
      method: 'GET',
    });

    return res.json() as Promise<{
      title: string;
      content: string;
      rating: number;
      hasMark: boolean;
    }>; // fix
  }

  static async makeMark({ memoId }: { memoId: number }) {
    const res = await fetch(`${process.env.BASE_URL ?? ''}/api/memo/${memoId}/mark`, {
      method: 'POST',
    });

    return res.json() as Promise<{ success: string }>; // fix
  }
}
