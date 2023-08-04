import Block from '../../core/Block';
import { Button } from '../Button';
import template from './modalDelete.tmpl';
import './modalDelete.scss';
import ChatController from '../../controllers/ChatController';
import store from '../../core/Store';

class modalDelete extends Block {
    constructor() {
        super('div', {});
    }
    protected init(): void {
        ChatController.getChats();
        this.getContent()?.setAttribute('class', 'modal');
        this.children.buttonClose = new Button({
            text: 'X',
            className: 'modal_close',
            events: {
                click: () => {
                    this.hide();
                }
            }
        });
        this.children.buttonSubmit = new Button({
            text: 'Удалить чат',
            className: 'modal_delete_chat',
            events: {
                click: () => {
                    const id = store.getState().currentChat?.id;
                    const error = document.querySelector('.modal_error') as HTMLDivElement;
                    error.textContent = '';
                    if (id) {
                        ChatController.deleteChat(id);
                        this.hide();
                    }
                    else {
                        error.textContent = 'Произошла ошибка, попробуйте позже';
                    }
                }
            }
        });
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
export default modalDelete;
