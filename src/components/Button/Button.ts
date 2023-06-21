import Handlebars from 'handlebars';

const Button = (btn_href: string, btn_text: string) => Handlebars.compile(`
<a href={{btn_href}} class="btn">{{btn_text}}</a>
`)({btn_href, btn_text});
export default Button;
