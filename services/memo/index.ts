export class apiMemo {
  static async makeMark({ memoId }: { memoId: number }): Promise<{ success: string }> {
    const res = await fetch(`/api/memo/${memoId}/mark`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return res.json() as Promise<{ success: string }>; // fix
  }
}
