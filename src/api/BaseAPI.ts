import { HTTPTransport } from '../core/HTTP.ts';

export abstract class BaseAPI {
    protected http: HTTPTransport;
    protected constructor(endpoint: string) {
        this.http = new HTTPTransport(endpoint);
    }
}
