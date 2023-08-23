import { expect } from 'chai';
import Sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { HTTPTransport, queryStringify } from './HTTP.ts';

describe('HTTPTransport test', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    const requests: SinonFakeXMLHttpRequest[] = [];
    beforeEach(() => {
        xhr = Sinon.useFakeXMLHttpRequest();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore 
        global.XMLHttpRequest = xhr;

        xhr.onCreate = (req) => {
            requests.push(req);
        };

        instance = new HTTPTransport('');
    });

    afterEach(() => {
        requests.length = 0;
        xhr.restore();
    });

    it('Метод get() должен быть вызван с GET', () => {
        instance.get('/');

        const [request] = requests;

        expect(request.method).to.equal('GET');
    });

    it('Метод get() с параметрами', () => {
        instance.get('/', {id: 123, name: 'test'});

        const [request] = requests;

        expect(request.url).to.equal(`https://ya-praktikum.tech/api/v2/?id=123&name=test`);
    });

    it('Метод post() должен быть вызван с POST', () => {
        instance.post('/', {});

        const [request] = requests;

        expect(request.method).to.equal('POST');
    });

    it('Метод put() должен быть вызван с PUT', () => {
        instance.put('/', {});

        const [request] = requests;

        expect(request.method).to.equal('PUT');
    });

    it('Метод delete() должен быть вызван с DELETE', () => {
        instance.delete('/', {});

        const [request] = requests;

        expect(request.method).to.equal('DELETE');
    });
});

describe('queryStringify', () => {
    it('Должна вернуть строку при пустом объекте', () => {
        expect(queryStringify({})).to.equal('');
        
    });

    it ('Должна вернуть строку если значение цифра', () => {
        expect(queryStringify({ a: 1, b: 2 })).to.equal('?a=1&b=2');
    });

    it('Dолжна вернуть строку если значение строка', () => {
        expect(queryStringify({ a: 'hello', b: 'my-name' })).to.equal('?a=hello&b=my-name');
    });
});
