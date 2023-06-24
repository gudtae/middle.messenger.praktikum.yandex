import template from './signin.tmpl';
import { Button } from '../../components/Button/index';
import { Input } from '../../components/Input/index';
import Block from '../../components/Utils/Block';

class SignIn extends Block {
    constructor() {
        super('main');
    }
    init(){
        this.getContent()?.setAttribute('class', 'login_signin');
    }
    protected render(): DocumentFragment {
        this.children.input_email = new Input({
            labelFor: 'email',
            labelText: 'Почта',
            inputType: 'email',
            inputName: 'email',
        });
        this.children.input_login = new Input({
            labelFor: 'login',
            labelText: 'Логин',
            inputType: 'text',
            inputName: 'login',
        });
        this.children.input_first_name = new Input({
            labelFor: 'first_name',
            labelText: 'Имя',
            inputType: 'text',
            inputName: 'first_name',
        });
        this.children.input_second_name = new Input({
            labelFor: 'second_name',
            labelText: 'Фамилия',
            inputType: 'text',
            inputName: 'second_name',
        });
        this.children.input_phone = new Input({
            labelFor: 'phone',
            labelText: 'Телефон',
            inputType: 'tel',
            inputName: 'phone',
        });
        this.children.input_password = new Input({
            labelFor: 'password',
            labelText: 'Пароль',
            inputType: 'password',
            inputName: 'password',
        });
        this.children.input_password_again = new Input({
            labelFor: 'password_again',
            labelText: 'Пароль (еще раз)',
            inputType: 'password',
            inputName: 'password_again',
        });
        this.children.button = new Button({
            text: 'создать аккаунт',
            events: {
                click: () => console.log('работает')
            }
        });
        return this.compile(template, this.props);
    }
}
export default SignIn;
