export class Request {
  static host = process.env.BASE_URL ?? '';

  static async get<T>(url: string) {
    const result = await fetch(`${this.host}${url}`, {
      method: 'GET',
    });

    return result.json() as Promise<T>;
  }

  static async post<T>(url: string) {
    const result = await fetch(`${this.host}${url}`, {
      method: 'POST',
    });

    return result.json() as Promise<T>;
  }
}
