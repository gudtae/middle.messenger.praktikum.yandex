import template from './signin.tmpl';
import { Button } from '../../components/Button/index';
import { InputError } from '../../components/InputError/index';
import Block from '../../Utils/Block';
import { focusin, focusout,submit } from '../../Utils/Validation';

class SignIn extends Block {
    constructor() {
        super('main');
    }
    init(){
        this.getContent()?.setAttribute('class', 'login_signin');
    }
    render(): DocumentFragment {
        this.children.input_email = new InputError({
            labelFor: 'email',
            labelText: 'Почта',
            inputType: 'email',
            inputName: 'email',
            class: 'label_err',
            events: {
                focusin,
                focusout
            }
        });
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
        this.children.input_first_name = new InputError({
            labelFor: 'first_name',
            labelText: 'Имя',
            inputType: 'text',
            inputName: 'first_name',
            class: 'label_err',
            events: {
                focusin,
                focusout
            }
        });
        this.children.input_second_name = new InputError({
            labelFor: 'second_name',
            labelText: 'Фамилия',
            inputType: 'text',
            inputName: 'second_name',
            class: 'label_err',
            events: {
                focusin,
                focusout
            }
        });
        this.children.input_phone = new InputError({
            labelFor: 'phone',
            labelText: 'Телефон',
            inputType: 'tel',
            inputName: 'phone',
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
        this.children.input_password_again = new InputError({
            labelFor: 'password_again',
            labelText: 'Пароль (еще раз)',
            inputType: 'password',
            inputName: 'password_again',
            class: 'label_err',
            events: {
                focusin,
                focusout
            }
        });
        this.children.button = new Button({
            text: 'создать аккаунт',
            events: {
                click: submit
            }
        });
        return this.compile(template, this.props );
    }
}
export default SignIn;
