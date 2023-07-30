import Block from '../../core/Block';
import { template } from './inputError.tmlp';

interface InputProps {
    labelFor: string;
    inputName: string;
    inputType: string;
    labelText?: string,
    error?: string,
    class?: string;
    placeholder?: string;
    value?: string;
    accept?: string;
    events?: { [key: string]: (...args: never) => void }
}

export class InputError extends Block {
    constructor(props: InputProps) {
        super('label', props);
    }
    init() {
        this.getContent()?.setAttribute('for', this.props.labelFor);
        this.getContent()?.setAttribute('class', this.props.class);
        if (this.props.accept){
            this.getContent()?.setAttribute('accept', this.props.accept);
        }
    }
    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

