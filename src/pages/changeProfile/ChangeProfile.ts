import Handlebars from 'handlebars';
import template from './changeProfile.tmpl';
import { ProfileData } from '../data/data';

const ChangeProfile = () => Handlebars.compile(template)({ProfileData});
export default ChangeProfile;
