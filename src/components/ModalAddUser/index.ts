import Block from '../../core/Block';
import template from './modal.tmpl';
// import './modal.scss';
import { Button } from '../Button';
import { InputError } from '../InputError';
import { ERROR_MESSAGES, focusout } from '../../core/Validation';
// import ChatController from '../../controllers/ChatController';

class ModalAddUser extends Block {
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
                    this.hide();
                }
            }
        });
        this.children.input = new InputError({
            labelFor: 'addUser',
            inputType: 'text',
            inputName: 'addUser',
            class: 'modal_input',
            placeholder: 'Введите логин пользователя',
            events: {
                focusout
            }
        });
        this.children.buttonSubmit = new Button({
            text: 'Найти',
            events: {
                click: () => {
                    const children = document.querySelector('input');
                    if (children) {
                        const error = children.parentElement?.querySelector('.red_error') as HTMLDivElement;
                        if (children.value === '') {
                            error.textContent = ERROR_MESSAGES.EMPTY;
                        } else {
                            
                            this.hide();
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
export default ModalAddUser;
