import template from './login.tmpl';
import Block from '../../core/Block';
import { InputError } from '../../components/InputError/index';
import { Button } from '../../components/Button/index';
import { Link } from '../../components/Link';
import { focusin, focusout, checkRegExp } from '../../core/Validation';
import AuthController from '../../controllers/AuthController';
import './login.scss';

class Login extends Block {
    constructor() {
        super('main', {
        });
    }

    init() {
        this.getContent()?.setAttribute('class', 'login_signin');
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
                click: onSubmit
            }
        });
        this.children.link = new Link({
            text: 'нет аккаунта?',
            to: '/sign-up',
            className: 'link',
        });
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }

}
const onSubmit = (event: Event): void => {
    event.preventDefault();
    const children = document.querySelectorAll('input');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {};
    children.forEach((child: HTMLInputElement) => {
        const error = child.parentElement?.querySelector('.red_error') as HTMLDivElement;
        const input = checkRegExp(child.name, child.value);
        if (child.value === '' || input) {
            error.textContent = input;
        } else {
            error.textContent = '';
            data[child.name] = child.value;
        }
    });

    if (Object.keys(data).length === children.length) {
        AuthController.signin(data);
        console.log(data);
    }
};
export default Login;
