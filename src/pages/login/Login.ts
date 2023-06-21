import Handlebars from 'handlebars';
import template from './login.tmpl';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Login = () => Handlebars.compile(template)({
    button: Button('/chat', 'войти'),
    input_login: Input('login', 'Логин', 'text', 'login'),
    input_password: Input('password', 'Пароль', 'password', 'password')
});
export default Login;
