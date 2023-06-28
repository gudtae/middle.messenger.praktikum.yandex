/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBlock {
    _id: string;
    _onPage: boolean;
    props: { [key: string]: any };
    children: { [key: string]: any };
    eventBus: () => void;
    _element: HTMLElement | null;
    _meta: {
        tagName: string;
        props: { [key: string]: any }
    };
}
export default IBlock ;
