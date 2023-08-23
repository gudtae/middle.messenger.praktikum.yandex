import { expect } from 'chai';
import sinon from 'sinon';
import { Link } from './index.ts';


describe.skip('Link', () => {
    it('Клик срабатывает', () => {
        const callback = sinon.stub();
        const link = new Link({
            text: 'Вернуться на главную',
            className: 'link',
            to: '/',
        });
        const element = link.element as HTMLElement;
        element.click();
        expect(callback.calledOnce).to.be.true;
    });
});
