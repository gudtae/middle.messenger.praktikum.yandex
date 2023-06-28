import template from './profile.tmpl';
import Block from '../../components/Utils/Block';
import { ProfileData } from '../data/data';

class Profile extends Block {
    constructor(){
        super('main', ProfileData);
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', 'profile_layout');
    }
    protected render(): DocumentFragment {
        
        return this.compile(template, this.props);
    }
}
export default Profile ;
