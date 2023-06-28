import Block from '../Utils/Block';
import { template } from './input.tmpl';

interface InputProps {
    labelFor: string;
    labelText: string;
    inputType: string;
    inputName: string;
    class?: string;
    placeholder?: string;
}

export class Input extends Block {
    constructor(props: InputProps) {
        super('label', props);
    }
    init() {
        this.getContent()?.setAttribute('for', this.props.labelFor);
        this.getContent()?.setAttribute('class', this.props.class);
    }
    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}
