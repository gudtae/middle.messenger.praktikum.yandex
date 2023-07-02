import { IBlock } from './Interface';
import { isEqual } from './IsEqual';

function render(query: string, block: IBlock) {
    const root = document.querySelector(query);
    if (root) {
        const content = block.getContent();
        if (content) {
            root.append(content);
        }
        return root;
    }
    return null;
}

type Props = {
    rootQuery: string;
    [key: string]: unknown;
};

export class Route {
    private _pathname: string;
    private _blockClass: new () => IBlock;
    private _block: IBlock | null;
    private _props: Props;

    constructor(pathname: string, view: new () => IBlock, props: Props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    getPathname() {
        return this._pathname;
    }
    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string): boolean {
        return isEqual(pathname, this._pathname);
    }

    render(): void {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}
