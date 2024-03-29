import Block from '../../core/Block.ts';
import template from './modal.tmpl.ts';
import './modal.scss';
import { Button } from '../Button/index.ts';
import { InputError } from '../InputError/index.ts';
import { ERROR_MESSAGES, focusout } from '../../core/Validation.ts';
import ChatController from '../../controllers/ChatController.ts';

class Modal extends Block {
    constructor() {
        super('div');
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', 'modal');
        this.children.buttonClose = new Button({
            text: 'X',
            className: 'modal_close',
            events: {
                click: () => {
                    const children = document.querySelector('input');
                    if (children) {
                        children.value = '';
                    }
                    this.hide();
                }
            }
        });
        this.children.input = new InputError({
            labelFor: 'createChat',
            inputType: 'text',
            inputName: 'createChat',
            class: 'modal_input',
            placeholder: 'Введите название чата',
            events: {
                focusout
            }
        });
        this.children.buttonSubmit = new Button({
            text: 'Создать чат',
            events: {
                click: () => {
                    const children = document.querySelector('input');
                    if (children) {
                        const error = children.parentElement?.querySelector('.red_error') as HTMLDivElement;
                        if (children.value === '') {
                            error.textContent = ERROR_MESSAGES.EMPTY;
                        } else {
                            ChatController.createChat(children.value);
                            this.hide();
                            children.value = '';
                            
                            ChatController.getChats();
                        }
                    }
                }
            }
        });
    }
    render() {
        return this.compile(template, { ...this.props });
    }
}
export default Modal;
