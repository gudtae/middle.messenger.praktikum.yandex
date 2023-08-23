import Sinon from 'sinon';
import { Button } from './index.ts';
import { expect } from 'chai';

describe('Button', () => {
    it('Кликабельность кнопки', () => {
        const callback = Sinon.stub();
        const button = new Button({
            text: 'test',
            events: {
                click: callback
            }
        });
        const element = button.element as HTMLButtonElement;
        element.click();
        expect(callback.calledOnce).to.eq(true);
    });
});
