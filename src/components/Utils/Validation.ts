const ERROR_MESSAGES = {
    LOGIN: 'Логин должен содержать от 3 до 20 символов латинского алфавита с цифрами (допустим дефис)',
    PASSWORD: 'Пароль должен состоять от 8 до 40 символов латинского алфавита с одной заглавной буквой и цифрой',
    FNAME: 'Имя должно быть с заглавной буквы, без пробелов и без цифр, допустим дефис',
    SNAME: 'Фамилия должна быть с заглавной буквы, без пробелов и без цифр, допустим дефис',
    DNAME: 'Имя в чате должна быть с заглавной буквы, без пробелов и без цифр, допустим дефис',
    EMAIL: 'Введите почту правильного формата',
    PHONE: 'Номер телефона должен содержать от 10 до 15 символов',
    EMPTY: 'Поле не должно быть пустым!',
};

const REGEXP = {
    login: /^(?!^\d+)[a-zA-Z0-9-_]{3,20}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[^\s]).{8,40}/,
    name: /^[А-ЯA-Z]{1}[а-яa-z-]*$/,
    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
};

const checkRegExp = (label: string, value: string): string => {
    if (value === '') {
        return ERROR_MESSAGES.EMPTY;
    }
    if (label === 'login') {
        if (!REGEXP.login.test(value)) {
            return ERROR_MESSAGES.LOGIN;
        }
    }
    if (label === 'password' || label === 'password_again' || label === 'oldPassword' || label === 'newPassword') {
        if (!REGEXP.password.test(value)) {
            return ERROR_MESSAGES.PASSWORD;
        }
    }
    if (label === 'phone') {
        if (!REGEXP.phone.test(value)) {
            return ERROR_MESSAGES.PHONE;
        }
    }
    if (label === 'first_name') {
        if (!REGEXP.name.test(value)) {
            return ERROR_MESSAGES.FNAME;
        }
    }
    if (label === 'second_name') {
        if (!REGEXP.name.test(value)) {
            return ERROR_MESSAGES.SNAME;
        }
    }
    if (label === 'display_name') {
        if (!REGEXP.name.test(value)) {
            return ERROR_MESSAGES.DNAME;
        }
    }
    if (label === 'email') {
        if (!REGEXP.email.test(value)) {
            return ERROR_MESSAGES.EMAIL;
        }
    }
    return '';
};

export const checkInputs = (event: HTMLInputElement): boolean => {
    const parent = event.parentElement as HTMLElement;
    const errorLine = parent.querySelector('.red_error') as HTMLDivElement;
    const isValid = checkRegExp(event.name, event.value);
    errorLine.textContent = isValid;
    return !isValid;

};


export const focusin = (event: InputEvent): void => {
    checkInputs(event.target as HTMLInputElement);
};

export const focusout = (event: InputEvent): void => {
    checkInputs(event.target as HTMLInputElement);
};

export const submit = (event: Event): void => {
    event.preventDefault();

    const children = document.querySelectorAll('input');

    const data: Record<string, string> = {};
    children.forEach((child: HTMLInputElement) => {
        const error = child.parentElement?.querySelector('.red_error') as HTMLDivElement;
        const input = checkRegExp(child.name, child.value);
        if (child.value === '' || input) {
            error.textContent = input;
        } else {
            error.textContent = '';
            data[child.name] = child.value;
        }
    });

    if (Object.keys(data).length === children.length) {
        console.log(data);
    }
};
