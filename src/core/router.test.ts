import { expect } from 'chai';
import Router from './Router.ts';
import Block from './Block.ts';
import Sinon from 'sinon';

describe('Router', () => {
    class Home extends Block { }
    class About extends Block { }
    class Error extends Block { }
    Router
        .use('/', Home)
        .use('/about', About)
        .use('/error', Error)
        .start();
    
    it('Одинаковый роут и url', () => {
        const pathname = '/about';
        Router.go(pathname);
        expect(window.location.pathname).to.equal(pathname);
        
    });

    it('Запись history при переходах', () => {
        Router.go('/error');
        expect(window.history.length).to.equal(3); 
    });

    it('Переход назад', () => {
        const spy = Sinon.spy(window.history, 'back');
        Router.back();
        expect(spy.calledOnce).to.eq(true);
    });

    it('Переход вперед', () => {
        const spy = Sinon.spy(window.history, 'forward');
        Router.forward();
        expect(spy.calledOnce).to.eq(true);
    });
});
