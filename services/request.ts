export class Request {
  static host = process.env.BASE_URL ?? '';

  static async get<T>(url: string) {
    const result = await fetch(`${this.host}${url}`, {
      method: 'GET',
    });

    this.errorHandler(result);

    return result.json() as Promise<T>;
  }

  static async post<T>(url: string, body?: BodyInit) {
    const result = await fetch(`${this.host}${url}`, {
      method: 'POST',
      body,
    });

    this.errorHandler(result);

    return result.json() as Promise<T>;
  }

  static errorHandler(serverResponse: Response): void {
    if (!serverResponse.ok) {
      switch (serverResponse.status) {
        case 400:
          throw new Error('Ошибка в запросе');
        case 401:
          throw new Error('Ошибка авторизации');
        case 403:
          throw new Error('Доступ ограничен');
        case 404:
          throw new Error('Запрошенный объект не доступен');
        case 500:
          throw new Error('Серверная ошибка');
        default:
          throw new Error('Ошибка');
      }
    }
  }
}
