import Block from '../../Utils/Block';
import template from './404.tmpl';

class Error404 extends Block {
    constructor(){
        super('main');
    }
    init(){
        this.getContent()?.setAttribute('class', 'error_layout');
    }
    protected render(): DocumentFragment {
        return this.compile(template, {});
    }
}

export default Error404 ;
