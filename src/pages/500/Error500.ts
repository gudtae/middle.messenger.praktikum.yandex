import Block from '../../Utils/Block';
import template from './500.tmpl';

class Error500 extends Block {
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

export default Error500 ;
