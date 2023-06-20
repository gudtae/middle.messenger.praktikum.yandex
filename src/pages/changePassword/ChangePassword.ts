import Handlebars from "handlebars";
import template from "./changePassword.tmpl";

const ChangePassword = () => Handlebars.compile(template)({});
export default ChangePassword;
