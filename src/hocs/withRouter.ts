import Block from '../core/Block';
import router from '../core/Router';

export function withRouter(Component: typeof Block) {

    return class WithRouter extends Component {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(props: any & PropsWithRouter) {
            super({ ...props, router: router });
        }
    };
}

export interface PropsWithRouter {
    router: typeof router;
}
