import Block from '../Utils/Block';
import {template} from './button.tmpl';

interface ButtonProps{
    text: string,
    events?: {[key: string]: (...args: never) => void}
}
export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props);
    }
    protected render(): DocumentFragment {
        this.getContent()?.setAttribute('class', 'btn');
        this.getContent()?.setAttribute('type', 'submit');
        return this.compile(template, this.props);
    }
}
