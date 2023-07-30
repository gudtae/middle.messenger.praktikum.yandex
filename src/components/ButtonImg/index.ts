import Block from '../../core/Block';
import { template } from './buttonImg.tmpl';

interface ButtonProps {
    events?: { [key: string]: (...args: never) => void }
}
export class Buttonimg extends Block {
    constructor(props: ButtonProps) {
        super('button', props);
    }
    protected render(): DocumentFragment {
        this.getContent()?.setAttribute('class', 'btn_img');
        this.getContent()?.setAttribute('type', 'submit');
        return this.compile(template, this.props);
    }
}
