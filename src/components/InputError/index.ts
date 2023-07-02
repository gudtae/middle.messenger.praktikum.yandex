import Block from '../../Utils/Block';
import { template } from './inputError.tmlp';

interface InputProps {
    labelFor: string;
    labelText?: string,
    inputType: string;
    inputName: string;
    error?: string,
    class?: string;
    placeholder?: string;
    events?: { [key: string]: (...args: never) => void }
}

export class InputError extends Block {
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

