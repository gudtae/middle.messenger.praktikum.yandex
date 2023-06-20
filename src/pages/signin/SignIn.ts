import Handlebars from 'handlebars';
import template from './signin.tmpl';

const SignIn = () => Handlebars.compile(template)({});
export default SignIn;
