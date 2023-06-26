enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE'
}
type Option = {
    data?: any,
    headers?: { [key: string]: string},
    timeout?: number,
    [key: string]: any,
}
function queryStringify(data: { [key: string]: any }) {
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
    request = (url: string, options: Option = {}, timeout = 5000) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(options.method, url);
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
        const queryString = queryStringify(options.data);
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
            url + queryStringify(options.data),
            { ...options, method: METHODS.DELETE },
            options.timeout
        );
    };
}
