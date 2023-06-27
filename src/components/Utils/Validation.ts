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
    login: /^(?!^\d+)[a-zA-z0-9-_]{3,20}$/g,
    password: /^(?=.*[a-z])(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[^\s]).{8,40}/g,
    name: /^[А-ЯA-Z]{1}[а-яa-z-]*$/g,
    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g,
    phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g,
};
const stateErrors: { [key: string]: string } = {};
const checkValue = (label: string, value: string): string => {
    let errorMessage = '';
    if (label === 'login') {
        if (!REGEXP.login.test(value)) {
            errorMessage = ERROR_MESSAGES.LOGIN;
        }
    } else if (label === 'password') {
        if (!REGEXP.password.test(value)) {
            errorMessage = ERROR_MESSAGES.PASSWORD;
        }
    }
    stateErrors[label] = errorMessage;
    return errorMessage;
};

const check = (event: HTMLInputElement): boolean => {
    const name = event.name;
    const value = event.value;
    const parent = event.parentElement as HTMLElement;
    const error = parent.querySelector('.red_error') as HTMLElement | null;

    if (error) {
        const errorMessage = checkValue(name, value);
        error.textContent = errorMessage;
        return errorMessage === '';
    }

    return false;
};

export function focusin(event: Event) {
    check(event.target as HTMLInputElement);
}


export function focusout(event: Event) {
    check(event.target as HTMLInputElement);
}
export function submit(e: SubmitEvent) {
    e.preventDefault();
    const children = document.querySelectorAll('input');
    const state: { [key: string]: string } = {};
    let isError = false;

    children.forEach((child: HTMLInputElement) => {
        if (!check(child)) {
            state[child.name] = child.value;
        } else {
            isError = true;
        }
    });

    if (isError) {
        console.log('ошибка');
    } else {
        let isEmpty = false;
        children.forEach((child: HTMLInputElement) => {
            if (child.value === '') {
                isEmpty = true;
                const parent = child.parentElement as HTMLElement;
                const error = parent.querySelector('.red_error') as HTMLElement | null;
                if (error) {
                    error.textContent = ERROR_MESSAGES.EMPTY;
                }
            }
        });

        if (isEmpty) {
            console.log('ошибка');
        } else {
            console.log(state);
            children.forEach((child: HTMLInputElement) => {
                child.value = '';
            });
            const errors = document.querySelectorAll('.red_error');
            errors.forEach((error) => {
                error.textContent = '';
            });
        }
    }
}
