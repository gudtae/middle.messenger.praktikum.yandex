import Block from '../../core/Block';
import template from './modal.tmpl';
import './modal.scss';
import { Button } from '../Button';
import { InputError } from '../InputError';
import { focusout } from '../../core/Validation';
interface ModalProps {
    event?:{ [key: string]: (...args: never) => void };
}
class Modal extends Block {
    constructor(props: ModalProps) {
        super('div', {...props});
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
            labelFor: 'createChat',
            inputType: 'text',
            inputName: 'createChat',
            placeholder: 'Введите название чата',
            events: {
                focusout
            }
        });
        this.children.buttonSubmit = new Button({
            text: 'Создать чат',
            events: {
                click: () => {
                    this.hide();
                }
            }
        });
    }
    render() {
        return this.compile(template, {...this.props});
    }
}
export default Modal;
