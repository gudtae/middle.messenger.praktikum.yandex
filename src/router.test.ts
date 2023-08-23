import { expect } from 'chai';
// import sinon from 'sinon';
import Router from './core/Router.ts';

describe('Router', () => {
    it('test', () => {
        expect(1).to.equal(1);
    });
    it('run', () => {
        Router.start();
    });
});
