import Handlebars from 'handlebars';
import template from './signin.tmpl';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const SignIn = () => Handlebars.compile(template)({
    button: Button('/chat', 'создать аккаунт'),
    input_email: Input('email', 'Почта', 'email', 'email'),
    input_login: Input('login', 'Логин', 'text', 'login'),
    input_first_name: Input('first_name', 'Имя', 'text', 'first_name'),
    input_second_name: Input('second_name', 'Фамилия', 'text', 'second_name'),
    input_phone: Input('phone', 'Телефон', 'tel', 'phone'),
    input_password: Input('password', 'Пароль', 'password', 'password'),
    input_password_again: Input('password_again', 'Пароль (введите еще раз', 'password', 'parrword'),
});
export default SignIn;
