import template from './img.tmpl';
import Block from '../../core/Block';

interface ProfileImgProps {
    path: string;
}

export class ProfileImg extends Block {
    constructor(props: ProfileImgProps) {
        super('p', {...props});
    }
    render(){
        return this.compile(template, this.props);
    }
}
