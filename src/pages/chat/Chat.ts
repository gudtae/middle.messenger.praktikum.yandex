import Handlebars from "handlebars";
import template from "./chat.tmpl";
import { ChatData } from "../data/data";
const Chat = () => Handlebars.compile(template)({ ChatData });
export default Chat;