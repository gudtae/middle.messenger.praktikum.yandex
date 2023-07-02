enum  METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE'
}
type Option = {
    method?: METHODS;
    data?: Record<string, string> | null | undefined;
    headers?: Record<string, string>;
    timeout?: number;
    retries?: number;
}
function queryStringify(data: Record<string, string>) {
    if (!data) {
        throw new Error('Должна быть data');
    }
    let result = '';
    for (const key in data) {
        result += `${result ? '&' : '?'}${key}=${data[key]}`;
    }
    return result;
}

export class HTTPTransport {
    request = (url: string, options: Option = {}, timeout = 5000): Promise<XMLHttpRequest> => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(options.method || METHODS.GET, url);
            xhr.timeout = timeout;

            if (options.headers) {
                for (const [key, value] of Object.entries(options.headers)) {
                    xhr.setRequestHeader(key, value);
                }
            }

            xhr.onload = function () {
                return resolve(xhr);
            };

            xhr.onabort = function () {
                const error = new Error('Request aborted');
                reject(error);
            };

            xhr.onerror = function () {
                const error = new Error('Request error');
                reject(error);
            };

            xhr.ontimeout = function () {
                const error = new Error('Request timeout');
                reject(error);
            };

            if (options.method === METHODS.GET || !options.data) {
                xhr.send();
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(options.data));
            }
        });
    };

    get = (url: string, options: Option = {}) => {
        const queryString = queryStringify(options.data || {});
        const requestUrl = `${url}${queryString ? `?${queryString}` : ''}`;
        return this.request(
            requestUrl,
            { ...options, method: METHODS.GET },
            options.timeout
        );
    };

    put = (url: string, options: Option = {}) => {
        return this.request(
            url,
            { ...options, method: METHODS.PUT },
            options.timeout
        );
    };

    post = (url: string, options: Option = {}) => {
        return this.request(
            url,
            { ...options, method: METHODS.POST },
            options.timeout
        );
    };

    delete = (url: string, options: Option = {}) => {
        return this.request(
            url + queryStringify(options.data || {}),
            { ...options, method: METHODS.DELETE },
            options.timeout
        );
    };
}
export function fetchWithRetry(url: string, options: Option = {}): Promise<XMLHttpRequest | Response> {
    const { retries = 1, ...restOptions } = options;
    const transport = new HTTPTransport();

    return transport.request(url, restOptions)
        .then(xhr => new Response(xhr.responseText, { status: xhr.status, statusText: xhr.statusText }))
        .catch(error => {
            if (retries > 1) {
                return fetchWithRetry(url, { ...restOptions, retries: retries - 1 });
            } else {
                throw error;
            }
        });
}
