import Handlebars from 'handlebars';
import template from './500.tmpl';

const Error500 = () => Handlebars.compile(template)({});
export default Error500;
