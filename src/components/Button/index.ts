import Block from '../Utils/Block';
import {template} from './button.tmpl';

interface ButtonProps{
    text: string,
    events?: {[key: string]: (...args: any) => any}
}
export class Button extends Block {
    constructor(props: ButtonProps) {
        super('input', props);
    }
    protected render(): DocumentFragment {
        this.getContent()?.setAttribute('class', 'btn');
        this.getContent()?.setAttribute('type', 'submit');
        this.getContent()?.setAttribute('value', this.props.text);
        return this.compile(template, {
            text: this.props.text,
        });
    }
}
