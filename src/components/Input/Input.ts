import Handlebars from 'handlebars';

const Input = (label_for: string, label_text: string, input_type: string, input_name: string) => Handlebars.compile(`
<label for={{label_for}}>
    <p class="label">{{label_text}}</p>
    <input type={{input_type}} id={{label_for}} name={{input_name}} class="input">
</label>
`)({ label_for, label_text, input_type, input_name });
export default Input;
