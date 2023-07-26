import { Link } from '../../components/Link';
import Block from '../../core/Block';
import template from './500.tmpl';

class Error500 extends Block {
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

export default Error500 ;
