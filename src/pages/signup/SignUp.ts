import template from './signup.tmpl.ts';
import Block from '../../core/Block.ts';
import { InputError } from '../../components/InputError/index.ts';
import { Button } from '../../components/Button/index.ts';
import { Link } from '../../components/Link/index.ts';
import { checkRegExp, focusin, focusout} from '../../core/Validation.ts';
import AuthController from '../../controllers/AuthController.ts';
import { isEqual } from '../../Utils/IsEqual.ts';
import './signup.scss';

class SignIn extends Block {
    constructor() {
        super('main');
    }
    init() {
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
                click: onSubmit
            }
        });
        this.children.link = new Link({
            text: 'есть аккаунт?',
            to: '/',
            className: 'link'
        });
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
        if (isEqual(data.password, data.password_again)) {
            AuthController.signup(data);

        } else {
            const error = document.querySelectorAll('.red_error')[6] as HTMLDivElement;
            error.textContent = 'Пароли не совпадают';
        }
        
    }
};
export default SignIn;
