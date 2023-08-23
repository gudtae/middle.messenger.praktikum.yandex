import { expect } from 'chai';
import Block from './Block.ts';

describe('Block', () => {
    it('Создание и инициализация', () => {
        const block = new Block();
        expect(block).to.exist;
    });

    it('Рендер на странице', () => {
        const block = new Block();
        const content = document.createElement('div');
        block.getContent = () => content;
    
        block._render();
    
        const app = document.querySelector('#app');
        expect(app?.textContent).to.include(content.textContent);
    });

    it('Показ блока', () => {
        const block = new Block();
        const content = document.createElement('div');
        block.getContent = () => content;
    
        block.show();
        expect(content.style.display).to.equal('block');
    });

    it('Скрытие блока', () => {
        const block = new Block();
        const content = document.createElement('div');
        block.getContent = () => content;

        block.hide();
        expect(content.style.display).to.equal('none');
    });
});
