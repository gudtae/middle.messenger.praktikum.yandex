import template from './login.tmpl';
import { Button } from '../../components/Button/index';
import { InputError } from '../../components/InputError/index';
import Block from '../../components/Utils/Block';
import {focusin, focusout, submit } from '../../components/Utils/Validation';

class Login extends Block {
    constructor() {
        super('main');
    }
    init() {
        this.getContent()?.setAttribute('class', 'login_signin');
    }
    protected render(): DocumentFragment {
        this.children.input_login = new InputError({
            labelFor: 'login',
            labelText: 'Логин',
            inputType: 'text',
            inputName: 'login',
            class: 'label_err',
            events: {
                focusin,
                focusout
            }
        });
        this.children.input_password = new InputError({
            labelFor: 'password',
            labelText: 'Пароль',
            inputType: 'password',
            inputName: 'password',
            class: 'label_err',
            events: {
                focusin,
                focusout
            }
        });
        this.children.button = new Button({
            text: 'войти',
            events: {
                click: submit 
            }
        });
        return this.compile(template, this.props);
    }
}
export default Login ;
