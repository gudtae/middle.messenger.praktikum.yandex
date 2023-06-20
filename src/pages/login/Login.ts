import Handlebars from "handlebars";
import template from "./login.tmpl";

const Login = () => Handlebars.compile(template)({});
export default Login;
