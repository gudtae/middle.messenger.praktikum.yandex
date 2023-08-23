import Block from '../../core/Block.ts';
import template from './link.tmpl.ts';
import router from '../../core/Router.ts';

interface LinkProps {
    text: string;
    to?: string,
    className: string,
    events?: {
        click: () => void;
    }
}

export class Link extends Block {
    constructor(props: LinkProps) {
        super('button', {
            ...props,
            router,
            events: {
                click: (event: MouseEvent) => {
                    event.preventDefault();
                    this.navigate();
                }
            },
        });
    }
    navigate() {
        this.props.router.go(this.props.to);
    }
    protected init(): void {
        this.getContent()?.setAttribute('class', this.props.className);
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
