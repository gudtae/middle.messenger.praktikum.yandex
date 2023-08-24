import Block from '../../core/Block.ts';
import { template } from './button.tmpl.ts';

interface ButtonProps {
    text: string,
    className?: string,
    events?: { [key: string]: (...args: never) => void }
}
export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props);
    }
    protected render(): DocumentFragment {
        if (this.props.className) {
            this.getContent()?.setAttribute('class', this.props.className);
        } else {
            this.getContent()?.setAttribute('class', 'btn');
        }
        this.getContent()?.setAttribute('type', 'submit');
        return this.compile(template, this.props);
    }
}
