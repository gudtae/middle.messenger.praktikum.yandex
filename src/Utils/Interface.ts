import { EventBus } from '../core/EventBus'; 

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBlock {
    _id: string;
    props: Record<string, any>;
    children: Record<string, any>;
    eventBus: () => EventBus;
    _element: HTMLElement | null;
    _meta: {
        tagName: string;
        props: Record<string, any>;
    };
    getContent: () => HTMLElement | null;
    show(): void;
    hide(): void;
}

export type Indexed<T = any> = {
    [key in string]: T;
};
