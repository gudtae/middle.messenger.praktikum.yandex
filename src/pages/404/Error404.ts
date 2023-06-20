import Handlebars from 'handlebars';
import template from './404.tmpl';

const Error404 = () => Handlebars.compile(template)({});
export default Error404;
