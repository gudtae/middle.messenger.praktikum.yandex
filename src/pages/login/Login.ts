import template from './login.tmpl';
import { Button } from '../../components/Button/index';
import { Input } from '../../components/Input/index';
import Block from '../../components/Utils/Block';

class Login extends Block {
    constructor() {
        super('main');
    }
    init(){
        this.getContent()?.setAttribute('class', 'login_signin');
    }
    protected render(): DocumentFragment {
        const button = new Button({
            text: 'войти',
            events: {
                click: () => console.log('работает')
            }
        });
        const input_login = new Input({
            labelFor: 'login',
            labelText: 'Логин',
            inputType: 'text',
            inputName: 'login',
        });
        const input_password = new Input({
            labelFor: 'password',
            labelText: 'Пароль',
            inputType: 'password',
            inputName: 'password',
        });
        this.children.input_login = input_login;
        this.children.input_password = input_password;
        this.children.button = button;
        return this.compile(template, this.props);
    }
}
export default Login;
