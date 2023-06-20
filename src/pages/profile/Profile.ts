import Handlebars from "handlebars";
import template from "./profile.tmpl";
import { ProfileData } from "../data/data";

const Profile = () => Handlebars.compile(template)({ProfileData});
export default Profile;
