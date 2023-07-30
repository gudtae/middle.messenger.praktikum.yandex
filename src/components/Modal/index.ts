import Block from '../../core/Block';
import template from './modal.tmpl';
interface ModalProps {
    event?: void;
}
class Modal extends Block {
    constructor(props: ModalProps) {
        super('div', props);
    }
    render() {
        return this.compile(template, {...this.props});
    }
}
export default Modal;
