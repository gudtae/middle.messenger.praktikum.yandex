// enum METHODS {
//     GET = 'GET',
//     PUT = 'PUT',
//     POST = 'POST',
//     DELETE = 'DELETE'
// }
// function queryStringify(data: Record<string, string>) {
//     if (!data) {
//         throw new Error('Должна быть data');
//     }
//     let result = '';
//     for (const key in data) {
//         result += `${result ? '&' : '?'}${key}=${data[key]}`;
//     }
//     return result;
// }
// type Options = {
//     method: METHODS;
//     data?: unknown;
//     headers?: unknown;
//     timeout?: number;
// };

// export class HTTPTransport {
//     static API_URL = 'https://ya-praktikum.tech/api/v2';
//     protected endpoint: string;

//     constructor(endpoint: string) {
//         this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
//     }

//     public get<Response>(path = '/', data: Record<string, string> = {}): Promise<Response> {
//         let url = this.endpoint + path;
//         if (data) {
//             url += queryStringify(data);
//         }
//         return this.request<Response>(url, { method: METHODS.GET });
//     }
//     public post<Response = void>(path: string, data?: unknown): Promise<Response> {
//         return this.request<Response>(this.endpoint + path, {
//             method: METHODS.POST,
//             data,
//         });
//     }

//     public put<Response = void>(path: string, data: unknown): Promise<Response> {
//         return this.request<Response>(this.endpoint + path, {
//             method: METHODS.PUT,
//             data,
//         });
//     }

//     public delete<Response>(path: string, data: unknown): Promise<Response> {
//         return this.request<Response>(this.endpoint + path, {
//             method: METHODS.DELETE,
//             data,
//         });
//     }

//     private request<Response>(url: string, options: Options = { method: METHODS.GET }, timeout = 5000): Promise<Response> {
//         const { method, data, headers } = options;

//         return new Promise((resolve, reject) => {
//             const xhr = new XMLHttpRequest();
//             xhr.open(method, url);
//             xhr.timeout = timeout;
//             if (headers) {
//                 for (const [key, value] of Object.entries(headers)) {
//                     xhr.setRequestHeader(key, value);
//                 }
//             }
//             xhr.onreadystatechange = () => {
//                 if (xhr.readyState === XMLHttpRequest.DONE) {
//                     if (xhr.status < 400) {
//                         resolve(xhr.response);
//                     } else {
//                         reject(xhr.response);
//                     }
//                 }
//             };

//             xhr.onabort = () => reject({ reason: 'abort' });
//             xhr.onerror = () => reject({ reason: 'network error' });
//             xhr.ontimeout = () => reject({ reason: 'timeout' });

//             xhr.withCredentials = true;
//             xhr.responseType = 'json';

//             if (method === METHODS.GET || !data) {
//                 xhr.send();
//             } else {
//                 xhr.setRequestHeader('Content-Type', 'application/json');
//                 xhr.send(JSON.stringify(data));
//             }
//         });
//     }
// }
export enum Method {
    Get = 'Get',
    Post = 'Post',
    Put = 'Put',
    Patch = 'Patch',
    Delete = 'Delete'
}

type Options = {
    method: Method;
    data?: unknown;
};

export class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';
    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    public get<Response>(path = '/'): Promise<Response> {
        return this.request<Response>(this.endpoint + path);
    }

    public post<Response = void>(path: string, data?: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Method.Post,
            data,
        });
    }

    public put<Response = void>(path: string, data: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Method.Put,
            data,
        });
    }

    public patch<Response = void>(path: string, data: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Method.Patch,
            data,
        });
    }

    public delete<Response>(path: string): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: Method.Delete,
        });
    }

    private request<Response>(url: string, options: Options = { method: Method.Get }): Promise<Response> {
        const { method, data } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onreadystatechange = () => {

                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.onabort = () => reject({ reason: 'abort' });
            xhr.onerror = () => reject({ reason: 'network error' });
            xhr.ontimeout = () => reject({ reason: 'timeout' });

            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if (method === Method.Get || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}