/* eslint-disable @typescript-eslint/no-explicit-any */
type Callback = (event: any) => void;

export class EventBus {
    private readonly listeners: Record<string, Callback[]> = {};

    on(event: string, callback: (...args: any) => void): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    off(event: string, callback: Callback): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event: string, ...args: any): void {
        if (!this.listeners[event]) {
            throw new Event(`Нет события: ${event}`);
        }
        this.listeners[event].forEach(listener => {
            listener(args);
        });
    }
}
