import { EventBus } from './EventBus';
import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import IBlock from './Interface';


enum EVENTS {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render'
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ObjectType = { [key: string]: any }


class Block implements IBlock {
    static EVENTS = EVENTS;
    _id = '';
    _onPage = false;

    props: ObjectType;
    public children: ObjectType;
    eventBus: () => EventBus;

    _element: HTMLElement | null = null;
    _meta: { tagName: string; props: ObjectType; };

    constructor(tagName = 'div', propsWithChildren: ObjectType = {}) {
        const eventBus = new EventBus();
        const { props, children } = this._getChildrenAndProps(propsWithChildren);
        this._meta = {
            tagName,
            props: props as ObjectType,
        };
        this.children = children;
        this._id = nanoid(6);
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _getChildrenAndProps(childrenAndProps: ObjectType) {
        const props: ObjectType = {};
        const children: ObjectType = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { props, children };
    }

    _addEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach(eventName => {
            if (this._element) {
                this._element.addEventListener(eventName, events[eventName]);
            }
        });
    }
    _removeEvents() {
        const { events = { } } = this.props;

        Object.keys(events).forEach(eventName => {
            if (this._element) {
                this._element.removeEventListener(eventName, events[eventName]);
            }
        });
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    private _init() {
        this._createResources();

        this.init();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected init(): void { }


    componentDidMount() {
        return true;
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
    }

    private _componentDidUpdate(oldProps: ObjectType, newProps: ObjectType) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: ObjectType, newProps: ObjectType) {
        return oldProps !== newProps;
    }

    setProps = (nextProps: ObjectType) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    private _render() {
        const fragment = this.render();
        this._removeEvents();
        if (this._element) {
            this._element.innerHTML = '';
            this._element.append(fragment);
        }
        this._addEvents();
    }

    protected compile(template: string, context: ObjectType) {
        const contextAndStubs = { ...context };

        Object.entries(this.children).forEach(([name, component]) => {
            if (Array.isArray(component)) {
                contextAndStubs[name] = component.map(
                    (child) => `<div data-id="${child.id}"></div>`
                );
            } else {
                contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
            }
        });
        const temp = document.createElement('template');

        temp.innerHTML = Handlebars.compile(template)(contextAndStubs);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(this.children).forEach(([_, component]) => {
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

            if (!stub) {
                return;
            }
            component.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(component.getContent());
        });

        return temp.content;
    }

    protected render() {
        this.render();
        return this.compile('', {});
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: ObjectType) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop: string, value) {
                if (prop.indexOf('_') === 0) {
                    throw new Error('Нет прав');
                }
                const oldTarget = { ...target };
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }
    _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }
    get element() {
        return this._element;
    }
    show() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.getContent()!.style.display = 'block';
    }
    hide() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.getContent()!.style.display = 'none';
    }
}

export default Block;
