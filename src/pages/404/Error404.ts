import { Link } from '../../components/Link';
import Block from '../../core/Block';
import template from './404.tmpl';

class Error404 extends Block {
    constructor(){
        super('main');
    }
    init(){
        this.getContent()?.setAttribute('class', 'error_layout');
        this.children.link = new Link({
            to: '/',
            text: 'Вернуться на главную',
            className: 'link'
        });
    }
    protected render(): DocumentFragment {
        return this.compile(template, {});
    }
}

export default Error404 ;
